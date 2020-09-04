import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import FILTER_TYPES from "../constants/FilterTypes";

@observer
class ToDoFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>
            {todoStore.todos.filter((item) => !item.completed).length}
          </strong>{" "}
          item left
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={() => {
                todoStore.changeFilter(FILTER_TYPES.NONE);
              }}
              className={
                todoStore.filter === FILTER_TYPES.NONE ? "selected" : ""
              }
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                todoStore.changeFilter(FILTER_TYPES.ACTIVES);
              }}
              className={
                todoStore.filter === FILTER_TYPES.ACTIVES ? "selected" : ""
              }
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                todoStore.changeFilter(FILTER_TYPES.COMPLETED);
              }}
              className={
                todoStore.filter === FILTER_TYPES.COMPLETED ? "selected" : ""
              }
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          onClick={() => todoStore.removeCompleted()}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default ToDoFooter;
