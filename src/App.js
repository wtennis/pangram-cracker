import './App.css';
import { useState } from 'react'

function App() {
  const puzzles = [
    {
        id: 1,
        name: 'vpredol',
        pangrams: ['developer', 'redevelop'],
        valids: ['plover', 'proved', 'reproved', 'reprove', 'drove', 'loved', 'lover', 'rover', 'roved', 'evolve', 'evolved', 'revolve', 'revolved', 'revolver', 'devolve', 'devolved', 'revel', 'revelled', 'level', 'levelled', 'leveller', 'relevel', 'relevelled', 'lever', 'levered', 'delve', 'delved', 'delver', 'develop'],
    },
    {
        id: 2,
        name: 'crteani',
        pangrams: ['certain', 'creatine', 'ceratin', 'nectarine'],
        valids: ['carte', 'trice','nicer', 'react', 'nacre', 'citer', 'recant', 'nectar', 'cretin', 'create', 'crate', 'crater', 'caterer', 'react', 'trance', 'recreate', 'trace', 'tract', 'cater', 'center', 'canter', 'crane'],
    },
    {
        id: 3,
        name: 'pigcent',
        pangrams: ['epigenetic'],
        valids: ['inept','pectin','pegging', 'piece', 'pipette'],
    },
    {
        id: 4,
        name: 'lanceuy',
        pangrams: ['uncleanly'],
        valids: ['unlay', 'lacey', 'uncle','unlace', 'lunacy', 'lance', 'clean', 'cleanly' ],
    },
    {
        id: 5,
        name: 'tcroiea',
        pangrams: ['erotica'],
        valids: ['coater', 'aortic', 'erotic', 'recoat', 'carte', 'actor', 'citer', 'crate', 'ratio', 'trice', 'cater', 'react', 'trace', 'irate', 'orate', 'errata', 'create', 'recreate']

    }
]
  const [submission, setSubmission] = useState('')
  const [score, setScore] = useState('')
  const [answerList, setAnswerList] = useState([])
  const [puzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)])

  console.log(puzzle)

function handleClick(e){
  setSubmission(submission + e.target.textContent)
}

function handleDelete(){
  setSubmission(submission.slice(0, -1))
}

function handleEnter(){
  console.log(submission);
  let pangram = false
  let valid = false
  if (submission.length>6) {pangram = checkPangram()}
  if (pangram){return}
  valid = checkValid()
  console.log(valid)
  if (valid){return}
  alert('Not a valid word')
  setSubmission('')
}

function checkPangram(){
  puzzle.pangrams.forEach((pangram) => { 
    if (submission.toLowerCase() === pangram){
        setScore(score + 3);
        setSubmission('');
        alert('pangram!')
        return true;
    }
  })
  return false
}

function checkValid(){
  puzzle.valids.forEach((valid) => { 
    if (submission.toLowerCase() === valid){
        setScore(score + 1);
        setSubmission('');
        alert('valid!')
        return true;
    }
  })
}

  return (
    <div id = "container">
    <h1>Pangram Cracker</h1>
      <div className = "instructions">
        <h4>Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <div id = "answerBar">
        <h2 id = "submission">{submission}</h2> 
        <button onClick={handleDelete} className ="button">Delete</button>
        <button className="button">Jumble</button>
        <button className="button" onClick={handleEnter}>Enter</button>
      </div>
      <div id ="puzzle">
     <h2 
     className="puzzleLetter" 
     onClick={(e) => handleClick(e)}
     >{puzzle.name[1]}
     </h2>
     <div id = "line2">
       <h2 className = "puzzleLetter" onClick={(e) => handleClick(e)}>{puzzle.name[2]}</h2>
       <h2 className = "puzzleLetter" onClick={(e) => handleClick(e)}>{puzzle.name[3]}</h2>
      </div>
     <h2 className="puzzleLetter" id="letterC" onClick={(e) => handleClick(e)}>{puzzle.name[0]}</h2>
     <div id = "line4">
      <h2 className="puzzleLetter" onClick={(e) => handleClick(e)}>{puzzle.name[4]}</h2>
      <h2 className = "puzzleLetter" onClick={(e) => handleClick(e)}>{puzzle.name[5]}</h2>
     </div>
     <h2 className = "puzzleLetter" onClick={(e) => handleClick(e)}>{puzzle.name[6]}</h2>
      </div> 
      <h3 id = "score">Score: {score}</h3>
    </div>
  );
}

export default App;
