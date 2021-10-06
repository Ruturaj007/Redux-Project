import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom";
import axios from "axios";
const Header=()=>{
    const[products,setProducts]=useState([]);

    useEffect(() => {
        axios
          .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
          .then((response) => {
           
            setProducts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return(
        <div className="mainDiv">
            {products.map((value)=>{
                return(
           
            <ul ><h4>
                <h3>
                <li>
                {(() => {
        switch (value.id) {
          case 82:   return  (<Link to="/SS">
          {value.name}-({value.short_name})</Link>);
          case 89:   return  (<Link to="/VG">
          {value.name}-({value.short_name})</Link>);
          case 84:   return  (<Link to="/C">
          {value.name}-({value.short_name})</Link>);
          case 85:   return  (<Link to="/MP">
          {value.name}-({value.short_name})</Link>);
          case 87:   return  (<Link to="/SF">
          {value.name}-({value.short_name})</Link>);
          case 88:   return  (<Link to="/P">
          {value.name}-({value.short_name})</Link>);
          case 97:   return  (<Link to="/SO">
          {value.name}-({value.short_name})</Link>);
          case 98:   return  (<Link to="/DS">
          {value.name}-({value.short_name})</Link>);
         
          default:      return "#FFFFFF";
        }
      })()}
                    {/* {if(value.id===82)
                     <Link to="/SS">
                     {value.name}-({value.short_name})</Link>
                     else if (value.id===89) {
                         <Link to="/VG">
                         {value.name}-({value.short_name})</Link>
                     else if (value.id===84) {
                            <Link to="/C">
                            {value.name}-({value.short_name})</Link>
                            else if (value.id===89) {
                                <Link to="/VG">
                                {value.name}-({value.short_name})</Link>
                                else if (value.id===89) {
                                    <Link to="/VG">
                                    {value.name}-({value.short_name})</Link>
                                    else if (value.id===89) {
                                        <Link to="/VG">
                                        {value.name}-({value.short_name})</Link>
                                        else if (value.id===89) {
                                            <Link to="/VG">
                                            {value.name}-({value.short_name})</Link>
                                            else  (value.id===89) {
                                                <Link to="/VG">
                                                {value.name}-({value.short_name})</Link> 
                     } */}

                     
                     </li>
            {/* <Link to="SS">
                {value.name}-({value.short_name})
                {console.log(value.id)}
            </Link> </li> */}
            {/* <li>
            <Link to="/Veggies">
                Vegetables-(VG)
            </Link></li><li>
            <Link to="/Ceviche">
                Ceviche-(C)
            </Link></li>
            <li>
            <Link to="/MeatandP">
                Meat and Polutry-(MP)
            </Link> </li>
            <li>
            <Link to="/Seafood">
                Seafood-(SF)
            </Link></li>
            <li>
            <Link to="/Paella">
                Paella-(P)
            </Link></li>
            <li>
            <Link to="/Sideorders">
            Side Orders-(SO)
            </Link></li><li>
            <Link to="/Desserts">
            Desserts-(DS)
            </Link></li> */}
           </h3></h4> </ul>
            )})}
        </div>
    )
}
export default Header