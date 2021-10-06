
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import SoupAndSalad from "./components/SoupAndSalad";
import Vegetables from "./components/Vegetables";
import Ceviche from "./components/Ceviche";
import MeatandPolutry from "./components/MeatandPolutry";
import Seafood from "./components/Seafood";
import Paella from "./components/Paella";
import SideOrders from "./components/SideOrders";
import Desserts from "./components/Desserts";
import AllHere from "./components/AllHere"
import AllInOne from "./components/AllInOne"
import {Button} from "react-bootstrap"
import { useState } from "react";
function App() {
  const [toggle,setToggle] = useState(false);
  const [props,setProps] = useState({id:"This is usually id ",address:"",hometown:""})
  return (
    <div className="App">
      {/* <Ceviche data={props}/> */}
      {/* <h1 className="Mainmenu">Menu Categories</h1> */}
      <br/><br/><br/>
     
      <AllInOne/>
      {/* <h1> <Button onClick={()=>setToggle(!toggle)}>  Click here to hide and show </Button> </h1>
      <br/><br/><br/>
      {toggle===true?
        <AllHere/>
      :null} */}
     

        {/* <BrowserRouter>
        <div style={{display:"inline-block"}}>
        <Header /> </div>
        <div calssName="sub-data">
        <Route path="/SS">
          <SoupAndSalad data="SS"/>
        </Route>
        <Route path="/VG">
          <Vegetables />
        </Route>
        <Route path="/C">
          <Ceviche />
        </Route>
        <Route path="/MP">
          <MeatandPolutry />
        </Route>
        <Route path="/SF">
          <Seafood />
        </Route>
        <Route path="/P">
          <Paella />
        </Route>
        <Route path="/SO">
          <SideOrders />
        </Route>
        <Route path="/DS">
          <Desserts />
        </Route>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
