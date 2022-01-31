import axios from 'axios'

const Delete = (props) => {
    
    const deletePirate = () => {
        axios.delete(`http://localhost:8000/api/pirate/delete/${props.id}`)
        .then(res => {
            console.log("response when deleting", res)
            props.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        
        <button onClick={deletePirate} type="button"  className="btn btn-danger">Delete</button>
        
    )
}

export default Delete;