
import styles from './Form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validation from '../validation/validation.js'

export default function Form({login}){
    const [userData, setUserData] = useState({
        email: '',
        password:''
    })

    const[errors, setErrors] = useState({
        email: '',
        password:''
    });

function handleChange(event){
    setUserData({
        ...userData,
        [event.target.name]: event.target.value //{email: example@gmail.com
                                               // password: contraseña    "}
    })
       setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value 
                                               
    }))
}

function handleSubmit(event){
    event.preventDefault();
    login(userData)
}

    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <form className={styles.form} onSubmit={handleSubmit}>
             <label>Email:</label>
             <input type='tex' name='email' placeholder= "example@gmail.com" value={userData.email} onChange={handleChange}></input>
             <p>{errors.email}</p>

             <label>Password:</label>
             <input type='password' name='password' placeholder= "password" value={userData.password} onChange={handleChange}></input>
             <p>{errors.password}</p>

             <button>Login</button>
            </form>
            
        </div>
        
    )
}