import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import WordTable from "../WordTable/WordTable";
import dataArray from "../../testWords.json";
import CardWrapper from "../CardWrapper/CardWrapper";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <CardWrapper dataArray={dataArray}></CardWrapper>
        <WordTable></WordTable>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
