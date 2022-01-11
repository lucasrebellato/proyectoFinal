import '../../assets/styles/user.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import * as utils from "../../js/validadores"
import { getDefaultNormalizer } from '@testing-library/dom';


  
const SignIn = () =>{
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [falseEmail, setFalseEmail] = useState ("")
    const [falsePassword, setFalsePassword] = useState ("")
    const [allOk, setAllOk] = useState (false)
    const [IsUser, setIsUser] = useState(false)


    const validateSignIn = () =>  {
        
        (utils.validateEmail(email)  || utils.validatePassword(password)) ? setAllOk(false) : setAllOk(true); 
        updateInfo();
        
    }
    
    const updateInfo = () => {     
        setFalsePassword(utils.validatePassword(password));
        setFalseEmail(utils.validateEmail(email));
    }


    return(
    <div id="sign-container">    
        <div id="login-container">
        <Link to= "/Tienda"  className="fa fa-arrow-circle-left" style={{width:"50px"}}></Link>
        <h1>Ingresar</h1>
        <h1 className="fa fa-user" style={{fontSize: "40px"},{color: "tomato"}}></h1>
        
        <form>
            
            <h3>Correo electronico</h3>
            <input type="text" name="email" id="login-email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/>
            {
                falseEmail && (
                    <p className="error">Verifique su email</p>
                    )
            }
            
            <h3>Contraseña</h3>
            <input type="password" name="password" id="login-password" placeholder="Contraseña" onChange={e => setPassword (e.target.value)} value={password}/>
            {
                falsePassword && (
                    <p className="error">Verifique su contraseña</p>
                    )
            }
            
            <button type="button" onClick={() => validateSignIn()}>Ingresar</button>
            {
                        allOk && (
                            <p className="correct">Ha ingresado correctamente, {email}</p> 
                        )
                        }
        
        </form>
        
        <Link to ="/Sign-Up"  style={{width:"100px"}}>Crear cuenta</Link>

        </div>
    </div>
    );
}



export default SignIn;