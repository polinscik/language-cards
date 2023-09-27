import "./BtnStyles.scss";
function NextBtn({onClick, disabled}) {
  return (
    <button disabled={disabled} onClick={onClick} className="btn next-btn">
      Следующее слово
    </button>
  );
}

export default NextBtn;
