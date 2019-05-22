import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/header";

describe("Header", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
