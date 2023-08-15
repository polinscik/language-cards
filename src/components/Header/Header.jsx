import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h2 className="title">Учи иностранные языки по карточкам</h2>
      <ul className="nav">
        <li className="nav-item">Главная</li>
        <li className="nav-item">Создать карточку</li>
        <li className="nav-item">Создать коллекцию</li>
      </ul>
    </header>
  );
}

export default Header;
