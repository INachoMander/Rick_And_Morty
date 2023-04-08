import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <div className="user-box">
                    <label htmlFor="username"></label>
                    <input type="text" name="username" value={userData.username} placeholder="Ingresar Mail" onChange={handleInputChange} />
                    {errors.username && <p style={{color: 'red'}}>{errors.username}</p>}
                </div>
                <div className="user-box">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" value={userData.password} placeholder="Ingresar Contraseña" onChange={handleInputChange} />
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
                </div><center>
                    <button className="login">LOGIN</button>
                        <span></span>
                    </center>
            </form>
        </div>
    )
}

export default Form;