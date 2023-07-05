import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css';
export default function Cards({characters}) {
   
   return (<div className={styles.flexContainer}>
      
      {characters.map(character =>
         <Card
         key = {character.id}
         id = {character.id}
         name = {character.name}
         status = {character.status}
         species = {character.species}
         gender = {character.gender}
         origin = {character.origin.name}
         image = {character.image}
         onClose ={()=> window.alert('Emulamos que se cierra la card')}
         />
         )}
   </div>
   );
}
