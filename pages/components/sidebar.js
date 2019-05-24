const Sidebar = props => {
  return (
    <div className="sidebar-div">
      <button
        id="generate"
        className={props.linkNo === 1 ? "pressed" : "sidebar-list"}
        onClick={() => props.setLinkNo(1)}
      >
        <p className="sidebar-inner-text2">Generate Numbers</p>
      </button>
      <button
        id="list"
        className={props.linkNo === 2 ? "pressed" : "sidebar-list"}
        onClick={() => props.setLinkNo(2)}
      >
        <p className="sidebar-inner-text2">Numbers</p>
      </button>
      <button className={props.linkNo === 3 ? "pressed" : "sidebar-list"}>
        <p className="sidebar-inner-text2">Accounts</p>
      </button>
      <button className={props.linkNo === 4 ? "pressed" : "sidebar-list"}>
        <p className="sidebar-inner-text2">Settings</p>
      </button>
    </div>
  );
};

export default Sidebar;
