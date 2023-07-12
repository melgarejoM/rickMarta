import './App.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';

import Nav from './components/Nav/Nav';
import axios from 'axios'

function App() {
   const [characters, setCharacters] = useState([])
   //fetch - axios
   //con FECH -> RES => RES.JSON() MAS NATIVO,NO HAY QUE INSTALAR
   //CON AXIOS -> res => res.data, HAY Q INSTALARLO
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => {
         if(data.name){
            setCharacters((oldCharacters) => [...oldCharacters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         };
       
      });
   
   }
   const onClose = (id) => {     
      setCharacters(characters.filter(char => char.id !== id))
      }
      
     return (
      <div className='App'>
        <Nav onSearch={onSearch}/> 
         <Cards characters={characters} onClose = {onClose} />
      
      </div>
   );
}

export default App;
