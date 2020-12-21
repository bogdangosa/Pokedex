import React,{useState,useEffect } from 'react'
import './PokemonPage.css'
import Header from '../Header/Header';

const PokemonPage = ( { match }) => {
    const [Loading,setLoading] = useState(true);
    const [PokemonData,setPokemonData] = useState([])

    useEffect(()=>{
        console.log(match);
        FetchData();
    },[]);

    const FetchData = async () =>{
        let search = parseInt(match.params.id)+1;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        let data = await response.json();
        console.log(data);
        setPokemonData(data);
        setLoading(false);
    }

    return(
        <div className="PokemonPage">
            <Header/>            
            {Loading ? 
            <p>Loading</p>:
            <div className="PokemonContainer">
                <p className="Pokemonname">{PokemonData.name}</p>
                <img src={PokemonData.sprites.front_default} alt="not working" className="PokemonImage"/>
            </div>}
        
        </div>
    );

}

export default PokemonPage;