import React from "react"

const Ceviche=(props)=>{
    return(<div>
        <h1> ID is == {props.data.id}
       <br/>Address is == {props.data.address}<br/> Hometown is == {props.data.hometown}</h1>
    </div>)
    
}
export default Ceviche