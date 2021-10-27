import './App.css';
import { useState, useEffect } from 'react'

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
        valids: ['unlay', 'unclean', 'lacey', 'uncle','unlace', 'lunacy', 'lance', 'clean', 'cleanly' ],
    },
    {
        id: 5,
        name: 'tcroiea',
        pangrams: ['erotica'],
        valids: ['coater', 'aortic', 'coterie', 'erotic', 'recoat', 'carte', 'actor', 'citer', 'crate', 'ratio', 'trice', 'cater', 'react', 'trace', 'irate', 'orate', 'errata', 'create', 'recreate']

    }
]
  const [submission, setSubmission] = useState('')
  const [score, setScore] = useState(0)
  const [answerList, setAnswerList] = useState([])
  const [puzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)])
  const [pangram, setPangram] = useState(false)
  const [valid, setValid] = useState(false)


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  return function cleanup() {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [submission]);

function handleKeyDown(e){
  switch (e.key) {
    case '4':
      console.log(submission);
      break;
    case 'Enter':
      handleEnter();
      break;
    case puzzle.name[0]:
    handleClick(puzzle.name[0])
      break;
    case puzzle.name[1]:
      handleClick(puzzle.name[1])
        break;
    case puzzle.name[2]:
      handleClick(puzzle.name[2])
        break;
    case puzzle.name[3]:
      handleClick(puzzle.name[3])
        break;
    case puzzle.name[4]:
      handleClick(puzzle.name[4])
        break;
    case puzzle.name[5]:
      handleClick(puzzle.name[5])
        break;
    case puzzle.name[6]:
      handleClick(puzzle.name[6])
        break;
    case "Backspace":
      handleDelete();
        break;
  }
}

function handleClick(letter){
  setSubmission(submission + letter)
}

function handleDelete(){
  setSubmission(submission.slice(0, -1))
}

async function handleEnter() {
  try {
    const pan = await checkPangram();
    const val = await checkValid(pan);
    const inval = await invalidAlert(val);
  } catch(error) {
    console.log(error);
  }
}

function invalidAlert(){
  setSubmission('')
}


function checkPangram(){
  puzzle.pangrams.map((pangram) => { 
    if (submission.toLowerCase() === pangram){
        setPangram(true)
        setScore(score + 3);
        setSubmission('');
        alert('pangram!')
    }
  })
}

function checkValid(){
  puzzle.valids.forEach((valid) => { 
    if (submission.toLowerCase() === valid){
        setScore(score + 1);
        setSubmission('');
        alert('valid!')
    }
  })
  return valid
}

function jumble(){
console.log(submission)
}

  return (
    <div id = "container">
    <h1>Pangram Cracker</h1>
      <div className = "instructions">
        <h4 id= "instructions-header">Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <h3 id = "score">Score: {score}</h3>
      <div id = "answerBar">
        <h2 id = "submission">{submission}</h2> 
        <button onClick={handleDelete} className ="button" style={{cursor: "pointer"}}>Delete</button>
        <button onClick={jumble}className="button" style={{cursor: "pointer"}}>submission</button>
        <button className="button" onClick={handleEnter} style={{cursor: "pointer"}}>Enter</button>
      </div>
      <div id ="puzzle">
     <h2 
     style={{cursor: "pointer"}}
     className="puzzleLetter" 
     onClick={(e) => handleClick(e.target.textContent)}
     >{puzzle.name[1]}
     </h2>
     <div id = "line2">
       <h2 style={{cursor: "pointer"}}className = "puzzleLetter" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[2]}</h2>
       <h2 style={{cursor: "pointer"}}className = "puzzleLetter" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[3]}</h2>
      </div>
     <h2 style={{cursor: "pointer"}}className="puzzleLetter" id="letterC" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[0]}</h2>
     <div id = "line4">
      <h2 style={{cursor: "pointer"}}className="puzzleLetter" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[4]}</h2>
      <h2 style={{cursor: "pointer"}}className = "puzzleLetter" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[5]}</h2>
     </div>
     <h2 style={{cursor: "pointer"}}className = "puzzleLetter" onClick={(e) => handleClick(e.target.textContent)}>{puzzle.name[6]}</h2>
      </div> 
    </div>
  );
}

export default App;
