import {
  makeObservable,
  makeAutoObservable,
  observable,
  action,
  computed,
} from "mobx";
// import {observer, inject} from "mobx-react";

class ObservableWordStore {
  words = [];
  isGetLoading = false;
  isLoading = false;

  constructor() {
    makeObservable(this, {
      words: observable,
      isLoading: observable,
      isGetLoading: observable,
      nextId: computed,
      getData: action,
      deleteWord: action,
      updateWord: action,
      addNewWord: action,
    });
  }

  get nextId() {
    if (this.words.length > 0) {
      return Number(this.words[this.words.length - 1].id) + 1;
    }
  }

  getData() {
    this.isGetLoading = true;
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
        this.isGetLoading = false;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        this.isGetLoading = false;
      });
  }

  deleteWord(id, index) {
    this.isLoading = true;
    return fetch(`/api/words/${id}/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        this.isLoading = false;
        const newArr = this.words.filter((el, i) => {
          return i !== index;
        });
        this.words = newArr;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  updateWord(word, index) {
    this.isLoading = true;
    return fetch(`/api/words/${word.id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        this.isLoading = false;
        const newArr = this.words.map((el, i) => {
          if (i == index) {
            el = {...word};
          }
          return el;
        });
        this.words = newArr;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  addNewWord(word) {
    this.isLoading = true;
    return fetch(`/api/words/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(word),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(response);
        this.isLoading = false;
        this.words.push(word);
        return true;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        return false;
      });
  }
}

export default ObservableWordStore;
