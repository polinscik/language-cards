import "./Footer.scss";
function Footer() {
  const date = new Date();
  return (
    <footer className="footer">
      <p className="footer_credits">Made by *me*, {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
