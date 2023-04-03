export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={()=>onSearch("NOT FOUND ID")}>Buscar</button>
      </div>
   );
}
