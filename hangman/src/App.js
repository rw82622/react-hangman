import './App.css';
import {useState} from 'react'
import wordBank from './data/words.json'
import PuzzleInfo from './components/puzzleInfo'

let word = wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase()

function App() {
  const [puzzle] = useState(word)
  const [guessedLetters, setGuessedLetters] = useState([])

  return (
    <div className="App">
      <h1>HANGMAN!</h1>
      <hr />
      <PuzzleInfo 
        puzzle={puzzle} 
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
      />
    </div>
  );
}

export default App;
