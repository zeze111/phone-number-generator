import React from "react";
import { shallow } from "enzyme";
import Index from "../Index";

describe("Index page", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
