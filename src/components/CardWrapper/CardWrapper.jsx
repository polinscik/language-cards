import React, {Fragment, useState} from "react";
import Card from "../Card/Card";
import NextBtn from "../Buttons/NextBtn";
import PreviousBtn from "../Buttons/PreviousBtn";
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
        <PreviousBtn
          disabled={!hasPrev}
          onClick={handlePreviousClick}></PreviousBtn>
        <p className="wordcount">
          Карточка {index + 1} из {dataArray.length}
        </p>
        <NextBtn disabled={!hasNext} onClick={handleNextClick}></NextBtn>
      </div>
    </Fragment>
  );
}
