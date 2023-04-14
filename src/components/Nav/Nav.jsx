import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({ onSearch }) => {

    return(
        <nav className={style.nav}>
            <div className={style.homeAbout}>
                <button className={style.btnh}>
                    <Link to='/home' >HOME</Link>
                </button>
                
                <button  className={style.btna}>
                    <Link to='/about' >ABOUT</Link>
                </button>

                <button className={style.btnf}>
                    <Link to='/favorites' >FAVORITES</Link>
                </button>
            </div>

                <SearchBar onSearch={onSearch}/>

            <div className={style.logout}>
                <button className={style.btnl}>
                    <Link to='/' >LOGOUT</Link>
                </button>
            </div>
        </nav>
    )
}

export default Nav;
