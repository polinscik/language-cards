import "./WordTable.scss";
import TableRow from "./ui/TableRow/TableRow";
import {useContext} from "react";
import {DataContext} from "../DataContext/DataContext";

function WordTable() {
  const {data, setData} = useContext(DataContext);
  if (!data) {
    return <p>Loading</p>;
  }
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
          {data.map((wordInfo) => (
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
