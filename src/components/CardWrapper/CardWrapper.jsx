import React, {Fragment, useState} from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import {observer, inject} from "mobx-react";
import "./CardWrapper.scss";

//todo: use store in Card

const testArr = [
  {
    english: "Не удалось получить данные",
    transcription: "",
    russian: "",
    tags: "",
  },
];

const CardWrapper = inject(["wordStore"])(
  observer(({wordStore, initialIndex = 0}) => {
    const [index, setIndex] = useState(initialIndex);
    const [learned, setLearned] = useState(0);
    const [grammarWord, setGrammarWord] = useState("слов");

    let hasPrev = index > 0;
    let hasNext = index < wordStore.words.length - 1;

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
          word={wordStore.words[index].english}
          pronunciation={wordStore.words[index].transcription}
          translation={wordStore.words[index].russian}
          tags={wordStore.words[index].tags}
          updateLearnedCount={updateLearnedCount}></Card>
        <div className="btn-container">
          <Button
            classname={"previous-btn"}
            disabled={!hasPrev}
            onClick={handlePreviousClick}>
            Назад
          </Button>
          <p className="wordcount">
            Карточка {index + 1} из {wordStore.words.length}
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
  })
);
export default CardWrapper;
