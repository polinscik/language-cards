import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root/Root";
import WordTable from "./components/WordTable/WordTable";
import CardWrapper from "./components/CardWrapper/CardWrapper";
import dataArray from "./testWords.json";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<WordTable></WordTable>}></Route>
      <Route
        path="/game"
        element={<CardWrapper dataArray={dataArray}></CardWrapper>}></Route>
      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
