import style from "./About.module.css";
import myFoto from "./Nacho24.jpeg"

const About = () => {
    return(
        <div className={style.container}>
            <h1>IGNACIO MANDER</h1>
            <p>FT 37a</p>
            <div className={style.foto}>
                <img width="500" src={myFoto} alt="Nacho24"/>
            </div>
        </div>
        
    )
}

export default About;