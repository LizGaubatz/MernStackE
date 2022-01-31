import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Delete from '../components/Delete';

export default (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    });

    const reload = () => {
        history.push('/')
    }


    return (
        pirate ?
            <div className="container">
                <table className="table table-bordered table-hover">
                    <thead bs-ta>
                        <tr>
                            <th>Pirate</th>
                        </tr>
                        <tr>
                            <th>Actions Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pirate.name}</td>
                        </tr>
                        <tr>
                            <Link to={"/pirate/" + pirate._id + "/edit"} className="btn btn-primary">Edit</Link>
                            <Delete reload = {reload} id = {id}/>
                        </tr>
                    </tbody>
                </table>
            </div>
            : <p></p>
    )
}