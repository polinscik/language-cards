import {
  makeObservable,
  makeAutoObservable,
  observable,
  action,
  computed,
} from "mobx";
// import {observer, inject} from "mobx-react";
// import {Provider} from "mobx-react";

class ObservableWordStore {
  words = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getData = () => {
    this.isLoading = true;
    return fetch("/api/words", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.words = data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  };

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return "<none>";
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

export default ObservableWordStore;

const observableTodoStore = new ObservableWordStore();
