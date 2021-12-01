import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/searchbox/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox handleChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
