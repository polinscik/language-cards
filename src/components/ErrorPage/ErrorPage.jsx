import React from "react";
import "./ErrorPage.scss";
import {useRouteError} from "react-router-dom";
import {Link} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <section className="error-page">
      <h1 className="error-page__title">Error!</h1>
      <div className="error-page__info">
        <p>Произошла ошибка</p>
        {error !== undefined && <i>{error.statusText || error.message}</i>}
      </div>

      <Link to={"/"} className="error-page__link">
        Вернуться на главную страницу
      </Link>
      <img
        className="error-page__img"
        src="src/images/not-found.png"
        alt="page not found"
      />
    </section>
  );
}
