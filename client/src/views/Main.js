import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';
// import List from '../components/List';
// import { mapReduce } from '../../../server/models/pirate.model';


const Main = (props) => {
    const [pirates, setPirates] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate')
            .then(res => {
                setPirates(res.data);
                // setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);


    const reload = () => {
        // history.push('/')
        setLoaded(!loaded)
    }

    return (
        <div className="container">
            <div className='d-flex justify-content-even m-3 align-middle'>
                <h1 className='align-text-middle p-2 flex-grow-1'>Pirate Crew</h1>
                <Link to='/pirate/new' className="btn btn-primary text-center align-middle">Add a pirate</Link>
            </div>
            {pirates ?
                pirates.map((pirate, i) => {
                    return (
                        <div key={i}>
                            <img className="w-25 h-25 m-3" src={pirate.url}></img>
                            <h3>{pirate.name}</h3>
                            <div>
                                <Link to={`/pirate/edit/${pirate._id}`} className="btn m-3 btn-primary">View</Link>
                                <Delete reload={reload} id={pirate._id}></Delete>
                            </div>
                        </div>
                    )
                }) : <>None</>}
        </div>
    )
}

export default Main;