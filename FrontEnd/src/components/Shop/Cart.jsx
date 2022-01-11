import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const CartSection = (props) =>{

    return (
        <main>

            <div id="cart">
                <Link to= "/Tienda" id="comeback-shop" className="fa fa-arrow-circle-left"></Link>
                <h1>Carrito</h1>

                <ul id="cart-holder">
            
                {   
                    props.cart.length == 0 &&(
                        <p style={{textAlign:"center"}} className="error notProduct">Usted no ha añadido productos</p>
                    )
                }

                {
                    props.cart.map((product, index) =>{
                        
                        let id= product.id;

                        return<li>
                            
                            <p>{product.name}</p>
                            <img style={{marginLeft:"8px"}} src={require("../../assets/shop/"+id+".jpg").default} alt={product.name}/>
                            <p>cantidad: {product.quantity}</p>
                            <p type="number">${product.price * product.quantity}</p>
                            <button onClick={() => props.delete(product)}>Eliminar</button>
                            
                        </li>
                    })
                }
                
                </ul>
            
                <p id="total-holder">Subtotal: ${props.total}</p>
               
                {   
                    props.cart.length != 0 &&(
                        <Link to="/Sign-In" id="buy-button">Comprar</Link>
                    )
                }
                

            
            </div>

        
        </main>
    ) 
}

export default CartSection;





