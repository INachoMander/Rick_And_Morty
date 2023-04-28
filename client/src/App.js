import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '926a91663ae8.c94ad700ac80ca22325b';

// const email = 'ignacio.mander@gmail.com'
// const password = '789456123'
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const { data } = await axios(`${URL}?email=${email}&password=${password}`)
         const { access } = data
         
         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };
   
      // axios(`${URL_BASE}/${id}?key=${API_KEY}`)

   const onClose = (id) => {
      setCharacters(
         characters.filter(character => character.id !== id)
      )
   }

   // const login = (userData) => {
   //    if(userData.username === EMAIL && userData.password === PASSWORD) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   return (
      <div className='App' style={{ padding: "25px" }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='home' element={ <Cards onClose={onClose} characters={characters} />} />
            <Route path='about' element={<About/>} />
            <Route path='detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
