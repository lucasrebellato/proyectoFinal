import '../../assets/styles/user.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import * as utils from "../../js/validadores"

    const SignUp = () =>{

    const addUser = (user) =>{
        fetch('http://localhost:8020/Users/addUser',
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
            }).catch(e=> console.log(e))
        }
    
    const createUser = () =>{
            addUser({
                first_name: name,
                last_name: lastName,
                address: address,
                phone: phone,
                category:'cliente',
                email: email,
                password:password})
        
    }
    
    const [name, setName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [address, setAddress] = useState ("")
    const [phone, setPhone] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [falseName, setFalseName] = useState ("")
    const [falseLastName, setFalseLastName] = useState ("")
    const [falseAddress, setFalseAddress] = useState ("")
    const [falsePhone, setFalsePhone] = useState ("")
    const [falseEmail, setFalseEmail] = useState ("")
    const [falsePassword, setFalsePassword] = useState ("")
    const [message, setMessage] = useState ("")
    const [allOk, setAllOk] = useState (false)


    const validateSignUp = () => {
         (utils.validateNameOrLast(name) || utils.validateNameOrLast(lastName) || utils.validateAddress(address) || utils.validateTelephone(phone) || utils.validatePassword(password) || utils.validateEmail(email)) ? setAllOk(false) : setAllOk(true);
        updateInfo();
        if(allOk){
        createUser();
        }
    }
    
    const updateInfo = () => {
        setFalseName(utils.validateNameOrLast(name));
        setFalseLastName(utils.validateNameOrLast(lastName));
        setFalseAddress(utils.validateAddress(address));
        setFalsePhone(utils.validateTelephone(phone));
        setFalseEmail(utils.validateEmail(email));
        setFalsePassword(utils.validatePassword(password));
    }


    return (
    <div id="sign-container">    
        <div id="signup-container">
            <Link to="/Sign-In" className="fa fa-arrow-circle-left"  style={{width:"50px"}}></Link>

            <h1>Crear cuenta</h1>
            <h1 className="fa fa-user" style={{fontSize:"40px"},{color:"tomato"}}></h1>
        
            <form>
                
                <h3>Nombre</h3>
                <input type="text" name="nombre" id="signup-name" placeholder="Nombre" onChange={e => setName (e.target.value)} value={name}/>
                {
                    falseName && (
                        <p className="error">Verifique su nombre</p>
                    )
                }

                <h3>Apellido</h3>
                <input type="text" name="apellido" id="signup-lastname" placeholder="Apellido" onChange={e => setLastName (e.target.value)} value={lastName}/>
                {
                    falseLastName && (
                        <p className="error">Verifique su apellido</p>
                    )
                }

                <h3>Dirección</h3>
                <input type="text" name="direccion" id="signup-address" placeholder="Dirección" onChange={e => setAddress (e.target.value)} value={address}/>
                {
                    falseAddress && (
                        <p className="error">Verifique su direccion</p>
                    )
                }

                <h3>Telefono</h3>
                <input type="number" name="numero" id="signup-number" placeholder="Telefono" onChange={e => setPhone (e.target.value)} value={phone}/>
                {
                    falsePhone && (
                        <p className="error">Verifique su telefono</p>
                    )
                }

                <h3>Correo electronico</h3>
                <input type="text" name="email" id="signup-email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/>
                {
                    falseEmail && (
                        <p className="error">Verifique su email</p>
                    )
                }

                <h3>Contraseña (al menos 8 caracteres entre min, mayus, y numeros)</h3>
                <input type="password" name="password" id="signup-password" placeholder="Contraseña" onChange={e => setPassword (e.target.value)} value={password}/>
                {
                    falsePassword && (
                        <p className="error">Verifique su contraseña</p>
                    )
                }

                <button type="button" onClick={() => validateSignUp()}>Crear</button> 
                {
                    message == "El usuario fue creado con éxito." && (
                        <p className="correct">{message}</p> 
                    )

                }
                {
                    message == "Email en uso." && (
                        <p className="error">{message}</p> 
                    )

                }
            </form>
            

        </div>
    </div>
    )
    

}

export default SignUp;