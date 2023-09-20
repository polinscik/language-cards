import "./BtnStyles.scss";
function PreviousBtn({onClick}) {
  return (
    <button onClick={onClick} className="btn previous-btn">
      Назад
    </button>
  );
}

export default PreviousBtn;
