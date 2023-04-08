import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '926a91663ae8.c94ad700ac80ca22325b';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
        <div>
            <h2 style={{ color:'white' }}>{character?.name}</h2>
            <h2 style={{ color:'white' }}>{character?.status}</h2>
            <h2 style={{ color:'white' }}>{character?.species}</h2>
            <h2 style={{ color:'white' }}>{character?.gender}</h2>
            <h2 style={{ color:'white' }}>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;