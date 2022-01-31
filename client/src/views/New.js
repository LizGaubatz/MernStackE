import Form from "../components/Form";
import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

export default () => {
    const [pirates, setPirates] = useState([]);

    const history = useHistory();

    // const refresh = () => {
    //     setLoaded(!loaded)
    // }

    const newPirate = pirates => {
        axios.post('http://localhost:8000/api/pirate/new', pirates)
        .then(res => {
            history.push('/api/pirate')
            // props.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        
        <div className="container">
            <h3> Add a Pirate </h3>
            <Link to='/' >Home</Link>
            <Form
                onSubmitProp = {newPirate}
                initialName=''
                initalUrl=''
                initialChests={0}
                initalPhrase=''
                intialPosition=''
                intialPeg={true}
                intiPatch={true}
                intitalHook={true}
            />
        </div>
        
    )

}