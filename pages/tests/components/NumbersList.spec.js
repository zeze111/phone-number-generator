import React from "react";
import { shallow } from "enzyme";
import NumbersList from "../../components/NumbersList";
import { listNumbers, sortNumbers, clearNumbersStorage } from "../../actions";

jest.mock("../../actions", () => ({
  listNumbers: jest.fn(() => ({
    numbers: ["012", "123", "234", "345"],
    total: 4
  })),
  sortNumbers: jest.fn(() => ({
    numbers: ["012", "123", "234", "345"],
    response: {}
  })),
  clearNumbersStorage: jest.fn(() => ({
    message: "All numbers have been cleared"
  }))
}));

describe("NumbersList", () => {
  it("renders the component", () => {
    const wrapper = shallow(<NumbersList />);
    wrapper.setState({ numbers: ["012", "123", "234", "345"] });
    expect(wrapper).toMatchSnapshot();
  });

  describe("orderList", () => {
    const wrapper = shallow(<NumbersList />);
    const button = wrapper.find(".order-button");

    button.simulate("click");
    expect(sortNumbers).toHaveBeenCalledWith("desc", 0, 3);
  });

  describe("clearList", () => {
    const wrapper = shallow(<NumbersList />);
    const button = wrapper.find(".clear-button");

    button.simulate("click");
    expect(clearNumbersStorage).toHaveBeenCalled();
  });
});
