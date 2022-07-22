import '../App.css';

const InputForm = ({ puzzle, encryptPuzzle, userInput }) => {

    return (
        <div className='inputForm'>
            <form onSubmit={(event) => encryptPuzzle(
                userInput.current.value.toUpperCase(),
                event)} >
                <p>Type one letter.</p>
                <input
                    type='text'
                    ref={userInput}
                    pattern="[a-zA-Z]{1}"
                    id='char'
                    required />
                <div>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm