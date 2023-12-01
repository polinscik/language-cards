import "./Card.scss";
import Button from "../Button/Button";
import {useState, Fragment, useRef, useEffect} from "react";

function Card({word, pronunciation, translation, tags, updateLearnedCount}) {
  const [showTranslation, setShowTranslation] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    btnRef.current.focus();
  });

  useEffect(() => {
    setShowTranslation(false);
  }, [word]);

  function handleClick() {
    setShowTranslation(!showTranslation);
    if (!showTranslation) {
      updateLearnedCount();
    }
  }

  return (
    <div className="card">
      <p className="card__word">{word}</p>
      {showTranslation && (
        <Fragment>
          <p className="card__translation">{translation}</p>
          <p className="card__pronunciation">{pronunciation}</p>
          <p className="card__theme">{tags}</p>
        </Fragment>
      )}
      <Button
        ref={btnRef}
        classname="showTranstation-btn"
        onClick={handleClick}>
        {showTranslation ? "Скрыть" : "Показать"} перевод
      </Button>
    </div>
  );
}

export default Card;
