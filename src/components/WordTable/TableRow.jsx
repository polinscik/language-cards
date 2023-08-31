import RedactBtn from "./RedactBtn";
import React, {useState} from "react";
import SaveBtn from "./SaveBtn";
import DeleteBtn from "./DeleteBtn";

function TableRow({id, word, pronunciation, translation, tags}) {
  const [redactMode, setRedactMode] = useState(false);

  const handleChange = () => {
    setRedactMode(!redactMode);
  };

  return (
    <React.Fragment>
      {redactMode ? (
        <tr key={id}>
          <td>
            <input type="text" value={word}></input>
          </td>
          <td>
            <input type="text" value={pronunciation}></input>
          </td>
          <td>
            <input type="text" value={translation}></input>
          </td>
          <td>
            <input type="text" value={tags}></input>
          </td>
          <td className="table__btn-cont">
            <SaveBtn onClick={handleChange} />
            <DeleteBtn />
          </td>
        </tr>
      ) : (
        <tr key={id}>
          <td>{word}</td>
          <td>{pronunciation}</td>
          <td>{translation}</td>
          <td>{tags}</td>
          <td className="table__btn-cont">
            <RedactBtn onClick={handleChange} />
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default TableRow;
