import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [myFavorites]);

   return (
         <div className={style.container}>
            
            <button onClick={handleFavorite} className={style.btnFav}>{isFav ? '❤️' : '🤍' }</button>
            
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);