import React, { Component } from "react";
import "../styles.css";

class TodoList extends Component {
  state = {
    item: ["item1", "item2"],
    input: "",
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  handleInput = (e) => {
    let currentItems = this.state.item;
    let newInput = this.state.input;
    currentItems.push(newInput);
    this.setState({
      item: currentItems,
    });
  };

  handleDelete = (e) => {
    let currentItems = this.state.item;
    currentItems.splice(e, 1);
    this.setState({
      item: currentItems,
    });
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form>
          <h3>type something</h3>
          <input type="text" value={input} onChange={this.handleChange} />
          <button type="button" onClick={this.handleInput}>
            Add
          </button>
          <ul className="items">
            {this.state.item.map((val, key) => {
              return (
                <li key={key}>
                  {val}{" "}
                  <button type="button" onClick={this.handleDelete}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default TodoList;
