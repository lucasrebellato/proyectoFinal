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

    const logUser = (user) =>{ // {task:'description', priority: 'priority' }
        console.log('qandas gil')
        fetch('http://localhost:8020/Users/logUser',
        {
            method:'POST',
            headers:{ 
            'Accept': 'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify({...user})
            })
            .then((data) => data.json())
            .then((data) => {
                setMessage(data.message);
                setLoginStatus(data)
                console.log(data)
            }).catch(e=> setLoginStatus(e))
        }

    useEffect(() => {
        fetch("http://localhost:8020/Users/checkUser", {
            method:'GET',
            credentials: 'same-origin'
        })
        .then(data => data.json())
        .then(data =>{
            if(data.loggedIn == true){
            setLoginStatus(data.user[0].email)
            console.log("SE LOGEO")
            }else {
                console.log('comiste queso')
            }
        }
            )
        .catch(e =>{
            console.log(e)
        }
            )
    },[])
    


    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [falseEmail, setFalseEmail] = useState ("")
    const [falsePassword, setFalsePassword] = useState ("")
    const [loginStatus, setLoginStatus] = useState("")
    const [message, setMessage] = useState ("")
    const [allOk, setAllOk] = useState (false)
    const [IsUser, setIsUser] = useState(false)


    const validateSignIn = () =>  {
        
        (utils.validateEmail(email)  || utils.validatePassword(password)) ? setAllOk(false) : setAllOk(true); 
        updateInfo();
        if(allOk){
            createUser();
        }
    }
    
    const updateInfo = () => {     
        setFalsePassword(utils.validatePassword(password));
        setFalseEmail(utils.validateEmail(email));
    }

    
    const createUser = () =>{
        logUser({
            email: email,
            password:password}
        )
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
                        message == "Logeado correctamente." && (
                            <p className="correct">{message}</p> 
                        )
            }
            {
                        (message == "Usuario o contraseña erroneos." || message == "El usuario no existe.")  && (
                            <p className="error">{message}</p> 
                        )
            }
     
        
        </form>
        
        <Link to ="/Sign-Up"  style={{width:"100px"}}>Crear cuenta</Link>

        </div>
    </div>
    );
}



export default SignIn;