import React,{ useState , useEffect } from 'react'
import './Home.css'
import Header from '../Header/Header'
import PokeCardsContainer from '../PokeCardsContainer/PokeCardsContainer'

const Home = () =>{
    const [loading,setLoading] = useState(true);
    const [PokemonData,SetPokemonData] = useState();
    const [CurentUrl,SetCurentUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [NextUrl,SetNextUrl] = useState();
    const [PreviousUrl,SetPreviousUrl] = useState();
    const [Offset,SetOffeset] = useState(0);

    useEffect(()=>{
        FetchData();
    },[CurentUrl])

    const FetchData = async () =>{
        setLoading(true);
        const response = await fetch(CurentUrl);
        const data = await response.json();
        SetNextUrl(data.next);
        SetPreviousUrl(data.previous);
        await LoadPokemons(data.results);
        //console.log(data.next)
        //console.log(data);
        setLoading(false);
    }
  
    const LoadPokemons = async (data) =>{
      let PokemonData = await Promise.all(data.map(async pokemon =>{
          const PokemonResponse =  await fetch(pokemon.url);
          const PokemonRecord =  await PokemonResponse.json();
          return PokemonRecord;
      }))
      console.log(PokemonData);
      SetPokemonData(PokemonData);
    }

    const NextPage = () =>{
        if(NextUrl==null)
          return;
        SetCurentUrl(NextUrl);
        SetOffeset(Offset+20);
    }
    const PreviousPage = () =>{
        if(PreviousUrl==null)
            return;
        SetCurentUrl(PreviousUrl);
        SetOffeset(Offset-20);
    }

    return(
        <div className="Home">
            <Header onClickNext={()=>{NextPage();}} onClickPrevious={()=>{PreviousPage()}}/>
            {loading ?<h1>Loading</h1>:
            <PokeCardsContainer Data={PokemonData} Offset={Offset}/>}
        </div>
    );
}

export default Home;