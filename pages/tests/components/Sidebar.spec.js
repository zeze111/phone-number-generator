import React from "react";
import { shallow } from "enzyme";
import Sidebar from "../../components/sidebar";

describe("Sidebar", () => {
  it("should render the component", () => {
    const props = {
      linkNo: 1,
      setLinkNo: jest.fn()
    };

    const wrapper = shallow(<Sidebar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("setLinkNo", () => {
    it("should set the state of linkNo", () => {
      const props = {
        linkNo: 1,
        setLinkNo: jest.fn()
      };
      const wrapper = shallow(<Sidebar  {...props} />);
      const link = 2;
      const button = wrapper.find("#list");
      button.simulate("click");
      expect(props.setLinkNo).toHaveBeenCalledWith(link);
    });
  });
});
