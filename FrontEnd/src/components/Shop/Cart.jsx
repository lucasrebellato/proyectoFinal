import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const CartSection = (props) =>{

    const addBuy = (buy) =>{
        fetch('http://localhost:8020/Shop/Cart/createBuy',
        {
            method:'POST',
            headers:{ 
            'Accept': 'application/json',
            'Content-Type':'application/json'
            },
            body: JSON.stringify({...buy})
            })
            .then((data) => data.json())
            .then((data) => {
                
            }).catch(e=> console.log(e))
        }
    
    const [user, setUser] = useState ("");
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const isUser = () => {
        if(localStorage.getItem("email").length != 0){
            setUser("yes");
            createBuy();
        }else {
            setUser("no");
        }
    }

    const createBuy = () =>{
    
        props.cart.forEach(product => {
            addBuy({
                date: date,
                email: localStorage.getItem("email"),
                price: (product.price * product.quantity),
                quantity: product.quantity,
                product_id: product.id
                }
            )
        });
        props.cart.splice(0, props.cart.length);
    }

    return (
        <main>
            
            <div id="cart">
                <Link to= "/Tienda" id="comeback-shop" className="fa fa-arrow-circle-left" ></Link>
                <h1>Carrito</h1>

                <ul id="cart-holder">
            
                {   
                    (props.cart.length == 0 && !(user == "yes")) &&(
                        <p style={{textAlign:"center"}} className="error notProduct">Usted no ha añadido productos</p>
                    )
                }

                {   
                    !(user == "yes") && (
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
                    )
                }
                
                </ul>
                {
                     !(user == "yes") && (
                        <p id="total-holder">Subtotal: ${props.total}</p>
                     )
                }
               
                {   
                    (props.cart.length != 0 && !(user == "yes") ) &&(
                        <button id="buy-button" onClick={() => isUser()}>Comprar</button>
                    )
                }
                {
                    user == "yes" && (
                        <p style={{textAlign:"center"}} className="correct">Compra realizada con exito, le enviaremos un mensaje a su correo.<br/> TOTAL A PAGAR: ${props.total}</p> 
                    )

                }
                {
                    user == "no" && (
                        <p className="error">Debe iniciar sesión para proseguir con la compra.</p> 
                    )

                }
                

            
            </div>

        
        </main>
    ) 
}

export default CartSection;





