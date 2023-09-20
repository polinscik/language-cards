import "./BtnStyles.scss";
function NextBtn({onClick}) {
  return <button onClick={onClick} className="btn next-btn">Следующее слово</button>;
}

export default NextBtn;
