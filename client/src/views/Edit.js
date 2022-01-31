import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [chests, setChests] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [peg, setPeg] = useState();
    const [patch, setPatch] = useState();
    const [hook, setHook] = useState();
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => {
                console.log(res)
                setName(res.data.name)
                setUrl(res.data.url)
                setChests(res.data.chests)
                setPhrase(res.data.phrase)
                setPosition(res.data.position)
                setPeg(res.data.peg)
                setPatch(res.data.patch)
                setHook(res.data.hook)
            })
            .catch(err => console.log(err))
    }, []);

    const history = useHistory();



    // const changeHandler = (e) => {
    //     console.log("changed in form detected!!")
    //     ({
    //         [e.target.name]: e.target.value
    //     })
    // }

//     const editPirate = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:8000/api/pirate/edit/${id}`, { name, url, chests, phrase, position, peg, patch, hook })
//             .then(res => {
//                 console.log(res)
//                 history.push("/")
//             })
//             .catch(err => {
//         const errorResponse = err.response.data.errors;
//         const errorArr = [];
//         for (const key of Object.keys(errorResponse)) {
//             errorArr.push(errorResponse[key].message)
//         }
//         setErrors(errorArr);
//     })
// }


    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h4>About:</h4>
                <img className="w-25 h-25" src={url}></img>
                <p>Position: {position}</p>
                <p>Treasures: {chests}</p>
                <p>Peg Leg: {peg?"Yes": "No"}</p>
                <p>Eye Patch: {patch?"Yes": "No"}</p>
                <p>Hook Hand: {hook?"Yes": "No"}</p>
                {/* <label for="">Peg Leg:</label>
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
                /> */}
                <button type="button" className="btn btn-primary m-3" onClick={(e) => { history.push("/") }}>Cancel</button>
                {/* <input type="submit" className="btn btn-primary" /> */}
            </div>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
        </div>
    )
}

export default Edit;