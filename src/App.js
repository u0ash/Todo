import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import ToDoEntry from "./components/ToDoEntry";
import ToDoItems from "./components/ToDoItems";
import TodoFooter from "./components/TodoFooter";

@observer
class App extends Component {
  render() {
    return (
      <div className="todoapp">
        <ToDoEntry />
        <ToDoItems />
        <TodoFooter />
      </div>
    );
  }
}

export default App;
