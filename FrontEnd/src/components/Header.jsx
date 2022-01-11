import React, { useEffect, useState } from "react";
import '../assets/styles/page.css'
import logo from "../assets/imagenes/loguin.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { navegatorMenu } from "../js/menu";


  
const HeaderUs = () =>{

    const [path, setPath] = useState (window.location.pathname)
    
    return (
        <header>
        
        <div className="brand">

           

            <img src={logo} alt=""/>

            

            <h1 className="title">Origen Eco-Almacen</h1>

        
        </div>
        
        <button className="fa fa-bars" onClick={"() => navegatorMenu()"}></button>
        
        <nav>

            <ul className="nav_1 nav_menu">
                <li><Link to ="/" className={(path=="/" ? "active" : "")} onClick={() => setPath("/")}>Inicio</Link></li>
                <li><Link to ="/Tienda" className={(path=="/Tienda" ? "active" : "")} onClick={() => setPath("/Tienda")}>Tienda</Link></li> 
                <li><Link to ="/Ubicacion" className={(path=="/Ubicacion" ? "active" : "")} onClick={() => setPath("/Ubicacion")}>Ubicación</Link></li>
                <li><Link to ="/Contacto" className={(path=="/Contacto" ? "active" : "")} onClick={() => setPath("/Contacto")}>Contacto</Link></li>
                <li><Link to ="/Nosotros" className={(path=="/Nosotros" ? "active" : "")} onClick={() => setPath("/Nosotros")}>Nosotros</Link>
                </li>
            </ul>

        </nav>

    </header>
    )
}



export default HeaderUs;
