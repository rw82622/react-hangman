import './App.css';
import {useState} from 'react'
import wordBank from './data/words.json'
import PuzzleInfo from './components/puzzleInfo'

let word = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase()
// let wordEncrypted = word.replace(/\w/g, "_")
// wordEncrypted = wordEncrypted.split('')

function App() {
  const [puzzle] = useState(word)
  const [guessedLetters, setGuessedLetters] = useState([])
  // const [puzzleEncrypted, setPuzzleEncrypted] = useState(wordEncrypted)
  // const userInput = useRef()
  // const [feedback, setFeedback] = useState('')
  // const [remainingAttempts, setRA] = useState(6)

  // const checkValue = (myLetter) => {
  //   let msg
  //   if (puzzleEncrypted.includes(myLetter) || guessedLetters.includes(myLetter)){
  //     msg = `You have already guessed ${myLetter}. Try again!`
  //   }
  //   else if (puzzle.includes(myLetter)){
  //     msg = `Yes! The letter ${myLetter} is in the word.`
  //   }
  //   else {
  //   setGuessedLetters([...guessedLetters, myLetter])
  //   msg = `Sorry! The letter ${myLetter} is not in the word.`
  //   setRA(remainingAttempts-1)
  // }
  //   return msg
  // }

  // const encryptPuzzle = (letter, event) => {
  //   event.preventDefault()
  //   setFeedback(checkValue(letter)) 
  //   let temp = [...puzzleEncrypted]
  //   for (let index  in puzzle){
  //     if (puzzle[index] === letter){
  //       temp[index] = letter
  //     }
  //   }
  //   setPuzzleEncrypted(temp)
  //   userInput.current.value = ''
  // }

  return (
    <div className="App">
      <h1>HANGMAN!</h1>
      <hr />
      <PuzzleInfo 
        puzzle={puzzle} 
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        />
      {/* <div>
        <h3>{puzzle}</h3>
        <h3>{puzzleEncrypted.map((c, index) => (
            <span key={index}>{c} </span>
          ))}
        </h3>
        <h3>Wrong Guesses: {guessedLetters.map((l, index) => (
          <span key={index}>{l} </span>
        ))}</h3>
      </div>
      <div>
        <h4>You have {remainingAttempts} guesses remaining.</h4>
      </div>
      <hr />
      <div>
        <form onSubmit={(event) => encryptPuzzle(
          userInput.current.value.toUpperCase(), 
          event )} >
          <input
            type='text'
            ref={userInput}
            pattern="[a-zA-Z]{1}"
            required />
            <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
      <div>
        <h4>{feedback}</h4>
      </div> */}

    </div>
  );
}

export default App;
