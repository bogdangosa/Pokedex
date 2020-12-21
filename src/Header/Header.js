import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = (props) =>{
    return(
        <div className="Header">
            <p className="pageBtn" onClick={props.onClickPrevious}>Prev</p>
            <Link to='/' style={{ textDecoration: 'none' }}> <h1>PokeDex</h1> </Link> 

            <p className="pageBtn" onClick={props.onClickNext}>Next</p>
        </div>
    );
}

export default Header;