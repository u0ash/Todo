import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class ToDoItem extends Component {
  onToggle() {
    this.props.todo.toggle();
  }
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            onChange={() => {
              this.onToggle();
            }}
            type="checkbox"
            className="toggle"
            vlaue="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button
            className="destroy"
            onClick={() => {
              todoStore.removeTodo(todo.id);
            }}
          />
        </div>
        <input class="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}

export default ToDoItem;
