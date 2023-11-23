import "./WordTable.scss";
import TableRow from "./ui/TableRow/TableRow";
import {observer, inject} from "mobx-react";
import NewWord from "../NewWord/NewWord";

const WordTable = inject(["wordStore"])(
  observer(({wordStore}) => {
    return (
      <div>
        <div className="new-word-container">
          <NewWord></NewWord>
        </div>
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
            {wordStore.words.map((wordInfo, index) => (
              <TableRow
                key={wordInfo.id}
                index={index}
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
  })
);

export default WordTable;
