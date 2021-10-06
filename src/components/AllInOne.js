import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Subcomponent from "./Subcomponent";

const AllInOne = () => {
  const [maincate, setMaincate] = useState([]);
  const [subcate, setSubcate] = useState([]);

  const eventChange = (e,short_name) => {
    // e.preventDefault();
    setSubcate(short_name);
    console.log("value of subcate is " + subcate);

   
  };

  useEffect(() => {
    axios
      .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then((res) => {
        console.log("categories" + res.data);
        setMaincate(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div classNmae="float-container">
      <h1 className="Mainmenu">Menu Categories</h1>
      <ul className="float-child" >
        {maincate.map((value) => (
          <li style={{fontSize:`27px`,marginLeft:"20px"}}
            onClick={(e)=>{eventChange(e,value.short_name)}}>
            {value.name}-({value.short_name})
            {/* =============>>>>>>>>>>>  why onClick={eventChange} is not working on event change when i write e.value.short_name   */}
          </li>
        ))}
      </ul>
     
      <Subcomponent data={subcate}/>
      
      {/* <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>short_name</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {subcate.map((value) => 
            <tr>
              <td>{value.name}</td>
              <td>{value.short_name}</td>
              <td>{value.description}</td>
            </tr>
          )}
        </tbody>
      </table> */}
    </div>
  );
};
export default AllInOne;
