import { Component } from "react";
import Sidebar from "./sidebar";
import Generate from "./generate";
import NumbersList from "./numbersList";

class Content extends Component {
  state = {
    linkNo: 0,
    showList: false
  };

  setLinkNo = (link) => {
    this.setState({ linkNo: link });
  };

  render() {
    return (
      <div>
        <div className="sidebar-content">
          <Sidebar setLinkNo={this.setLinkNo} />
        </div>
        <div className="content">
          {this.state.linkNo === 1 ? <Generate /> : <NumbersList />}
        </div>
      </div>
    );
  }
}

export default Content;
