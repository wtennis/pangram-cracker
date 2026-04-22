import './App.css';
import { useState, useEffect, useCallback, useRef } from 'react'
import Banner from './Banner';


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
  const [puzzle, setPuzzle] = useState(() => puzzles[Math.floor(Math.random() * puzzles.length)])
  const [answerList, setAnswerList] = useState([])
  const [banner, setBanner] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)

  const maxScore = puzzle.pangrams.length * 3 + puzzle.valids.length

  // Use refs for values needed in the keydown handler to avoid stale closures
  const submissionRef = useRef(submission)
  const scoreRef = useRef(score)
  const answerListRef = useRef(answerList)
  const puzzleRef = useRef(puzzle)

  useEffect(() => { submissionRef.current = submission }, [submission])
  useEffect(() => { scoreRef.current = score }, [score])
  useEffect(() => { answerListRef.current = answerList }, [answerList])
  useEffect(() => { puzzleRef.current = puzzle }, [puzzle])

  const showBanner = useCallback((msg) => {
    setBanner(msg)
    setTimeout(() => setBanner(false), 1500)
  }, [])

  const handleClick = useCallback((letter) => {
    setSubmission(prev => prev + letter)
  }, [])

  const handleDelete = useCallback(() => {
    setSubmission(prev => prev.slice(0, -1))
  }, [])

  const handleEnter = useCallback(() => {
    const sub = submissionRef.current
    const currentAnswerList = answerListRef.current
    const currentPuzzle = puzzleRef.current

    if (sub.length < 5) {
      showBanner('too short')
      return
    }

    if (!sub.includes(currentPuzzle.name[0])) {
      showBanner('must include center letter')
      return
    }

    const alreadyFound = currentAnswerList.includes(sub.toLowerCase())
    if (alreadyFound) {
      showBanner('already found')
      setSubmission('')
      return
    }

    // Check pangrams (only possible for 7+ letter words)
    if (sub.length >= 7) {
      const pangram = currentPuzzle.pangrams.find(p => sub.toLowerCase() === p)
      if (pangram) {
        setAnswerList(prev => [...prev, pangram])
        setScore(s => s + 3)
        setSubmission('')
        showBanner('pangram!')
        return
      }
    }

    // Check valid words (5+ letters)
    const valid = currentPuzzle.valids.find(v => sub.toLowerCase() === v)
    if (valid) {
      setAnswerList(prev => [...prev, valid])
      setScore(s => s + 1)
      setSubmission('')
      showBanner('valid')
      return
    }

    setSubmission('')
    showBanner('invalid')
  }, [showBanner])

  useEffect(() => {
    function handleKeyDown(e) {
      const currentPuzzle = puzzleRef.current
      const validLetters = currentPuzzle.name.split('')

      if (e.key === 'Enter') {
        handleEnter()
      } else if (e.key === 'Backspace') {
        handleDelete()
      } else if (validLetters.includes(e.key)) {
        handleClick(e.key)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleEnter, handleDelete, handleClick])

  function newPuzzle() {
    setPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)])
    setScore(0)
    setSubmission('')
    setAnswerList([])
    setShowSolutions(false)
  }

  function Achievement() {
    const perc = score / maxScore * 100
    if (score < 1) {
      return null
    } else if (perc < 30) {
      return <h3 style={{color: "yellow"}}>Good</h3>
    } else if (perc < 40) {
      return <h3 style={{color: "orange"}}>Solid</h3>
    } else if (perc < 50) {
      return <h3 style={{color: "green"}}>Amazing</h3>
    }
    return <h3 style={{color: "blue"}}>Genius</h3>
  }

  const Cell = ({ letter, center }) => (
    <div className={`hex-cell${center ? ' center' : ''}`} onClick={() => handleClick(letter)}>
      <span>{letter}</span>
    </div>
  )

  return (
    <div id="container">
      {banner ? <Banner banner={banner} /> : null}

      <div id="top-section">
        <div id="scoreDisplay">
          <span id="scoreNumber">{score}</span> / {maxScore}
          <Achievement />
        </div>
        <div id="answerListContainer">
          <p id="answerList">{answerList.join(', ')}</p>
        </div>
      </div>

      <div id="input-area">
        <div id="submission">{submission || <span className="placeholder">Type or click</span>}</div>
      </div>

      <div id="hive">
        <div className="hive-row">
          <Cell letter={puzzle.name[1]} />
          <Cell letter={puzzle.name[2]} />
        </div>
        <div className="hive-row">
          <Cell letter={puzzle.name[3]} />
          <Cell letter={puzzle.name[0]} center />
          <Cell letter={puzzle.name[4]} />
        </div>
        <div className="hive-row">
          <Cell letter={puzzle.name[5]} />
          <Cell letter={puzzle.name[6]} />
        </div>
      </div>

      <div id="controls">
        <button onClick={handleDelete} className="control-btn">Delete</button>
        <button onClick={handleEnter} className="control-btn enter-btn">Enter</button>
        <button onClick={newPuzzle} className="control-btn">New Puzzle</button>
      </div>

      <div id="extras">
        <button onClick={() => setShowSolutions(prev => !prev)} className="control-btn">
          {showSolutions ? 'Hide Solutions' : 'Show Solutions'}
        </button>
      </div>

      {showSolutions && (
        <div id="solutionsContainer">
          <p><strong>Pangrams:</strong> {puzzle.pangrams.join(', ')}</p>
          <p><strong>Remaining:</strong> {puzzle.valids.filter(v => !answerList.includes(v)).join(', ')}</p>
        </div>
      )}

      <div id="instructions">
        <p>Create words using letters from the hive. Words must be 5+ letters and include the center letter. Pangrams use all 7 letters and score 3 pts.</p>
      </div>
    </div>
  );
}

export default App;
