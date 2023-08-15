import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import LearnedBtn from "./components/LearnedBtn";
import RepeatBtn from "./components/RepeatBtn";
import WordTable from "./components/WordTable/WordTable";
import dataArray from "./testWords.json";

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
        <RepeatBtn></RepeatBtn>
        <LearnedBtn></LearnedBtn>
        <WordTable></WordTable>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
