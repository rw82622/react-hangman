import '../App.css';
import { useState, useRef } from 'react'
import InputForm from './inputForm';


const PuzzleInfo = ({ puzzle, guessedLetters, setGuessedLetters }) => {

    let wordEncrypted = puzzle.replace(/\w/g, "_").split('')

    const [puzzleEncrypted, setPuzzleEncrypted] = useState(wordEncrypted)
    const [remainingAttempts, setRA] = useState(6)
    const [feedback, setFeedback] = useState('')
    const userInput = useRef()

    const checkValue = (myLetter) => {
        let msg
        if (puzzleEncrypted.includes(myLetter) || guessedLetters.includes(myLetter)) {
            msg = `You have already guessed ${myLetter}. Try again!`
        }
        else if (puzzle.includes(myLetter)) {
            msg = `Yes! The letter ${myLetter} is in the word.`
        }
        else {
            setGuessedLetters([...guessedLetters, myLetter])
            msg = `Sorry! The letter ${myLetter} is not in the word.`
            setRA(remainingAttempts - 1)
        }
        return msg
    }

    const encryptPuzzle = (letter, event) => {
        event.preventDefault()
        setFeedback(checkValue(letter))
        let temp = [...puzzleEncrypted]
        for (let index in puzzle) {
            if (puzzle[index] === letter) {
                temp[index] = letter
            }
        }
        setPuzzleEncrypted(temp)
        userInput.current.value = ''
    }

    return (
        <div>
            {guessedLetters.length < 6 ?
                <div>
                    {puzzle === puzzleEncrypted.join("") ?
                        <div>
                            <h2> Congrats Player! You Won!</h2>
                            <button
                                className='btn btn-primary'
                                onClick={() => window.location.reload()} >Restart
                            </button>
                        </div>
                        :
                        <div>
                            <div className='encryptedWord'>
                                <h3>{puzzleEncrypted.map((c, index) => (
                                    <span key={index}>{c} </span>
                                ))}
                                </h3>
                                {guessedLetters.length > 0 &&
                                    <h3 className='wordHistory'>Wrong Guesses: {guessedLetters.map((l, index) => (
                                        <span key={index}>{l} </span>
                                    ))}
                                    </h3>
                                }
                            </div>
                            <div className="attemptsLeft">
                                <h4>You have <span className='red'>{remainingAttempts}</span> guess{remainingAttempts === 1 ? <span></span> : <span>es</span>} remaining.
                                </h4>
                            </div>
                            <hr />
                            <InputForm
                                puzzle={puzzle}
                                encryptPuzzle={encryptPuzzle}
                                userInput={userInput}
                                puzzleEncrypted={puzzleEncrypted}
                            />
                            <div className='feedback'>
                                <h4>{feedback}</h4>
                            </div>
                        </div>
                    }
                </div>
                :
                <div>
                    <h2>Game Over!</h2>
                    <h3>Correct Word: {puzzle}</h3>
                    <h3>Your Guess: {puzzleEncrypted.map((item, index) => <span key={index}>{item} </span>)}</h3>
                    <h3>Your Wrong Letters: {guessedLetters}</h3>
                    <button
                        className='btn btn-primary'
                        onClick={() => window.location.reload()} >Restart
                    </button>
                </div>
            }
        </div>
    )
}

export default PuzzleInfo