const validation = (userData) => {
    let errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.username)){
        errors.username = 'El email es inválido';
    }
    if(!userData.username){
        errors.username = 'Este campo no puede estar vacío';
    }
    if(userData.username.length > 35){
        errors.username = 'El email no puede tener más de 35 caracteres';
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña tiene que tener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10)
    {
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;