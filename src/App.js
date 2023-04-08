import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
   const API_KEY = '926a91663ae8.c94ad700ac80ca22325b';

   const EMAIL = 'ignacio.mander@gmail.com'
   const PASSWORD = '789456123'

   useEffect(() => {
      !access && navigate('/')
      // eslint-disable-next-line
   }, [access])

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter(character => character.id !== id)
      )
   }

   const login = (userData) => {
      if(userData.username === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }else{
         alert('Credenciales Incorrectas')
      }
   }

   return (
      <div className='App' style={{ padding: "25px" }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='home' element={ <Cards onClose={onClose} characters={characters} />} />
            <Route path='about' element={<About/>} />
            <Route path='detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;
