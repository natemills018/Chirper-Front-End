import React, { useState, useEffect } from 'react';
import submitComponent from './components/submit';
import './styles.css';

const App = () => {

    const [chirp, setChirp] = useState('')
    const [chirps, setChirps] = useState([])
    const [userName, setUsername] = useState('');
    const [userNameSubmitted, setuserNameSubmitted] = useState([])
    const [loaded, setloaded] = useState(false);
    const handlechirpSubmit = (e) => {

        setChirp(e.target.value);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }



    const handleButtonClick = (e) => {

        e.preventDefault();

        const updateChirps = [{ chirp: chirp, userName: userName }, ...chirps];
        setChirps(updateChirps);

        setChirp('');
        setUsername('');

    }




    return (
        <div className='container justify-content-center text-center'>
            <div className='container mt-5 mb-5 rounded'>

                <form className='form-group container row col-6 mx-auto border p-3 rounded'>
                    <input
                        className='userNameEdit mb-1'
                        placeholder='Username'
                        value={userName}
                        onChange={handleUsername}
                    />
                    <input
                        className='form-control'
                        placeholder='Sounds Like a bit of Ostrich'
                        value={chirp}

                        onChange={handlechirpSubmit}
                    // onChange={handlechirpSubmit}

                    />

                    <button className='btn btn-primary mt-3' onClick={handleButtonClick}>Chirp...</button>
                </form>



            </div>

            <h1>Here's the Chirp you've submitted</h1>

            <div className='chirpContainer'>
                <div className='card chirpHolder'>
                    <div className='card-body'>


                        {chirps.map((chirpObject) => (
                            <div className="userNameStyles" key={`div-${chirpObject.userName}`}>
                                <div className="card-title">
                                    <h1>@{chirpObject.userName}</h1>
                                </div>
                                <em>{chirpObject.chirp}</em>
                            </div>
                        ))}

                    </div>
                </div>
            </div>


        </div>
    )
}

export default App;