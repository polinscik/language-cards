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
  const [learned, setLearned] = useState(0);
  const [grammarWord, setGrammarWord] = useState("слов");

  let hasPrev = index > 0;
  let hasNext = index < dataArray.length - 1;

  const updateLearnedCount = () => {
    setLearned((prevCount) => prevCount + 1);
    setGrammarWord(checkGrammar(learned + 1));
  };

  const checkGrammar = (learnedValue) => {
    let result;
    if (learnedValue >= 11 && learnedValue <= 14) {
      return "слов";
    }
    let lastNumber = learnedValue.toString().slice(-1);
    switch (lastNumber) {
      case "0":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        result = "слов";
        break;
      case "1":
        result = "слово";
        break;
      case "2":
      case "3":
      case "4":
        result = "словa";
        break;
    }
    return result;
  };

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
        tags={dataArray[index].tags}
        updateLearnedCount={updateLearnedCount}></Card>
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
        <p className="words-learned">
          Изучено {learned} {grammarWord}
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
