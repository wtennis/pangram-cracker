import './App.css';
import './puzzles'

function App() {
  return (
    <div>
    <h1>Pangram Cracker</h1>
      <div className = "instructions">
        <h4>Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <div id = "answerBar">
        <h2>Answer Bar</h2> 
        <button className ="button">Delete</button>
        <button className ="button">Jumble</button>
        <button className ="button">Enter</button>
      </div>
      <div id ="puzzle">
     <h2 className = "puzzleLetter">1</h2>
     <div id = "line2">
       <h2 className = "puzzleLetter">2</h2>
       <h2 className = "puzzleLetter">3</h2>
      </div>
     <h2 className = "puzzleLetter" id = "letterC">C</h2>
     <div id = "line4">
      <h2 className = "puzzleLetter">5</h2>
      <h2 className = "puzzleLetter">6</h2>
     </div>
     <h2 className = "puzzleLetter">7</h2>
      </div> 

    </div>
  );
}

export default App;
