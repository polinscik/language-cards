import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import LearnedBtn from "./components/LearnedBtn";
import RepeatBtn from "./components/RepeatBtn";
import WordTable from "./components/WordTable";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <RepeatBtn></RepeatBtn>
      <LearnedBtn></LearnedBtn>

      <WordTable></WordTable>
      <Footer></Footer>
    </div>
  );
}

export default App;
