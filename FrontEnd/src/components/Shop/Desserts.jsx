import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


const DessertsSection = (props) =>{
    const [desserts, setDesserts] = useState([])
    const [errorMessageD, setErrorMessageD] = useState("")
    const [hasErrorD, setHasErrorD] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8080/Tienda/Desserts")
        .then(data => data.json())
        .then(data =>{
            setDesserts(data);
            setHasErrorD(false);
            setLoading(false);
        }
            )
        .catch(e =>{
            setErrorMessageD(e.message);
            setHasErrorD(true);
            setLoading(false);
        }
            )
    },[]) 


    return (
        <main>
           
            <h1>Nuestros postres</h1>

            <div id="food-holder">
            
            {
                loading &&(
                    <ReactLoading type={"spin"} />
                    )

            }    
         
           
            {
            hasErrorD &&(
                <h1 className="error">Se ha producido un error N°{errorMessageD}</h1>
            )
            }
            
            {
                    desserts.map(dessert =>{

                        let id = dessert.id

                        return (    
                                
                                 <div className="product-container" key={id}>
                                    <h3>{dessert.name}</h3>
                                    <img src={require("../../assets/shop/"+id+".jpg").default} alt={dessert.name}/>
                                    <h3 className="price">${dessert.price}</h3>
                                    <button id="link-button" onClick={() => props.details(dessert)}><Link to="/Tienda/Detalles" id="details-button" >detalles...</Link></button>
                                    <button id="add-button" onClick={() => props.addToCart(dessert)}>Añadir</button> 
                                    </div>             
                        )            
                    })
                }
            </div>  

        
        </main>
    ) 
}

export default DessertsSection;







