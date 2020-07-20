import React from 'react';
import './Character.css';
import { CircularProgress } from '@material-ui/core';

class Character extends React.Component {
    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character',
            { method: 'GET', headers: { 'Content-Type': 'application/json' } }
        ).then((response) => {
            return response.json();
        }).then((resource) => {                
            this.setState({ characters: resource.results.slice(0,3)})  
        });
    }

    renderCharacters = () => {
        return this.state.characters.map((char, index) => 
            <div key={index} className="card">
                <img className="avatar" src={char.image} alt="Avatar"/>
                <div className="container">
                  <h4><b>{char.name}</b></h4> 
                    <p>{char.species}</p> 
                </div>
            </div>
        )
    }

    render() {
        const {characters} = this.state;  
        return (
            characters.length > 0 ? this.renderCharacters() : 
            <CircularProgress size={50}/>
        )
    }
}

export default Character;