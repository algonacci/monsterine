import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        className={this.props.className}
        typeof="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
