import React, { useState, useEffect } from 'react';

const App = () => {

    const [chirp, setChirp] = useState('')
    const [chirpSubmitted, setchirpSubmitted] = useState('')
    const handlechirpSubmit = (e) => {

        setChirp(e.target.value);
    }

    const sendChirp = e => {

        e.preventDefault();

        setchirpSubmitted({ chirp })

        setChirp('');

    }

    return (
        <div>
            <form className='form-group container row col-6 mx-auto border p-3'>
                <input
                    className='form-control'
                    placeholder='Sounds Like a bit of Ostrich'
                    value={chirp}
                    onChange={handlechirpSubmit}
                // onChange={handlechirpSubmit}

                />
                <button className='btn btn-primary mt-3' onClick={sendChirp}>Chirp...</button>
            </form>


            <div className='text-center'>
                <h1>{chirpSubmitted}</h1>
            </div>

        </div>
    )
}

export default App;