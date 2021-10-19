import './App.css';

function App() {
  return (
    <div>
    <h1>Pangram Cracker</h1>
      <div className = "instructions">
        <h4>Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <div id ="puzzle">
     <h2 id ="letter1">1</h2>
     <div id = "line2">
       <h2 id ="letter2">2</h2>
       <h2 id ="letter3">3</h2>
      </div>
     <h2 id ="letterC">C</h2>
     <div id = "line4">
      <h2 id ="letter5">5</h2>
      <h2 id ="letter6">6</h2>
     </div>
     <h2 id ="letter7">7</h2>
      </div> 
      
      <form id="submitter" >
        <input type="text" id="guess" name="guess" />
        <button id = "submitButton" type="submit">Submit</button>
        <button id = "newPuzzle" type="button">New Puzzle</button>
      </form>


    </div>
  );
}

export default App;
