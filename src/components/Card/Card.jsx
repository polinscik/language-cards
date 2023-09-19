import "./Card.scss";
import "../../components/Buttons/BtnStyles.scss";
import {useState, Fragment} from "react";

function Card({word, pronunciation, translation, tags}) {
  const [showTranslation, setShowTranslation] = useState(false);

  function handleClick() {
    setShowTranslation(!showTranslation);
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
      <button className="btn showTranstation-btn" onClick={handleClick}>
        {showTranslation ? "Скрыть" : "Показать"} перевод
      </button>
    </div>
  );
}

export default Card;
