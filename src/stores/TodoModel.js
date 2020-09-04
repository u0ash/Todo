import { observable, action } from "mobx";

class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;

  constructor(store, id, title, completed) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  toggle() {
    this.completed = !this.completed;
  }
}

export default TodoModel
