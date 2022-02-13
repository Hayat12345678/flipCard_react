import "./App.css";
import FlipCard from "./components/Flip-Card";

function App() {
  return (
   <div>
     <h1>Kinder die Freude am Leben</h1>
    <div className="App">
      <FlipCard
        name="Lili"
        title="Die Freuden des lebens"
        claim=" Mit Lili hat das Leben einen achöneren Sinn"
        imgPath="lili.jpeg"
      />
    </div>
    <div className="App">
      <FlipCard
        name="Carlo"
        title="Der Freuden des lebens"
        claim=" Mit Lili hat das Leben einen achöneren Sinn"
        imgPath="Carlo.jpg"
      />
    </div>
    </div>
  );
}

export default App;
