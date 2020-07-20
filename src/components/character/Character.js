import React, { useState, useEffect } from 'react';
import './Character.css';
import { CircularProgress } from '@material-ui/core';

const CHARACTER_URI = 'https://rickandmortyapi.com/api/character'; 
const Character = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(CHARACTER_URI,
            { method: 'GET', headers: { 'Content-Type': 'application/json' } }
        ).then((response) => {
            return response.json();
        }).then((resource) => {        
            setCharacters(resource.results.slice(0,3));
        });
    });

    const renderCharacters = () => {        
        return characters.map((char, index) => 
            <div key={index} className="card">
                <img className="avatar" src={char.image} alt="Avatar"/>
                <div className="container">
                  <h4><b>{char.name}</b></h4> 
                    <p>{char.species}</p> 
                </div>
            </div>
        )
    }
    
    return (
        characters.length > 0 ? renderCharacters() : 
        <CircularProgress size={50}/>           
    )
}

export default Character;