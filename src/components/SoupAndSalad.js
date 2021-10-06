import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
const SoupAndSalad=(props)=>{
    const[products,setProducts]=useState([]);
    useEffect(() => {
        axios
          .get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${props.data}`)
          .then((response) => {
            console.log("The value of Response is " + response.data);
            setProducts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return(<div>
        <h1>{products}</h1>
    </div>)
    
}
export default SoupAndSalad