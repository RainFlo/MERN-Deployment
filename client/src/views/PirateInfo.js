import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PirateInfo = props => {

    const {id} = props;
    const [pirate, setPirate] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data))
    }, [pirate]);

    const togglePegs = pirate => {
        const tempPirate = pirate;
        tempPirate.pegLeg = !tempPirate.pegLeg;
        setPirate(tempPirate);
        axios.put(`http://localhost:8000/api/pirates/${id}/update`, pirate)
            .then(res => console.log(res))
    }

    const togglePatch = pirate => {
        const tempPirate = pirate;
        tempPirate.eyePatch = !tempPirate.eyePatch;
        setPirate(tempPirate);
        axios.put(`http://localhost:8000/api/pirates/${id}/update`, pirate)
            .then(res => console.log(res))
    }

    const toggleHook = pirate => {
        const tempPirate = pirate;
        tempPirate.hookHand = !tempPirate.hookHand;
        setPirate(tempPirate);
        axios.put(`http://localhost:8000/api/pirates/${id}/update`, pirate)
            .then(res => console.log(res))
    }

    return (
        <>
        {
            pirate != null ?
            <div>
                <h1>{pirate.pirateName}</h1>
                <img src={pirate.pirateUrl} alt={pirate.pirateName} width="500"/>
                <h2>"{pirate.catchPhrase}"</h2>
                <div>
                    <h3>About</h3>
                    <p>Position: {pirate.crewPosition}</p>
                    <p>Treasure: {pirate.treasure}</p>
                    <p>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</p><button onClick={()=>togglePegs(pirate)}>Change Pegs</button>
                    <p>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</p><button onClick={()=>togglePatch(pirate)}>Change Patch</button>
                    <p>Hook Hand: {pirate.hookHand ? 'Yes' : 'No'}</p><button onClick={()=>toggleHook(pirate)}>Change Hook</button>
                </div>
                <button onClick={()=>navigate("/pirates")}>Return to dashboard</button>
            </div>
            :''
        }
        </>
    )
}

export default PirateInfo
