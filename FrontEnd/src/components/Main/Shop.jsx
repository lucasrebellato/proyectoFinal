import react from 'react'
import '../../assets/styles/page.css'
import React, { useEffect, useState } from "react";
import CoffeesSection from '../Shop/Coffees';
import DessertsSection from '../Shop/Desserts';
import CartSection from '../Shop/Cart';
import Details from '../Shop/Details';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Shop = () =>{
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [details, setDetails] = useState("")

    const addToCart = (product) => {
        
        setTotal(total + product.price)
        let index = cart.indexOf(product)
        
        if(index != -1){
            cart[index].quantity+=1;
            setCart(cart);
        }else{
            setCart(cart.concat(product));
        }
    }

    const deleteFromCart = (product) => {
        
        setTotal(total - product.price)
        let index = cart.indexOf(product);
        if(cart[index].quantity>1){
            cart[index].quantity--;
        }else{
            cart.splice(index,1);
        }
        setCart(cart)
    }

    const detailsOf = (product) => {    
        setDetails(product)
    }


    return (
        <main id="shop">

            <Router> 

                <Switch>

                    <Route exact path="/Tienda">
                        
                        <CoffeesSection addToCart={addToCart} details={detailsOf}/>
                        
                        <DessertsSection addToCart={addToCart} details={detailsOf}/>
                        { cart.length != 0 &&(
                        <Link to= "/Tienda/Carrito" id="go-shop" className="fa fa-shopping-cart">...tiene {cart.length} producto/os añadido/os</Link>
                        )
                    }
                    </Route>
                    
                    <Route path="/Tienda/Carrito">
                        <CartSection cart={cart} delete={deleteFromCart} total={total}/>
                    </Route>   

                    <Route path="/Tienda/Detalles">
                        <Details product={details}/>
                    </Route>        
            
                </Switch>

            </Router>
        </main>
    ) 
}

export default Shop;












