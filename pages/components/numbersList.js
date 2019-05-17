import { Component } from "react";
import { listNumbers, sortNumbers, clearNumbersStorage } from "../actions";

class NumbersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      response: {}
    };
  }
  order = "asc";

  async componentDidMount() {
    const response = await listNumbers(0, 3);
    this.setState({ numbers: response.numbers, total: response.total });
  }

  orderList = async () => {
    const orderType = this.order === "desc" ? "asc" : "desc";
    this.order = orderType;
    const response = await sortNumbers(orderType, 0, 3);
    this.setState({ numbers: response.numbers, response });
  };

  clearList = async () => {
    const numbers = await clearNumbersStorage();
    this.setState({ numbers, message: numbers.message });
  };

  render() {
    return (
      <div>
        <div className="generate-content">
          <h3> List of Numbers Generated </h3>
          <div>
            <button
              className="order-button"
              type="button"
              onClick={this.orderList}
            >
              Order
            </button>
            {this.order}
            <button
              className="clear-button"
              type="button"
              onClick={this.clearList}
            >
              Clear
            </button>
          </div>
          {this.state.message && <span> {this.state.message} </span>}
          <div className="list-numbers">
            <ul>
              {this.state.numbers &&
                this.state.numbers.map((number, index) => {
                  return (
                    <li key={index} className="numbers">
                      {number}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <p> Total Numbers Generated: {this.state.total}</p>
            <p> Minimum Number Generated: {this.state.response.minNumber}</p>
            <p> Maximum Number Generated: {this.state.response.maxNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NumbersList;
