import './App.css';
import { useState, useEffect } from 'react'
import Banner from './Banner';
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations';


function App() {
  const puzzles = [
    {
        id: 1,
        name: 'vpredol',
        pangrams: ['developer', 'redevelop', 'redeveloped'],
        valids: ['plover', 'proved', 'reproved', 'reprove', 'drove', 'loved', 'lover', 'rover', 'roved', 'evolve', 'evolved', 'revolve', 'revolved', 'revolver', 'devolve', 'devolved', 'revel', 'revelled', 'level', 'levelled', 'leveller', 'relevel', 'relevelled', 'lever', 'levered', 'delve', 'delved', 'delver', 'develop', 'developed'],
    },
    {
        id: 2,
        name: 'crteani',
        pangrams: ['certain', 'creatine', 'ceratin', 'nectarine', 'centenarian', 'creatin', 'incarcerate', 'incinerate', 'interact', 'interactant', 'intricate', 'iterance', 'reincarnate'],
        valids: ['acacia', 'carte', 'trice','nicer', 'react', 'nacre', 'citer', 'recant', 'nectar', 'cretin', 'create', 'crate', 'crater', 'caterer', 'react', 'trance', 'recreate', 'trace', 'tract', 'cater', 'center', 'canter', 'crane', 'accent', 'accrete', 'acetate', 'acetic', 'ancient', 'arctic', 'antarctic','arcane', 'attic', 'attract', 'antic', 'attractance', 'attractant', 'attracter', 'cacti', 'cairn', 'cancan', 'cancer', 'canine', 'canner', 'cannier', 'cantata', 'canteen', 'carte', 'cataract', 'carate', 'careen', 'careener', 'career', 'carer', 'carnie', 'carrier', 'carte', 'carter', 'cattier', 'centric', 'cicatrice', 'circa', 'citric', 'citer', 'crier', 'cretin', 'critic', 'critter', 'eccentric', 'enact', 'erect', 'entice', 'enticer', 'entrance', 'erect', 'erecter', 'erratic', 'etcetera', 'icier', 'inanct', 'inciter', 'incite', 'intact', 'internecine', 'nacre', 'nance', 'nectar', 'nicer', 'niece', 'racer', 'racier', 'reenact', 'reerect', 'reincite', 'reticence', 'reticent', 'retrace', 'retracer', 'retract', 'tacit', 'tactic', 'tactician', 'tannic', 'tantric', 'tercet', 'terrace', 'tictac', 'tinct', 'titanic', 'trace', 'tracer', 'tract', 'trance'],
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
        valids: ["alane", "alanyl", "aleye", "allay", "allee", "allel", "allele", "alley", "allyl", "alula", "alulae", "anally", "ancle", "anelace", "anele", "anlace", "annal", "anneal", "annual", "annually", "annul", "caecal", "caecally", "calalu", "calcanea", "calcaneal", "calcanean", "calla", "callan", "callee", "calluna", "calyceal", "calycle", "calycule", "canal", "cancel", "canella", "cannel", "cannula", "cannulae", "canula", "canulae", "cecal", "cecally", "cella", "cellae", "cellule", "cenacle", "clayey", "clean", "cleanly", "cullay", "cully", "cuneal", "cycle", "ecuelle", "elance", "enlace", "lacey", "lacuna", "lacunae", "lacunal", "lacune", "lallan", "lance", "lanely", "lauan", "launce", "leally", "leanly", "leany", "leccy", "lucence", "lucency", "lunacy", "lunula", "lunulae", "lunule", "lycea", "lycee", "lyncean", "nacelle", "nalla", "neele", "nelly", "nucleal", "nucule", "nulla", "nuncle", "nyala", "ulnae", "uncle", "unclean", "unlace", "unlay", "unleal", "yulan" ],
    },
    {
        id: 5,
        name: 'tcroiea',
        pangrams: ['erotica'],
        valids: ['coater', 'aortic', 'coterie', 'erotic', 'recoat', 'carte', 'actor', 'citer', 'crate', 'ratio', 'trice', 'cater', 'react', 'trace', 'irate', 'orate', 'errata', 'create', 'recreate']

    },
    {
        id: 6,
        name: 'vuesiba',
        pangrams: ['abusive'],
        valids: ["abessive", "abessives", "assuasive", "avise", "avises", "beeves", "bevies", "bevue", "bevues", "bevvies", "bivia", "bivvies", "eaves", "essive", "essives", "evasive", "ivies", "saves", "savvies", "sieve", "sieves", "suasive", "suave", "uveas", "vases", "vibes", "visas", "vises", "visie", "visies", "visive", "vivas", "vives"]

    },
    {
      id: 7,
      name: 'dlgifry',
      pangrams: ['frigidly'],
      valids: ["diddly", "diddy", "dilli", "dilly", "drill", "drily", "dryly", "fiddly", "frigid", "giddily", "giddy", "idyll", "ridgil", "ridgy", "rigid", "rigidify", "rigidly"]
    },
    {
      id: 8,
      name: 'mctsyhi',
      pangrams: ["chymist", "chymists", "mythicism", "mythicisms", "mythicist", "mythicists", "tychism", "tychisms"],
      valids: ["chymic", "chymics", "immit", "immits", "imshi", "imshy", "isthmi", "isthmic", "micht", "michts", "mihis", "mimic", "mimics", "mimsy", "misch", "mishit", "mishits", "mishmi", "mishmis", "missis", "missish", "missy", "mists", "misty", "mitch", "mitis", "mitts", "mystic", "mysticism", "mysticisms", "mystics", "mythi", "mythic", "mythism", "mythisms", "mythist", "mythists", "myths", "mythy", "schism", "schisms", "shimmy", "shims", "shittim", "shittims", "simis", "smith", "smiths", "smithy", "smits", "stims", "stimy", "stymy", "thymi", "thymic", "thymy", "timist", "timists"]
    },
    {
      id: 9,
      name: 'dhulmot',
      pangrams: ["loudmouth"],
      valids: ["dholl", "dolldom", "dollhood", "doodoo", "dumdum", "duomo", "holdout", "hoodlum", "hoodmold", "hoodoo", "hudud", "modulo", "mould", "outdo", "outtold"]
    },
    {
      id: 10,
      name: 'aivteny',
      pangrams: ['naivety'],
      valids: ["ainee", "anana", "anata", "anatta", "anent", "annat", "annatta", "antae", "antenati", "antenna", "antennae", "antient", "antivenene", "antivenin", "ataata", "attain", "attaint", "attent", "attentat", "attentive", "avant", "avanti", "avian", "aviate", "aviette", "avine", "eaten", "enate", "entia", "entitative", "evitate", "inane", "inanity", "inattentive", "initiate", "initiative", "innate", "innative", "naeve", "naevi", "naiant", "naive", "naivete", "nanite", "nanna", "nannie", "nanny", "natant", "native", "nativity", "natty", "navette", "navvy", "neaten", "taata", "taenia", "taeniae", "taeniate", "taint", "tanna", "tannate", "tannie", "tannin", "tanti", "tantivy", "tatie", "tattie", "tatty", "tenant", "tenia", "teniae", "tennantite", "tentative", "tetany", "tinea", "titan", "titanate", "titania", "titanite", "titian", "titivate", "tittivate", "vanity", "veena", "venae", "venenate", "venetian", "ventana", "vienna", "vitae", "vitative", "vitiate", "vitta", "vittae", "vittate", "vivat", "vivianite", "yenta"]
    },
    {
      id: 11,
      name: 'crtevpo',
      pangrams: ['overprotect'],
      valids: ["cocco", "cocotte", "coerce", "coercer", "coerect", "coocoo", "cooee", "cooer", "cooper", "coopt", "cooter", "coper", "copper", "copter", "corer", "corocore", "corocoro", "correct", "correcter", "corrector", "corvee", "corvet", "corvette", "cotter", "cover", "coverer", "covert", "covet", "coveter", "creep", "creeper", "crepe", "crept", "crevette", "croove", "cropper", "crore", "ectoproct", "erect", "erecter", "erector", "octet", "octett", "octette", "overcorrect", "overcover", "overcrop", "peece", "perce", "percept", "percoct", "porrect", "precept", "preceptor", "preerect", "proctor", "proproctor", "prorector", "protect", "protecter", "protector", "recce", "recco", "recept", "receptor", "recover", "recoveree", "recoverer", "recoveror", "recto", "rector", "reerect", "rococo", "terce", "tercet", "vector"]
  },
  {
    id: 12,
    name: 'ulipgts',
    pangrams: ["pugilist", "pugilists"],
    valids: ["giust", "giusts", "glugs", "gluts", "guilt", "guilts", "guitguit", "guitguits", "gulls", "gulps", "gusli", "guslis", "gusts", "iglus", "illupi", "illupis", "lilliput", "lilliputs", "lituus", "lulls", "lulus", "lupus", "lusts", "lusus", "lutist", "lutists", "pilus", "pipul", "pipuls", "piupiu", "piupius", "plugs", "pugil", "pugils", "pulis", "pulli", "pulls", "pullup", "pullups", "pullus", "pulpit", "pulpits", "pulps", "pulus", "pupil", "pupils", "pupus", "putti", "putts", "situp", "situps", "situs", "slipup", "slipups", "slugs", "sluit", "sluits", "sluts", "spugs", "stull", "stulls", "suits", "sulus", "susus", "tittup", "tittups", "tituli", "titulus", "titup", "titups", "tulip", "tulips", "tussis", "tutti", "tuttis", "tutus", "ulitis", "uplit", "uptilt", "uptilts"]
  },
  {
    id: 13,
    name: 'niqerdu',
    pangrams: ["enquired", "inquered", "inquired", "unrequired"],
    valids: ["denied", "denier", "denned", "denude", "denuded", "denuder", "dernier", "diene", "dined", "diner", "dinned", "dinner", "dinnered", "dudeen", "duende", "dunder", "dunned", "dunner", "dunnier", "durned", "durneder", "ended", "ender", "endrin", "endue", "endued", "endure", "endured", "endurer", "ennui", "ennuied", "enqueue", "enqueued", "enquire", "enquirer", "enure", "enured", "enurn", "enurned", "equine", "erned", "indeed", "indene", "indie", "indri", "indue", "indued", "inned", "inner", "inquere", "inquire", "inquirer", "inrun", "inure", "inured", "inurn", "inurned", "neddier", "needed", "needer", "needier", "neinei", "nerdier", "nereid", "nerine", "neurine", "nided", "nuder", "nudie", "nundine", "nurdier", "queen", "queened", "queenie", "queenier", "quern", "quine", "quinidine", "quinie", "quinin", "quinine", "redden", "reddened", "redenied", "reeden", "reindeer", "reined", "rended", "render", "rendered", "renderer", "renied", "renin", "renne", "renned", "rennin", "requin", "rerun", "ridden", "rinded", "rindier", "ruined", "ruiner", "runed", "runner", "runnier", "undee", "undeeded", "undenied", "under", "underdid", "undern", "underrun", "undid", "undine", "undried", "undue", "unended", "uninured", "unique", "uniquer", "unneeded", "unqueen", "unqueened", "unred", "unrein", "unreined", "unrendered", "unrid", "unridden", "unrude", "uredine", "uridine", "urine", "urined", "urned"]
  },
  {
    id: 14,
    name: 'dyiwzra',
    pangrams: ['wizardry'],
    valids: ["adrad", "adward", "airward", "ardri", "award", "awayday", "daddy", "dairy", "darzi", "diary", "diddy", "dizzard", "dizzy", "dryad", "izard", "izzard", "radar", "radii", "raird", "rizard", "waddy", "wayward", "widdy", "wizard", "yaird", "ydrad"]
  },
  {
    id: 15,
    name: 'ftixano',
    pangrams: ["affixation", "fixation", "infixation"],
    valids: ["affiant", "affix", "afoot", "antifat", "faint", "fanion", "fanon", "finfoot", "finito", "finnan", "fitna", "fixatif", "fixit", "fontina", "infant", "infanta", "infinitant", "infix", "infixion", "niffnaff", "nonfan", "nonfat", "taffia", "tafia", "tiffin"]
  },
  {
    id: 16,
    name: 'miosrba',
    pangrams: ["ambrosia", "ambrosias", "isobarism", "isobarisms"],
    valids: ["aboma", "abomas", "abomasa", "abomasi", "abram", "abrim", "amass", "ambari", "ambaris", "ambos", "amias", "amirs", "amiss", "ammos", "amorism", "amorisms", "amorosa", "amorosas", "amoroso", "amorosos", "armor", "armors", "aroma", "aromas", "asrama", "asramas", "assam", "assams", "bambi", "bambis", "bamboo", "bamboos", "barbarism", "barbarisms", "barms", "barroom", "barrooms", "bimas", "bimbo", "bimbos", "biomass", "bismar", "bismars", "bisom", "bisoms", "bomas", "bombo", "bombora", "bomboras", "bombos", "bombs", "booms", "borms", "bosom", "bosoms", "bossism", "bossisms", "brims", "bromism", "bromisms", "bromo", "bromos", "broom", "brooms", "iambi", "iambs", "imams", "imari", "imaris", "imbar", "imbars", "imbosom", "imbosoms", "imboss", "maars", "maims", "mairs", "mamas", "mamba", "mambas", "mambo", "mambos", "mamma", "mammas", "maomao", "maomaos", "maormor", "maormors", "marabi", "marabis", "marari", "mararis", "maras", "maria", "marimba", "marimbas", "marmarosis", "marms", "maror", "marors", "marram", "marrams", "marri", "marris", "masas", "massa", "massas", "mbira", "mbiras", "miasm", "miasma", "miasmas", "miasms", "mimbar", "mimbars", "mimosa", "mimosas", "miombo", "miombos", "miosis", "miromiro", "miromiros", "miros", "mirror", "mirrors", "misaim", "misaims", "misbias", "misos", "missa", "missis", "mobbism", "mobbisms", "moira", "moirai", "momism", "momisms", "momma", "mommas", "moobs", "moors", "moras", "morass", "moria", "morias", "mormaor", "mormaors", "morra", "morras", "morris", "morro", "morros", "mosso", "obiism", "obiisms", "omasa", "osmosis", "ramis", "roams", "rooms", "saimiri", "saimiris", "saims", "samara", "samaras", "samas", "samba", "sambar", "sambars", "sambas", "sambo", "sambos", "samosa", "samosas", "samsara", "samsaras", "simar", "simars", "simas", "simba", "simbas", "simis", "simoom", "simooms", "smarm", "smarms", "smirr", "smirrs", "smirs", "smoor", "smoors", "somas", "sooms"]
  },
  {
    id: 17,
    name: 'atlzecy',
    pangrams: ['catalyze'],
    valids: ["aceta", "acetal", "acetate", "acetyl", "acetylate", "acylate", "alate", "aleye", "allay", "allee", "allel", "allele", "alley", "alleycat", "allyl", "alteza", "altezza", "ataata", "atalaya", "atlatl", "azalea", "caeca", "caecal", "caecally", "calceate", "calla", "callee", "callet", "calycate", "calyceal", "calycle", "catcall", "cattle", "cattleya", "catty", "ceaze", "cecal", "cecally", "cella", "cellae", "clayey", "cleat", "eclat", "elate", "eyalet", "lacet", "lacey", "lactate", "lacteal", "lacteally", "lately", "latte", "layette", "leally", "lealty", "leaze", "lezza", "lycea", "lytta", "lyttae", "taata", "tacet", "talcy", "talea", "taleae", "tallat", "tallet", "tally", "tattle", "tattletale", "tatty", "tazza", "tazze", "teaze", "teazel", "teazle", "tecta", "tectal", "telae", "telltale", "yacca"]
  },
  {
    id: 18,
    name: 'dyragve',
    pangrams: ['graveyard'],
    valids: ["adage", "added", "adder", "adrad", "adread", "adreaded", "adred", "aggada", "aggrade", "aggraded", "agreed", "aread", "aredd", "arede", "arrayed", "arreede", "averaged", "averred", "dadded", "daddy", "dagga", "dagged", "dagger", "daggered", "daggy", "dared", "darer", "darga", "darre", "darred", "deaded", "deader", "deadeye", "deare", "deared", "dearer", "deary", "deave", "deaved", "deeded", "deeder", "deedy", "deere", "deeryard", "deeve", "deeved", "degage", "degged", "degrade", "degraded", "degrader", "degree", "degreed", "deray", "derayed", "dered", "derry", "dragee", "dragged", "dragger", "draggy", "drave", "drayage", "drayed", "dread", "dreaded", "dreader", "drear", "dreare", "drearer", "dreary", "dredge", "dredged", "dredger", "dreed", "dreggy", "drere", "dryad", "dryer", "earded", "eared", "eaved", "edged", "edger", "egged", "erred", "evade", "evaded", "evader", "everyday", "gadded", "gadder", "gadge", "gaged", "gagged", "garaged", "garda", "garred", "gaydar", "geared", "grade", "graded", "grader", "graved", "grayed", "greaved", "greed", "greedy", "greyed", "gryde", "gryded", "gyred", "gyved", "radar", "radded", "radder", "radge", "radger", "ragde", "raged", "ragged", "raggeder", "raggedy", "rared", "ravaged", "raved", "rayed", "readd", "readded", "reader", "ready", "reared", "reaved", "redded", "redder", "reddy", "redear", "reded", "redeye", "redry", "redye", "redyed", "reede", "reeded", "reeder", "reedy", "reeved", "regard", "regarded", "regarder", "regeared", "regrade", "regraded", "regrede", "regreded", "reread", "revered", "revved", "vaded", "vagged", "vardy", "varved", "veered", "vegged", "verderer", "verged", "yardage", "yarded", "yarder", "ydrad", "ydred", "yeard", "yearded", "yerded"]
  },
  {
    id: 19,
    name: 'ithdmuy',
    pangrams: ['humidity'],
    valids: ["dhimmi", "dhuti", "diddy", "didymium", "dimity", "dittit", "ditty", "humid", "immit", "middy", "mythi", "thymi", "tiddy", "timid", "timidity", "titty", "tumid", "tumidity", "tutti"]
  },
  {
    id: 20,
    name: 'enlbyaj',
    pangrams: ['jellybean'],
    valids: ["abbey", "abele", "alane", "albee", "aleye", "allee", "allel", "allele", "alley", "anabaena", "anele", "anneal", "babble", "babel", "baleen", "balneal", "bannable", "bayle", "beanball", "beany", "beebee", "belay", "belee", "belle", "belly", "benne", "benny", "blebby", "blenny", "bylane", "enable", "eyeable", "eyeball", "jabble", "jebel", "jeely", "jelab", "jellaba", "jelly", "jenny", "label", "labelable", "labella", "lanely", "leally", "leanly", "leany", "leben", "nebel", "neele", "nelly", "nybble"]
  }
]
  const [submission, setSubmission] = useState('')
  const [score, setScore] = useState(0)
  const [puzzle, setPuzzle] = useState(puzzles[Math.floor(Math.random() * puzzles.length)])
  const [answerList, setAnswerList] = useState([])
  const [banner, setBanner] = useState(false)

  let maxScore = puzzle.pangrams.length*3 + puzzle.valids.length
  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}infinite`

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  return function cleanup() {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [submission]);

function handleKeyDown(e){
  switch (e.key) {
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

function checkAnswerList() {
  const found = answerList.find(answer => answer == submission)
  return !!found
}


async function handleEnter() {
 const found = await checkAnswerList();
  if (submission.length < 5){
    showBanner('too short')
    return
  } else if (!submission.includes(puzzle.name[0])){
    showBanner('must include center letter')
  }else if(found){
    showBanner('answer found');
    setSubmission('');
    return
  } else if (submission.length > 6){
    try {
      const isPan = await checkPangram();
      if (!isPan){
        const isVal = await checkValid()
        if (!isVal){invalidAlert()}
      }
      } catch(error) {
        console.log(error);
      }
  } else if (submission.length > 4){
    try {
      const isVal = await checkValid();
      if (!isVal){invalidAlert()};
      } catch(error) {
        console.log(error);
      }
  }
}

function invalidAlert(){
  setSubmission('')
  showBanner('invalid')
}

function checkPangram(){
  let isPangram = false
  puzzle.pangrams.map((pangram) => { 
    if (submission.toLowerCase() === pangram){
        isPangram = true
        answerList.push(pangram)
        setScore(score + 3);
        setSubmission('');
        showBanner('pangram!')
    }
  })
  return isPangram
}

function checkValid(){
  let isValid = false
  puzzle.valids.forEach((valid) => { 
    if (submission.toLowerCase() === valid){
        isValid = true
        answerList.push(valid)
        setScore(score + 1);
        setSubmission('');
        showBanner('valid')
    }
  })
  return isValid
}

function newPuzzle(){
setPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)]);
setScore(0);
setSubmission('')
setAnswerList([]);
}

function showBanner(banner){
  setBanner(banner)
  setTimeout(function(){
    setBanner(false)
}, 1500);
}

function Achievement(){
  let perc = score/maxScore*100;
  if(perc < 20){
    return ""
  }else if (perc < 30){
    return "Good"
  }else if (perc < 40){
    return "Solid"
  }else if (perc < 50){
    return "Amazing"
  } return "Genius"
}

  return (
    <div id = "container">
    {/* <Bounce><h1>Pangram Cracker</h1></Bounce> */}
    {banner? <Banner banner = {banner}/> : null}
      <div className = "instructions">
        <h4 id= "instructions-header">Instructions</h4>
          <p>Valid answers must be five letters or longer and use the center letter. Pangrams are worth 3 points. All other valid answers are worth 1 point.</p>
      </div>
      <h3 id = "score">Score: {score}/{maxScore}</h3>
      <div id = "achievement">
        <Achievement/>
        </div>
        <div style ={{height: '15px'}}>
      <p id = "answerList">{answerList.join(', ')}</p>
      </div>
      <div id = "answerBar">
        <h2 id = "submission">{submission}</h2> 
        <button onClick={handleDelete} className ="button" style={{cursor: "pointer"}}>Delete</button>
        <button onClick={newPuzzle} className="button" style={{cursor: "pointer"}}>New Puzzle</button>
        <button onClick={handleEnter} className="button" style={{cursor: "pointer"}}>Enter</button>
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
