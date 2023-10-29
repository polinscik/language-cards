import React, {Fragment} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.scss";
import {Outlet} from "react-router-dom";
import Menu from "../Menu/Menu";

export default function Root() {
  return (
    <div className="App">
      <Header>
        <Menu></Menu>
      </Header>
      <main className="main">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
