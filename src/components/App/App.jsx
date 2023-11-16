import React, {useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.scss";
import {Outlet} from "react-router-dom";
import Menu from "../Menu/Menu";
import {DataContext} from "../DataContext/DataContext";

export default function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://itgirlschool.justmakeit.ru/api/words", {method: "GET"})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <DataContext.Provider value={{data, setData}}>
      <div className="App">
        <Header>
          <Menu></Menu>
        </Header>
        <main className="main">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </DataContext.Provider>
  );
}
