import React, {Fragment, useState} from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./CardWrapper.scss";

const testArr = [
  {
    english: "Не удалось получить данные",
    transcription: "",
    russian: "",
    tags: "",
  },
];

export default function CardWrapper({dataArray = testArr, initialIndex = 0}) {
  const [index, setIndex] = useState(initialIndex);

  let hasPrev = index > 0;
  let hasNext = index < dataArray.length - 1;

  const handlePreviousClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };
  return (
    <Fragment>
      <Card
        word={dataArray[index].english}
        pronunciation={dataArray[index].transcription}
        translation={dataArray[index].russian}
        tags={dataArray[index].tags}></Card>
      <div className="btn-container">
        <Button
          classname={"previous-btn"}
          disabled={!hasPrev}
          onClick={handlePreviousClick}>
          Назад
        </Button>
        <p className="wordcount">
          Карточка {index + 1} из {dataArray.length}
        </p>
        <Button
          classname={"next-btn"}
          disabled={!hasNext}
          onClick={handleNextClick}>
          Следующее слово
        </Button>
      </div>
    </Fragment>
  );
}
