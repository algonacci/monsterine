import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {
              monsters: users,
            };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div>
              <h1 key={monster.id}>{monster.name}</h1>
              <p>{monster.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
