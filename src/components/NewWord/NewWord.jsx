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
  const [invalid, setInvalid] = useState({
    word: false,
    translation: false,
    pronunciation: false,
    tags: false,
  });
  const {data, setData} = useContext(DataContext);

  const formInvalid =
    invalid.word ||
    invalid.translation ||
    invalid.pronunciation ||
    invalid.tags;

  const isFormValid =
    form.tags.trim() &&
    form.word.trim() &&
    form.pronunciation.trim() &&
    form.translation.trim();

  if (!data) {
    return <p>Loading</p>;
  }
  const nextId = String(Number(data[data.length - 1].id) + 1);
  const wordData = {
    id: nextId,
    english: form.word.trim(),
    russian: form.translation.trim(),
    transcription: form.pronunciation.trim(),
    tags: form.tags.trim(),
  };

  const wordClassName = invalid.word ? "new-word__invalid" : "";
  const translationClassName = invalid.translation ? "new-word__invalid" : "";
  const pronunciationClassName = invalid.pronunciation
    ? "new-word__invalid"
    : "";
  const tagsClassName = invalid.tags ? "new-word__invalid" : "";

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});

    if (e.target.value.trim()) {
      setInvalid({...invalid, [e.target.name]: false});
    } else if (!e.target.value.trim()) {
      setInvalid({...invalid, [e.target.name]: true});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.tags.trim()) {
      setInvalid({...invalid, tags: true});
    }
    if (!form.translation.trim()) {
      setInvalid({...invalid, translation: true});
    }
    if (!form.pronunciation.trim()) {
      setInvalid({...invalid, pronunciation: true});
    }
    if (!form.word.trim()) {
      setInvalid({...invalid, word: true});
    }
    if (!formInvalid && isFormValid) {
      console.log(JSON.stringify(wordData));
      fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
        method: "POST",
        body: JSON.stringify(wordData),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          response.json();
          console.log(response);
          setData(...data, {...wordData});
        })
        .catch((error) => console.log(error));
    }
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
            className={wordClassName}
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
            className={pronunciationClassName}
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
            className={translationClassName}
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
            className={tagsClassName}
          />
        </div>
        {formInvalid && (
          <div>
            <p className="new-word__error-message">Заполните все поля!</p>
          </div>
        )}
        <Button
          classname={"save-btn new-word-btn"}
          onClick={handleSubmit}
          disabled={formInvalid}>
          Сохранить
        </Button>
      </form>
    </section>
  );
}

//todo: make new route for this component. this is a form that will POST its data to the server(?) and change the context
// do validation on submit
