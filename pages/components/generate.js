import { Component } from "react";
import { generateNumbers } from "../actions";

class Generate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: ""
    };
  }
  response = {};

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = async event => {
    event.preventDefault();
    const { limit } = this.state;

    const response = await generateNumbers(limit);
    this.response = response;
    this.setState({ numbers: response.numbers });
  };

  render() {
    return (
      <div className="generate-content">
        <h3> Generate New Numbers </h3>
        <p className="generate-text">
          Please enter the amount of numbers to generate
        </p>
        <form className="generate-form">
          Limit:
          <input type="text" name="limit" id="limit" onChange={this.onChange} />
          <button
            className="submit-button"
            type="button"
            onClick={this.onSubmit}
          >
            Enter
          </button>
        </form>
        <div className="generate-numbers">
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
      </div>
    );
  }
}

export default Generate;
