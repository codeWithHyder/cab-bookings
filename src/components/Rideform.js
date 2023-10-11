import data from '../utility/data';
import { useState } from 'react';

function Rideform(){
    const[dat, setDat] = useState("");

    function handleChange(e){
        let val = document.getElementById("pickup");
        // data.filter((item, index)=> val.value === item[index].Pickup).map(filteredArray=>(val.value=filteredArray[index].Pickup)) 
        // return (item.name);

        for(let i =0; i<data.length; i++){
            if(val.value=== data[i].Pickup){
                setDat(e.target.value);
            }
        }
             
    }
    console.log(dat);
    return(
        <div className="form-container">
            <h1>Take a Ride of your choice</h1>
            <form className="frm">
                <input type="text" name="pickup" id="pickup" onChange={handleChange} value={dat} multiple   placeholder="Enter Pick Location"/>
                <input type="text" name= "des-location"  placeholder="Enter Destination"/>
                <button className="btn" type="button">Request Now</button>
            </form>
        </div>
    )
}

export default Rideform;