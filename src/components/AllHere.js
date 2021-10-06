import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AllHere = () => {
  const [maincate, setMaincate] = useState([]);
  const [subcate, setSubcate] = useState([]);
  const [sn,setSn] = useState("");
  const eventChange = (e, short_name) => {
    // e.preventDefault();
    setSn(short_name);
    console.log("value of subcate is "+short_name);

    axios
      .get(
        `http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`
      )
      .then((response) => {
        setSubcate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    <div className="float-container">
      <div className="float-child">
      <h1 className="Mainmenu">Menu Categories</h1>
      <ul>
        {maincate.map((value) => (
          <li onClick={(e) =>{eventChange(e, value.short_name)}}>
            {value.name}-({value.short_name})
          </li>
        ))}
      </ul>
      </div>
      <div className="float-child">
        {console.log("value of short_name on the rocks"+sn)}
        Items In Category : ({sn})
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {subcate.map((value) => 
            <tr>
              <td>{value.name}</td>
              <td>{value.description}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};
export default AllHere


// import React,{ useState,useEffect } from "react"
// import axios from "axios"

// const SoupAndSalad=()=>{
//     return(<div>
//         SoupAndSalad
//     </div>)
// }

// const Desserts=()=>{
//     return(<div>
//         Desserts
//     </div>)
// }

// const SideOrder=()=>{
//     return(<div>
//         SideOrder
//     </div>)
// }

// const Paella=()=>{
//     return(<div>
// Paella
//     </div>)}

// const Seafood=()=>{
//     return(<div>
// Seafood
//     </div>)}

// const MeatandPolutry=()=>{
//     return(<div>
// MeatandPolutry
//     </div>)}

// const Ceviche=()=>{
//     return(<div>
// Ceviche
//     </div>)}

// const Vegetables=()=>{
//     return(<div>
// Vegetables
//     </div>)}

// const AllHere=()=>{
//     const [products, setProducts] = useState([]);
//     const[cata,setCata]=useState([]);
//     const[dataid,setDataid]=useState({
//         id:"",
//         name:"",
//         short_name:"",
//         special_instructions:""
//     });
//     const[subcata,setSubcata]=useState([]);
//     const[final,setFinal]=useState([]);
    
//     const eventHandle=(e,short_name,id)=>{
//           e.preventDefault(); 
//           console.log("You are inside eventhandle"+short_name)
//         // let idsub=e.target.id
//         // console.log("current id is "+id)
//     //    setFinal(short_name,id);
//     //     console.log("current name is "+short_name);

//         axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${short_name}`)
//                .then((response)=>{
//                    console.log("This is to show sub-categoary "+response.data);
//                    setSubcata(response.data);
//                })
//                .catch((error)=>{
//                    console.log(error)
//                })
         
//     }
    
// // const axios = require('axios');



//     useEffect(() => {
        
//         axios
//           .get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=`)
//           .then((response) => {
//             console.log("The value of Response is " + response.data);
//             setProducts(response.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//           axios.get("https://stream-restaurant-menu-svc.herokuapp.com/category").then((res)=>{
//               console.log("categories"+res.data);setCata(res.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });

//         //   const sendGetRequest = async (props) => {
//         //     try {
//         //         const resp = await 
//         //         axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${dataid}`);
//         //         console.log(resp.data);
//         //         setFinal(resp.data);
        
//         //     } catch (err) {
//         //         // Handle Error Here
//         //         console.error(err);
//         //     }
//         // };
//     },[]);
//     //       axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${dataid.id}`)
//     //       .then((response)=>{
//     //           console.log("This is to show sub-categoary "+response.data);
//     //           setSubcata(response.data);
//     //       })
//     //       .catch((error)=>{
//     //           console.log(error)
//     //       })
//     //   }, []);

//     // const sendGetRequest = async (props) => {
//     //     try {
//     //         const resp = await 
//     //         axios.get(`http://stream-restaurant-menu-svc.herokuapp.com/item?category=${props.id}`);
//     //              console.log(resp.data);
//     //              setSubcata(resp.data);
        
//     //          } catch (err) {
//     //              // Handle Error Here
//     //              console.error(err);
//     //          }
//     //      };
//     return(<div>
//          <h1 className="Mainmenu">Menu Categories</h1>
         
//         {cata.map((value,id)=> 
//         // <div className="sub-data">
//         <ul key={id}><h4>
//                 <h3>
//                  {/* <li onClick={()=>setDataid({id:value.id,name:value.name,short_name:value.short_name})}> {value.name}-({value.short_name}) </li>   
//                  {console.log(dataid.id)} */}
//                  <li onClick={(e)=>{eventHandle(e,value.short_name,value.id)}}>{value.name}-({value.short_name})</li> 
                
//                 </h3></h4></ul>
//         )}
//         {/* {sendGetRequest(dataid)} */}
        
//         <table>
//             <thead>
//                     <tr>
                       
//                         <td>Name</td>
//                         <td>short_name</td>
//                         <td>description</td>
//                     </tr>
//                     </thead>
//                     <tbody>
//                  {subcata.map((value)=> 
                    
//                      <tr>
                       
//                         <td>{value.name}</td>
//                         <td>{value.short_name}</td>
//                         <td>{value.description}</td>
//                     </tr> 
//                  )} 
//             </tbody>
//         </table>
//         {/* <button onClick={()=>sendGetRequest(dataid)}> Click here for data </button>
//         <table>
//             <tbody>
//                 {dataid.map((value)=>
//                     <tr>
//                         <td>{value.id}</td>
//                         <td>{value.name}</td>
//                         <td>{value.short_name}</td>
//                     </tr>
//                 )}
//             </tbody>
//         </table> */}
// </div>)}

// export default AllHere