import "./BtnStyles.scss";
function PreviousBtn({onClick, disabled}) {
  return (
    <button disabled={disabled} onClick={onClick} className="btn previous-btn">
      Назад
    </button>
  );
}

export default PreviousBtn;
