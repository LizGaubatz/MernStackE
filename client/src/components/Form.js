import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default (props) => {
    // const { refresh } = props;
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [chests, setChests] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [peg, setPeg] = useState(true);
    const [patch, setPatch] = useState(true);
    const [hook, setHook] = useState(true);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate/new", { name, url, chests, phrase, position, peg, patch, hook })
            .then(res=> {
                console.log('sucess')
                history.push("/")
                // refresh();
            })
            .catch(err=> {
                // console.log(err.response.data.errors)
                const errResponse = err.response.data.errors; 
                const errorArr = []
                for (const key of Object.keys(errResponse)){
                    errorArr.push(errResponse[key].message)
                }
                setErrors(errorArr);
            })
    }


    return (

        <div className="container">

            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label for="">Pirate Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="form-control"
                        onChange={e => setName(e.target.value)}
                    />
                    <label for="">Image Url:</label>
                    <input
                        type="url"
                        name="url"
                        value={url}
                        className="form-control"
                        onChange={e => setUrl(e.target.value)}
                    />
                    <label for="">Number of Treasure Chests: </label>
                    <input
                        type="number"
                        name="chests"
                        value={chests}
                        className="form-number"
                        onChange={e => setChests(e.target.value)}
                    />
                    <label for="">Catch Phrase: </label>
                    <input
                        type="text"
                        name="phrase"
                        value={phrase}
                        className="form-control"
                        onChange={e => setPhrase(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="">Crew Position:</label>
                    <select onChange={e => setPosition(e.target.value)} name="position" value={position} className="form-select">
                        <option value="captain">Captain</option>
                        <option value="firstMate">First Mate</option>
                        <option value="quarterMaster">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powderMonkey">Powder Monkey</option>
                    </select>
                    <label for="">Peg Leg:</label>
                    <input
                        type="checkbox"
                        name="peg"
                        className="form-check"
                        checked={peg}
                        onChange={e => setPeg(!peg)}
                    />
                    <label for="">Eye Patch:</label>
                    <input
                        type="checkbox"
                        name="patch"
                        className="form-check"
                        checked={patch}
                        onChange={e => setPatch(!patch)}
                    />
                    <label for="">Hook Hand:</label>
                    <input
                        type="checkbox"
                        name="hook"
                        className="form-check"
                        checked={hook}
                        onChange={e => setHook(!hook)}
                    />
                    <button type="submit" className="btn btn-primary">Add Pirate</button>
                </div>
            </form>
            {errors.map((err, index) => <p key={index}>{err}</p>)}

        </div>

    );
}