import "../Buttons/BtnStyles.scss";

function RedactBtn({onClick}) {
  return (
    <button onClick={onClick} className="btn table-btn redact-btn">
      Изменить
    </button>
  );
}

export default RedactBtn;
