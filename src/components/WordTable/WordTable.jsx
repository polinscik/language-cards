import "./WordTable.scss";
import dataArray from "../../testWords.json";
import DeleteBtn from "./DeleteBtn";
import RedactBtn from "./RedactBtn";
import SaveBtn from "./SaveBtn";

function WordTable() {
  return (
    <div>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th>Слово</th>
            <th>Произношение</th>
            <th>Перевод</th>
            <th>Теги</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {dataArray.map((wordInfo) => (
            <tr key={wordInfo.id}>
              <td>{wordInfo.english}</td>
              <td>{wordInfo.transcription}</td>
              <td>{wordInfo.russian}</td>
              <td>{wordInfo.tags}</td>
              <td className="table__btn-cont">
                <RedactBtn />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordTable;
