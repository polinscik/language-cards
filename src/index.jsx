import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./components/App/App";
import WordTable from "./components/WordTable/WordTable";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import dataArray from "./testWords.json";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ObservableWordStore from "./stores/WordStore";
import {Provider} from "mobx-react";

const stores = {wordStore: new ObservableWordStore()};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App></App>} errorElement={<ErrorPage />}>
      <Route path="/" element={<WordTable></WordTable>}></Route>
      <Route
        path="/game"
        element={<CardWrapper dataArray={dataArray}></CardWrapper>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider {...stores}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
