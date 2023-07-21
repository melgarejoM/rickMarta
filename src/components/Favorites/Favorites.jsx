import React, { useState } from "react";
import {connect, useDispatch} from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from "../../redux/actions";


function Favorites({myFavorites}){
    const [orderBy, setOrderBy] = useState("A"); // Estado local para guardar el orden seleccionado
    const [filterByGender, setFilterByGender] = useState("All");
    const [aux, setAux] = useState(false); // Agregar el estado local aux e inicializarlo en false
    const dispatch = useDispatch(); // Agregar el hook useDispatch

    
    const handleChangeOrder = (event) => {
        setOrderBy(event.target.value); // Actualizar el estado local con el nuevo valor seleccionado
        handleOrder(event); // Llamar a la función handleOrder al cambiar el orden
    }

    const handleChangeGenderFilter = (event) => {
        setFilterByGender(event.target.value);
        handleFilter(event); // Llamar a la función handleFilter al cambiar el filtro de género
    
    };

    // Función para despachar la acción orderCards
  const handleOrder = (event) => {
    setAux(!aux); // Cambiar el valor de aux al despachar la acción
    dispatch(orderCards(event.target.value)); // Despachar la acción para ordenar las tarjetas
  };

   // Función para despachar la acción filterCards
   const handleFilter = (event) => {
    setAux(!aux); // Cambiar el valor de aux al despachar la acción
    dispatch(filterCards(event.target.value)); // Despachar la acción para filtrar las tarjetas
  };

    // Aplicar el orden seleccionado al array de personajes favoritos
    const orderedFavorites = myFavorites.slice().sort((a, b) => {
        if (orderBy === "A") {
            return a.id - b.id; // Orden ascendente
        } else if (orderBy === "D") {
            return b.id - a.id; // Orden descendente
        }
        return 0;
    });



    const filteredFavorites =
    filterByGender === "All"
      ? orderedFavorites
      : orderedFavorites.filter((character) => character.gender === filterByGender);

    return (
        <div>
           
            <select value={orderBy} onChange={handleChangeOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

        
            <select value={filterByGender} onChange={handleChangeGenderFilter}>
                <option value="All">Todos</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            
            {filteredFavorites.map(({id, name, gender, species, image,status, origin}) => (<Card
                key= {id}
                id={id}
                name={name}
                gender={gender}
                species={species}
                image={image}
                status={status}
                origin={origin} />))}
        </div>
    );
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps)(Favorites)