import "./WordTable.scss";
import dataArray from "../../testWords.json";
import DeleteBtn from "./DeleteBtn";
import SaveBtn from "./SaveBtn";
import TableRow from "./TableRow";

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
            <TableRow
              key={wordInfo.id}
              id={wordInfo.id}
              word={wordInfo.english}
              pronunciation={wordInfo.transcription}
              translation={wordInfo.russian}
              tags={wordInfo.tags}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WordTable;
