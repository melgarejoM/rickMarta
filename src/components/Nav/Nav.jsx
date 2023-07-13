import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import { Link } from "react-router-dom";
import style from '../Nav/Nav.module.css'
function Nav({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
            <Link to='/home' className={style.button}>Home</Link>
            </button>
            
            <button>
            <Link to='/about' className={style.button}>About</Link>
            </button>
            
        </div>
    )
}
export default Nav