import React, {useState, Fragment} from "react";
import Button from "../../../Button/Button";

function TableRow({id, word, pronunciation, translation, tags}) {
  const [editMode, setEditMode] = useState(false);
  const [wordState, setWord] = useState(word);
  const [pronunciationState, setPronunciation] = useState(pronunciation);
  const [translationState, setTranslation] = useState(translation);
  const [tagsState, setTags] = useState(tags);

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
              value={wordState}
              onChange={(e) => setWord(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={pronunciationState}
              onChange={(e) => setPronunciation(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={translationState}
              onChange={(e) => setTranslation(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={tagsState}
              onChange={(e) => setTags(e.target.value)}></input>
          </td>
          <td className="table__btn-cont">
            <Button classname={"table-btn save-btn"} onClick={handleChange}>
              Сохранить
            </Button>
            <Button
              classname={"table-btn cancelChange-btn"}
              onClick={handleCancelChange}>
              Отменить изменения
            </Button>
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
