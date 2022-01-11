import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";




const Details = (props) =>{
        let id=props.product.id;
   
    return (

        <main>
           
            <div id="product-details">
           
                <Link to= "/Tienda" id="comeback-shop" className="fa fa-arrow-circle-left"></Link>
           
                <h1>Detalles del producto</h1>

                {   
               
                <div id="details-holder">

                    <img src={require("../../assets/shop/"+id+".jpg").default} alt={props.product.name}/>

                    <div id="details-item">
                    <h1>{props.product.name}</h1>
                
                    <h2>Descripción:<br/>{props.product.description}</h2>

                    <h2>Precio: ${props.product.price}</h2>

                    </div>
                </div>
               
               }
            
            </div>
        
        </main>
    ) 
}

export default Details;
