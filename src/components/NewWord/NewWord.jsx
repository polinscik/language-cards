import React, {useState, useContext} from "react";
import {DataContext} from "../DataContext/DataContext";
import Button from "../Button/Button";
import "./NewWord.scss";

export default function NewWord() {
  const [form, setForm] = useState({
    word: "",
    translation: "",
    pronunciation: "",
    tags: "",
  });

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }
  return (
    <section className="new-word">
      <h2 className="new-word__title">Заполните данные карточки:</h2>
      <form className="new-word__form">
        <div className="new-word__input-field">
          <label htmlFor="word">Слово: </label>
          <input
            type="text"
            name="word"
            id="word"
            value={form.word}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-word__input-field">
          <label htmlFor="pronunciation">Транскрипция: </label>
          <input
            type="text"
            name="pronunciation"
            id="pronunciation"
            value={form.pronunciation}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-word__input-field">
          <label htmlFor="translation">Перевод: </label>
          <input
            type="text"
            name="translation"
            id="translation"
            value={form.translation}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="new-word__input-field">
          <label htmlFor="tags">Теги: </label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={form.tags}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <Button classname={"save-btn new-word-btn"} onClick={handleSubmit}>
          Сохранить
        </Button>
      </form>
    </section>
  );
}

//todo: make new route for this component. this is a form that will POST its data to the server(?) and change the context
// do validation on submit
