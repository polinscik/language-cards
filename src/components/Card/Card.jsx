import "./Card.scss";

function Card({word, pronunciation, translation, tags}) {
  return (
    <div className="card">
      <p className="card__word">{word}</p>
      <p className="card__pronunciation">{pronunciation}</p>
      <p className="card__translation">{translation}</p>
      <p className="card__theme">{tags}</p>
    </div>
  );
}

export default Card;
