import React from 'react'
import './PokemonCard.css'


const PokemonCard = (props) =>{


    return(
        <div className="PokemonCard" onClick={props.onClick}>
            <h1 className="PokemonName">{props.name}</h1>
            <img src={props.image} alt="not working"/>
            
        </div>
    );
}

export default PokemonCard;