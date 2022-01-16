import React, { useEffect, useState } from "react";
import '../../assets/styles/page.css'
import * as utils from "../../js/validadores"


const Contact = () => {

    const sendMail = (mail) =>{
        fetch('http://localhost:8020/Users/Mail',
        {
            method:'POST',
            headers:{ 
            'Accept': 'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify({...mail})
            })
            .then((data) => data.json())
            .then((data) => {
                
            }).catch(e=> console.log(e))
        }

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const [message, setMessage] = useState ("")
    const [falseName, setFalseName] = useState ("")
    const [falseLastName, setFalseLastName] = useState ("")
    const [falseEmail, setFalseEmail] = useState ("")
    const [allOk, setAllOk] = useState (false)

    const createEmail = () => {
        sendMail({
            name : name,
            last_name: lastName,
            email: email,
            message: message
        })
    }

    const validateContact = () => {
    ((utils.validateNameOrLast(name)  || utils.validateNameOrLast(lastName)) || utils.validateEmail(email)) ? setAllOk(false) : setAllOk(true); 
    updateInfo();
    if(allOk){
        createEmail();
    }
    }
    
    const updateInfo = () => {
        setFalseName(utils.validateNameOrLast(name));
        setFalseLastName(utils.validateNameOrLast(lastName));
        setFalseEmail(utils.validateEmail(email));
    }


    return (
        
        <main id="contact">


            <section>

                <h1>¡Contactanos!</h1>

                <div id="in-contact">

                    <article>
                    <p>Puedes contactarnos a este numero o enviarnos un mensaje el cual será respondido al correo asociado a tu cuenta </p>    
                    </article>
            
                    <form action="">
                    
                        <input type="text" name="name" id="name" placeholder="Nombre" onChange={e => setName (e.target.value)} value={name}/>
                        {
                        falseName && (
                            <p className="error">Verifique su nombre</p>
                        )
                        }
                        
                        <input type="text" name="lastname" id="lastname" placeholder="Apellido" onChange={e => setLastName (e.target.value)} value={lastName}/>
                        {
                        falseLastName && (
                            <p className="error">Verifique su apellido</p>
                        )
                        }
                        
                        <input type="text" name="email" id="email" placeholder="Correo electronico" onChange={e => setEmail (e.target.value)} value={email}/> 
                        {
                        falseEmail && (
                            <p className="error">Verifique su email</p>
                        )
                        }
                        <textarea name="comment" id="contact-comment" cols="30" rows="10" placeholder="Introduce tu comentario..." onChange={e => setMessage (e.target.value)} value={message}></textarea>
                        
                        <button type="button" onClick={() => validateContact()}>Enviar</button>
                        {
                        allOk && (
                            <p className="correct">Mensaje enviado correctamente, gracias {name}</p> 
                        )
                        }
                       
                
                    </form>
                
                    
                </div>
                
            </section>


        </main>
    ); 
}


export default Contact;