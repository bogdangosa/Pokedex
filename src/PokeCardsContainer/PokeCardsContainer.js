import React from 'react'
import './PokeCardsContainer.css'
import '../PokemonCard/PokemonCard'
import PokemonCard from '../PokemonCard/PokemonCard';
import {Link} from 'react-router-dom'


const PokeCardsContainer = (props) =>{



    return(
        <div className="PokeCardsContainer"> 
            {props.Data.map((pokemon,i) =>{
                return <Link to={`/${i+props.Offset}`} style={{ textDecoration: 'none' }} key={i}><PokemonCard key={i} name={pokemon.name} image={pokemon.sprites.front_default}/></Link>
            })}
        </div>
    );
}

export default PokeCardsContainer;