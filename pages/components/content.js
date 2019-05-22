import { Component } from "react";
import Sidebar from "./Sidebar";
import Generate from "./Generate";
import NumbersList from "./NumbersList";

class Content extends Component {
  state = {
    linkNo: 1,
    showList: false
  };

  setLinkNo = link => {
    this.setState({ linkNo: link });
  };

  render() {
    return (
      <div className=".body">
        <div className="sidebar-content">
          <Sidebar linkNo={this.state.linkNo} setLinkNo={this.setLinkNo} />
        </div>
        <div className="content">
          {this.state.linkNo === 1 ? <Generate /> : <NumbersList />}
        </div>
      </div >
    );
  }
}

export default Content;
