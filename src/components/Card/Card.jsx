import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
         <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeButton}>CERRAR</button>

         <Link to={`/detail/${id}`}>
            <h2 className="nameLink" style={{ color:'white' }}>{name}</h2>
         </Link>

         <img src={image} alt= {name} />
         <h2>ID: {id}</h2>
         {/*<h2 >Status: {status}</h2>*/}
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         {/*<h2 >Origin: {origin}</h2>*/}
      </div>
   );
}
