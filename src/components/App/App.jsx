import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import LearnedBtn from "../Buttons/LearnedBtn";
import RepeatBtn from "../Buttons/RepeatBtn";
import WordTable from "../WordTable/WordTable";
import dataArray from "../../testWords.json";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main className="main">
        <Card
          word={dataArray[0].english}
          pronunciation={dataArray[0].transcription}
          translation={dataArray[0].russian}
          tags={dataArray[0].tags}></Card>
        <div className="btn-container">
          <LearnedBtn></LearnedBtn>
          <RepeatBtn></RepeatBtn>
        </div>
        <WordTable></WordTable>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
