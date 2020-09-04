import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import todoStore from "../stores/TodoStore"
import {observer} from "mobx-react"
import FILTER_TYPES from "../constants/FilterTypes"

@observer
class ToDoItems extends Component {
  render() {
    return (
      <section className ="main">
        <ul className="todo-list">
          {todoStore.filterTodos().map((todo) => {
            return <ToDoItem todo={todo} key={todo.id} />;
          })}
        </ul>
      </section>
    );
  }
}

export default ToDoItems;
