import React, {useEffect} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.scss";
import {Outlet} from "react-router-dom";
import Menu from "../Menu/Menu";
import {observer, inject} from "mobx-react";

const App = inject(["wordStore"])(
  observer(({wordStore}) => {
    useEffect(() => {
      wordStore.getData();
    }, []);

    if (wordStore.isGetLoading) {
      return <p>Loading...</p>;
    }

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
  })
);

export default App;
