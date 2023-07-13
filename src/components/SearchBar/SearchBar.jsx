import style from '../SearchBar/SearchBar.module.css';
import {useState} from 'react'
export default function SearchBar({onSearch}) {

   // const handleSearch = () => {
   //    const inputSearch = document.getElementById('inputSearch')
   //    onSearch(inputSearch.value)
   //    inputSearch.value = ""

   // }
   const [id, setId]= useState('')
 
   const handleChange = (event) => {
      setId(event.target.value)
   }
   const handleSearch = (id)=> {
      onSearch(id)
      setId('')
   }
   return (
      <div>
         <input id = 'inputSearch' value={id} type='search' placeholder= "Ingresa un ID" onChange={handleChange}/>
         <button className="button" onClick={() =>{handleSearch(id)}}>Agregar</button>
      </div>
   );
}
