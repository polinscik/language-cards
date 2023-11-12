import React, {useState, Fragment} from "react";
import Button from "../../../Button/Button";
import "./TableRow.scss";

function TableRow({id, word, pronunciation, translation, tags}) {
  const [editMode, setEditMode] = useState(false);
  const [wordState, setWord] = useState(word);
  const [wordInvalid, setWordInvalid] = useState(false);
  const [pronunciationState, setPronunciation] = useState(pronunciation);
  const [pronunciationInvalid, setPronunciationInvalid] = useState(false);
  const [translationState, setTranslation] = useState(translation);
  const [translationInvalid, setTranslationInvalid] = useState(false);
  const [tagsState, setTags] = useState(tags);
  const [tagsInvalid, setTagsInvalid] = useState(false);

  const isFormInvalid =
    wordInvalid || pronunciationInvalid || translationInvalid || tagsInvalid;

  const wordClassName = wordInvalid
    ? "invalid-input table-input"
    : "table-input";
  const pronunciationClassName = pronunciationInvalid
    ? "invalid-input table-input"
    : "table-input";
  const translationClassName = translationInvalid
    ? "invalid-input table-input"
    : "table-input";
  const tagsClassName = tagsInvalid
    ? "invalid-input table-input"
    : "table-input";

  function handleSave() {
    if (!wordState.trim()) {
      setWordInvalid(true);
    }
    if (!pronunciationState.trim()) {
      setPronunciationInvalid(true);
    }
    if (!translationState.trim()) {
      setTranslationInvalid(true);
    }
    if (!tagsState.trim()) {
      setTagsInvalid(true);
    }
    if (!isFormInvalid) {
      setEditMode(!editMode);
      console.log({
        id: id,
        word: wordState,
        pronunciation: pronunciationState,
        translation: translationState,
        tags: tagsState,
      });
    }
  }

  function handleWordChange(e) {
    const value = e.target.value;
    setWord(value);
    if (!value.trim()) {
      setWordInvalid(true);
    } else {
      setWordInvalid(false);
    }
  }

  function handlePronunciationChange(e) {
    const value = e.target.value;
    setPronunciation(value);
    if (!value.trim()) {
      setPronunciationInvalid(true);
    } else {
      setPronunciationInvalid(false);
    }
  }

  function handleTranslationChange(e) {
    const value = e.target.value;
    setTranslation(value);
    if (!value.trim()) {
      setTranslationInvalid(true);
    } else {
      setTranslationInvalid(false);
    }
  }

  function handleTagsChange(e) {
    const value = e.target.value;
    setTags(value);
    if (!value.trim()) {
      setTagsInvalid(true);
    } else {
      setTagsInvalid(false);
    }
  }

  function handleChange() {
    setEditMode(!editMode);
  }

  function handleCancelChange() {
    setWord(word);
    setPronunciation(pronunciation);
    setTranslation(translation);
    setTags(tags);
    setEditMode(false);
  }

  return (
    <Fragment>
      {editMode ? (
        <tr key={id}>
          <td>
            <input
              type="text"
              name="word"
              className={wordClassName}
              value={wordState}
              onChange={(e) => handleWordChange(e)}></input>
          </td>
          <td>
            <input
              type="text"
              name="pronunciation"
              className={pronunciationClassName}
              value={pronunciationState}
              onChange={(e) => handlePronunciationChange(e)}></input>
          </td>
          <td>
            <input
              type="text"
              name="translation"
              className={translationClassName}
              value={translationState}
              onChange={(e) => handleTranslationChange(e)}></input>
          </td>
          <td>
            <input
              type="text"
              name="tags"
              className={tagsClassName}
              value={tagsState}
              onChange={(e) => handleTagsChange(e)}></input>
          </td>
          <td className="table__btn-cont">
            <Button
              disabled={isFormInvalid}
              classname={"table-btn save-btn"}
              onClick={handleSave}>
              Сохранить
            </Button>
            <Button
              classname={"table-btn cancelChange-btn"}
              onClick={handleCancelChange}>
              Отменить изменения
            </Button>
            {isFormInvalid && (
              <p className="input-error-message">Заполните все поля</p>
            )}
          </td>
        </tr>
      ) : (
        <tr key={id}>
          <td>{wordState}</td>
          <td>{pronunciationState}</td>
          <td>{translationState}</td>
          <td>{tagsState}</td>
          <td className="table__btn-cont">
            <Button classname={"table-btn edit-btn"} onClick={handleChange}>
              Изменить
            </Button>
            <Button classname={"table-btn delete-btn"}>Удалить</Button>
          </td>
        </tr>
      )}
    </Fragment>
  );
}

export default TableRow;
