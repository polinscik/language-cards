import React, {useState, useContext} from "react";
import Button from "../Button/Button";
import "./NewWord.scss";
import {observer, inject} from "mobx-react";

const NewWord = inject(["wordStore"])(
  observer(({wordStore}) => {
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
    const [success, setSuccess] = useState(false);

    const formInvalid =
      invalid.word ||
      invalid.translation ||
      invalid.pronunciation ||
      invalid.tags;

    const isFormValidInitially =
      form.tags.trim() &&
      form.word.trim() &&
      form.pronunciation.trim() &&
      form.translation.trim();

    const nextId = wordStore.nextId;

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
        setInvalid((prev) => ({...prev, tags: true}));
      }
      if (!form.translation.trim()) {
        setInvalid((prev) => ({...prev, translation: true}));
      }
      if (!form.pronunciation.trim()) {
        setInvalid((prev) => ({...prev, pronunciation: true}));
      }
      if (!form.word.trim()) {
        setInvalid((prev) => ({...prev, word: true}));
      }
      if (!formInvalid && isFormValidInitially) {
        console.log(JSON.stringify(wordData));
        //Добавление новой карточки
        // wordStore.addNewWord(wordData);
        const isRequestSuccessful = wordStore.addNewWord(wordData);
        // как проверить успешное добавление на сервер? // коллбэк из стора - можно ли так делать?

        if (isRequestSuccessful) {
          setSuccess(true);
          setTimeout(() => setSuccess(false), 5000);
          setForm({
            word: "",
            translation: "",
            pronunciation: "",
            tags: "",
          });
        }
      }
    }

    return (
      <section className="new-word">
        <h2 className="new-word__title">Добавить новую карточку:</h2>
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
          {success && (
            <div>
              <p className="new-word__success-message">Слово добавлено!</p>
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
  })
);

export default NewWord;
