import style from "./Card.module.css";
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {addFav, removeFav} from '../../redux/actions'
import {connect} from 'react-redux'
import React from 'react';
 function Card({name,status,species,gender,origin,image, onClose,id,addFav,removeFav,myFavorites}) {
   const [isFav, setIsFav] = useState(false)
   
   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);
   useEffect(()=>{
      setIsFav(isFav);
   }, [isFav])
 
   const handleFavorite = ()=> {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      } else {
      setIsFav(true)
      addFav({name,status,species,gender,origin,image,id})
      }
   }

   return (
      <div className={style.container}>
        <div className={style.buttonContainer}>
         {
            isFav ? (
               <button  onClick={handleFavorite} className={style.closeButton}>❤️</button>
            ) : (
               <button  onClick={handleFavorite} className={style.closeButton}>🤍</button>
            )
         }
          <button close="true" onClick={() => onClose(id)} className={style.closeButton}>X</button>

         </div>
         <Link to={`/Detail/${id}`} ><h2>{name}</h2></Link>
         <h2> {status}</h2>
         <h2> {species}</h2>
         <h2> {gender}</h2>
         <h2> {origin.name}</h2>
         <img src={image} className={style.imageBorde}alt= {`La imagen no esta disponible de ${name}`} />
         
  
      </div>
   );
}
// function mapStateToProps(state,ownProps){
//    return{
//       isFav: state.myFavorites.some(item => item.id === ownProps.id)
//    }
// }

function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}
 function mapDispachToProps (dispach){
   return{
      addFav: function(character){
         dispach(addFav(character));
      },
      removeFav: function(id){
         dispach(removeFav(id));
      }
   }
}
export default connect (mapStateToProps,mapDispachToProps)(Card);