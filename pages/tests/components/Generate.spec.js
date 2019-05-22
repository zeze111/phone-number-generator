import React from "react";
import { shallow } from "enzyme";
import Generate from "../../components/generate";
import { generateNumbers } from "../../actions";

jest.mock("../../actions", () => ({
  generateNumbers: jest.fn(() => ({
    numbers: ["012", "123", "234", "345"]
  }))
}));

describe("Generate", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Generate />);
    wrapper.setState({ numbers: ["012", "123", "234", "345"] });
    expect(wrapper).toMatchSnapshot();
  });

  describe("onChange", () => {
    it("should change event", () => {
      const event = {
        target: { name: "limit", value: "10" }
      };
      const wrapper = shallow(<Generate />);
      const limit = wrapper.find("#limit");
      limit.simulate("change", event);
      expect(wrapper.instance().state.limit).toBe("10");
    });
  });

  describe("onSubmit", () => {
    const event = {
      preventDefault: jest.fn()
    };
    const wrapper = shallow(<Generate />);

    wrapper.setState({ limit: "5" });
    wrapper.instance().onSubmit(event);
    expect(generateNumbers).toHaveBeenCalledWith("5");
  });
});
