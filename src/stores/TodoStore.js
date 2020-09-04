import { observable, action } from "mobx";
import TodoModel from "./TodoModel";
import FILTER_TYPES from "../constants/FilterTypes";

class TodoStore {
  @observable todos = [];
  lastId = 0;
  @observable filter = FILTER_TYPES.NONE;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, this.lastId++, title, false));
  }

  @action
  changeFilter(filter) {
    this.filter = filter;
  }

  removeCompleted() {
    this.todos = this.todos.filter((item) => !item.completed);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  filterTodos() {
    switch (this.filter) {
      case FILTER_TYPES.NONE:
        return this.todos;
      case FILTER_TYPES.ACTIVES:
        return this.todos.filter((todo) => !todo.completed);
      case FILTER_TYPES.COMPLETED:
        return this.todos.filter((todo) => todo.completed);
      default:
        return this.todos;
    }
  }
}
const todoStore = new TodoStore();
export default todoStore;
