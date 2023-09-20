import React, {useState, Fragment} from "react";
import RedactBtn from "./RedactBtn";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";
import CancelChangeBtn from "./CancelChangeBtn";

function TableRow({id, word, pronunciation, translation, tags}) {
  const [redactMode, setRedactMode] = useState(false);
  const [word_State, setWord] = useState(word);
  const [pronunciation_State, setPronunciation] = useState(pronunciation);
  const [translation_State, setTranslation] = useState(translation);
  const [tags_State, setTags] = useState(tags);

  function handleChange() {
    setRedactMode(!redactMode);
  }

  function handleCancelChange() {
    setWord(word);
    setPronunciation(pronunciation);
    setTranslation(translation);
    setTags(tags);
    setRedactMode(false);
  }

  return (
    <Fragment>
      {redactMode ? (
        <tr key={id}>
          <td>
            <input
              type="text"
              value={word_State}
              onChange={(e) => setWord(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={pronunciation_State}
              onChange={(e) => setPronunciation(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={translation_State}
              onChange={(e) => setTranslation(e.target.value)}></input>
          </td>
          <td>
            <input
              type="text"
              value={tags_State}
              onChange={(e) => setTags(e.target.value)}></input>
          </td>
          <td className="table__btn-cont">
            <SaveBtn onClick={handleChange} />
            <CancelChangeBtn onClick={handleCancelChange}></CancelChangeBtn>
          </td>
        </tr>
      ) : (
        <tr key={id}>
          <td>{word_State}</td>
          <td>{pronunciation_State}</td>
          <td>{translation_State}</td>
          <td>{tags_State}</td>
          <td className="table__btn-cont">
            <RedactBtn onClick={handleChange} />
            <DeleteBtn></DeleteBtn>
          </td>
        </tr>
      )}
    </Fragment>
  );
}

export default TableRow;
