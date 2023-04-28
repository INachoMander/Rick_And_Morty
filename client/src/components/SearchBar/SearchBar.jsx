import { useState } from "react";
import style from '../Nav/Nav.module.css'

export default function SearchBar({ onSearch} ) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className={style.searchBar}>
         <input type='search' onChange={handleChange} value={id} className={style.inputS} />
         <button onClick={() =>{onSearch(id); setId('')}} className={style.btns} >AGREGAR</button>   
      </div>
   );
}
