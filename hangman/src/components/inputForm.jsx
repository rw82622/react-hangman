import '../App.css';

const InputForm = ({ puzzle, encryptPuzzle, userInput }) => {

    return (
        <div>
            <form onSubmit={(event) => encryptPuzzle(
                userInput.current.value.toUpperCase(),
                event)} >
                <input
                    type='text'
                    ref={userInput}
                    pattern="[a-zA-Z]{1}"
                    required />
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default InputForm