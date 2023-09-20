import "../Buttons/BtnStyles.scss";

function DeleteBtn({onClick}) {
  return <button onClick={onClick} className="btn table-btn delete-btn">Удалить</button>;
}

export default DeleteBtn;
