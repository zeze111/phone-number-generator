import React from "react";
import { shallow } from "enzyme";
import Content from "../../components/content";
import NumbersList from "../../components/numbersList";

describe("Content", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Content />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("setLinkNo", () => {
    it("should set the state of linkNo", () => {
      const wrapper = shallow(<Content />);
      const link = 2;
      wrapper.setState({ linkNo: link });
      expect(wrapper.instance().state.linkNo).toBe(2);
    });
  });
});
