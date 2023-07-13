import axios from "axios"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
export default function Detail (){
    const {id} = useParams()//tenemos el id
    const[character, setCharacter] = useState({})//donde vamos almacenar el personaje

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     //es lo primer q se va a ejecutar cuando el componente monte
     //el return satCharacter({});va a limpiar la info cuando el componente se desmonte
     //[id]es lo q le va a indicar cuando se va actualizar
    return(
        <div>
        <div>
          <h2>{character.name}</h2>   
          <p><b>Status:</b> {character.status}</p>
          <p><b>Species:</b> {character.species}</p>
          <p><b>Gender:</b> {character.gender}</p>
          {character.origin && (
            <p><b>Origin:</b> {character.origin.name}</p>
          )}
          {character.image ? (
            <img src={character.image} alt='Imag Not Found'/>
          ) : (
            <p>No image available</p>
          )}
        </div>
      </div>
  
    //   <div>
    
    //        <img src={character?.image} alt= 'La imagen no esta disponible' />
    //        <h2>{character?.name}</h2>
    //        <div>
    //             <h2> {character?.status}</h2>
    //             <h2> {character?.species}</h2>
    //             <h2> {character?.gender}</h2>
    //             <h2> {character?.origin?.name}</h2>
    //        </div>
     

    //   </div>
    )
        
        // <div>
//     <div>
//       <h2>{character.name}</h2>   
//       <p><b>Status:</b> {character.status}</p>
//       <p><b>Species:</b> {character.species}</p>
//       <p><b>Gender:</b> {character.gender}</p>
//       {character.origin ? (
//         <p><b>Origin:</b> {character.origin.name}</p>
//       ) : null}
//       <img src={character.image} alt='Imag Not Found'/>
//     </div>
//   </div>
}
