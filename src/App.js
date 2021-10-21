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
        valids: ['coater', 'aortic', 'coterie', 'erotic', 'recoat', 'carte', 'actor', 'citer', 'crate', 'ratio', 'trice', 'cater', 'react', 'trace', 'irate', 'orate', 'errata', 'create', 'recreate']

    }
]
  const [submission, setSubmission] = useState('')
  const [score, setScore] = useState('')
  const [answerList, setAnswerList] = useState([])
  const [puzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)])
  const [keyState, setKeyState] = useState('')
  const [pangram, setPangram] = useState(false)
  const [valid, setValid] = useState(false)


  console.log(puzzle)

function handleClick(letter){
  setSubmission(submission + letter)
}

function handleDelete(){
  setSubmission(submission.slice(0, -1))
}

function handleEnter(){
  console.log(submission);
  if (submission.length<5){
    alert('submission too short')
  }else if (submission.length>6) {
    checkPangram()
  }else if (submission.length>4 && !pangram) {
    checkValid()
  }else if (!pangram && !valid){alert('Not a valid word')}
  setSubmission('')
  setPangram(false);
  setValid(false);
}

function checkPangram(){
  puzzle.pangrams.forEach((pangram) => { 
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
        setValid(true)
        setScore(score + 1);
        setSubmission('');
        alert('valid!')
    }
  })
}

document.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e){
  switch (e.key) {
    case 'Enter':
      console.log('Enter pressed');
      handleEnter();
      break;
    case puzzle.name[0]:
    handleClick(puzzle.name[0])
      break;
    // case puzzle.name[1]:
    //   handleClick(puzzle.name[1])
    //     break;
    // case puzzle.name[2]:
    //   handleClick(puzzle.name[2])
    //     break;
    // case puzzle.name[3]:
    //   handleClick(puzzle.name[3])
    //     break;
    //     case puzzle.name[4]:
    //       handleClick(puzzle.name[4])
    //         break;
    //   case puzzle.name[5]:
    //     handleClick(puzzle.name[5])
    //       break;
    //     case puzzle.name[6]:
    //       handleClick(puzzle.name[6])
    //         break;
        case "Delete":
          handleDelete();
            break;
    default:
      console.log(`What key did you press?`);
  }
  console.log(e.key, 'pressed')
}

  return (
    <div id = "container">
    <h1>Pangram Cracker</h1>
    <h1>{keyState}</h1>
      <div className = "instructions">
        <h4 id= "instructions-header">Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <h3 id = "score">Score: {score}</h3>
      <div id = "answerBar">
        <h2 id = "submission">{submission}</h2> 
        <button onClick={handleDelete} className ="button" style={{cursor: "pointer"}}>Delete</button>
        <button className="button" style={{cursor: "pointer"}}>Jumble</button>
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
