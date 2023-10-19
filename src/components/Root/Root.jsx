import React, {Fragment} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Root.scss";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
