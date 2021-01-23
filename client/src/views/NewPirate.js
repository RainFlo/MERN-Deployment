import React,{ useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const NewPirate = () => {

    const [pirateName, setPirateName] = useState("");
    const [pirateUrl, setPirateUrl] = useState("");
    const [treasure, setTreasure] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [crewPosition, setCrewPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [nameError, setNameError] = useState("");
    const [urlError, setUrlError] = useState("");
    const [treasureError, setTreasureError] = useState("");
    const [catchError, setCatchError] = useState("");
    const [crewError, setCrewError] = useState("");
    const [errors, setErrors] = useState([]);

    const handleName = e => {
        setPirateName(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("Pirate Name is required!");
        } else {
            setNameError("");
        }
    }

    const handleUrl = e => {
        setPirateUrl(e.target.value);
        if(e.target.value.length < 1) {
            setUrlError("Image Url is required!Pirates need to be handsome!");
        } else {
            setUrlError("");
        }
    }

    const handleTreasure = e => {
        setTreasure(e.target.value);
        if(e.target.value.length < 1) {
            setTreasureError("Pirate treasure is required!");
        } else {
            setTreasureError("");
        }
    }

    const handleCatch = e => {
        setCatchPhrase(e.target.value);
        if(e.target.value.length < 1) {
            setCatchError("Pirate catch phrase is required!");
        } else {
            setCatchError("");
        }
    }

    const handleCrew = e => {
        setCrewPosition(e.target.value);
        if(e.target.value.length < 1) {
            setCrewError("Pirate position is required!");
        } else {
            setCrewError("");
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(
            !nameError && !urlError && !treasureError && !catchError && !crewError
        ) {
            axios.post('http://localhost:8000/api/pirates/new', {
                pirateName,
                pirateUrl,
                treasure,
                catchPhrase,
                crewPosition,
                pegLeg,
                eyePatch,
                hookHand
            })
                .then(res => {
                    console.log(res)
                    navigate('/');
                })
                .catch(err=>{
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    setErrors(errorArr);
                })
        }
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <button onClick={() => navigate("/pirates")}>Crew Board</button>
            {errors.map((err, idx) => <p key={idx} style={{color: 'red'}}>{err}</p>)}
            <form onSubmit={onSubmitHandler}>
                <div>
                    {
                        nameError ?
                        <p style={{color:'red'}}>{nameError}</p> : ''
                    }
                    <label>Pirate Name:</label><br/>
                    <input type="text" onChange={handleName}/>
                </div>
                <div>
                    {
                        urlError ?
                        <p style={{color:'red'}}>{urlError}</p> : ''
                    }
                    <label>Image Url:</label><br/>
                    <input type="text" onChange={handleUrl}/>
                </div>
                <div>
                    {
                        treasureError ?
                        <p style={{color:'red'}}>{treasureError}</p> : ''
                    }
                    <label># of Treasure Chests:</label>
                    <input type="number" onChange={handleTreasure}/>
                </div>
                <div>
                    {
                        catchError ?
                        <p style={{color:'red'}}>{catchError}</p> : ''
                    }
                    <label>Pirate Catch Phrase:</label>
                    <input type="text" onChange={handleCatch}/>
                </div>
                <div>
                    {
                        crewError ?
                        <p style={{color:'red'}}>{crewError}</p> : ''
                    }
                    <label>Crew Position:</label><br/>
                    <select value={crewPosition} onChange={handleCrew}>
                        <option value="">Select Crew Position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <label><input type="checkbox" checked={pegLeg} onChange={e=>setPegLeg(e.target.checked)}/>Peg Leg</label>
                    <label><input type="checkbox" checked={eyePatch} onChange={e=>setEyePatch(e.target.checked)}/>Eye Patch</label>
                    <label><input type="checkbox" checked={hookHand} onChange={e=>setHookHand(e.target.checked)}/>Hook Hand</label>
                </div>
                <button>Add Pirate</button>
            </form>
        </div>
    )
}

export default NewPirate
