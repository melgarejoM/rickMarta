import style from "./Card.module.css";

export default function Card({name,status,species,gender,origin,image, onClose,id}) {
   return (
      <div className={style.container}>
         <button close onClick={() => onClose(id)} className={style.closeButton}>X</button>
         <h2> {name}</h2>
         <h2> {status}</h2>
         <h2> {species}</h2>
         <h2> {gender}</h2>
         <h2> {origin.name}</h2>
         <img src={image} className={style.imageBorde}alt= {`La imagen no esta disponible de ${name}`} />
         
      </div>
   );
}
