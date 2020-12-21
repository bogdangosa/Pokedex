import React,{ useState , useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router,Switch , Route} from 'react-router-dom'
import Home from '../Home/Home'
import PokemonCard from '../PokemonCard/PokemonCard';
import PokemonPage from '../PokemonPage/PokemonPage';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:id" component={PokemonPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
