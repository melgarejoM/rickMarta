
import './App.css';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios' 
import {Route, Routes} from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';

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
        <Routes>
         <Route path='/home' 
                element={<Cards characters={characters} onClose = {onClose} />}/>
         <Route path='/about' 
                element={<About />}/>
         <Route path='/Detail/:id' element={<Detail />}/>
        </Routes>
         
      
      </div>
   );
}

export default App;
