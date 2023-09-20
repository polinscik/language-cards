import "../Buttons/BtnStyles.scss";

function SaveBtn({onClick}) {
  return <button onClick={onClick} className="btn table-btn save-btn">Сохранить</button>;
}

export default SaveBtn;
