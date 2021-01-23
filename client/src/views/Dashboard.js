import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Dashboard = () => {

    const [pirates, setPirates] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res => {
                setPirates(res.data);
                setLoaded(true);
            });
    }, []);

    const deleteHandler = (pirateId) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirateId}/delete`)
            .then(res => {
                console.log(res);
                setPirates(pirates.filter(pirate => pirate._id !== pirateId));
            });
    }

    if(!loaded) {
        return 'Loading...'
    }

    return (
        <div>
            <h1>Pirate Crew</h1>
            <button onClick={() => navigate(`/pirate/new`)}>Add Pirate</button>
            {pirates.map((pirate, idx) => {
                return (
                    <div>
                        <h3>{pirate.pirateName}</h3>
                        <img src={pirate.pirateUrl} alt={pirate.pirateName} width="150"/>
                        <button onClick={()=>navigate(`/pirate/${pirate._id}`)}>View Pirate</button>
                        <button onClick={() => deleteHandler(pirate._id)}>Walk The Plank</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard
