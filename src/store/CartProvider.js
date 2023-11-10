

import React, { useState } from "react";

import cartContext from "./cart-context";


const CartProvider =(props)=>{

    const [items,setItems]=useState([]);
    const [total,setTotal]=useState(0)
    const [quantity,setQuant]=useState(0)
    const [token,setToken]=useState('');

    const userIsLoggedIn=!!token;

    const addToCart=(item)=>{
        let p=[...items];
        let t=0;let found=false
        for(let i=0;i<p.length;i++){
            if(p[i].id===item.id){
                
                found=true
            }
            t=Number(t)+Number(p[i].price);
        }
        if(found){
            alert('already added to cart')
                return 
        }
        let q=p.length+1;
        setQuant(q)
        setTotal(Number(t)+Number(item.price))
        setItems([...items,item])
        // console.log(q+'in cartprovider')
    }

    const removeFromCart=(id)=>{
        const p=[...items];

        let k=[];let removed;
        for(let i=0;i<p.length;i++){
            if(p[i].id===id){
                removed=p[i]
                continue;
            }
            k.push(p[i]);
        }
        setItems([...k])
        setTotal(Number(total)-Number(removed.price))
        setQuant(Number(quantity)-Number(1))
    }

    const loginHandler=(token)=>{
        setToken(token)
    }

    const logoutHandler=()=>{
        setToken(null)
    }

    const ctxContext={
        items:items||[],
        total:total,
    quantity:quantity,
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
        addToCart:addToCart,
        removeFromCart:removeFromCart
    }
    return <cartContext.Provider value={ctxContext}>
        {props.children}
    </cartContext.Provider>


}

export default CartProvider