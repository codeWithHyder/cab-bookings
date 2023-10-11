
import data from "../utility/data";
import { useState } from "react";
function Book() {

     const[item, setItem] = useState(data);
  return(
    <div className="book-form">
        {/* <h1>Details of Cabs</h1> */}
        {data.map((value) =>(
            // console.log(value.name)
            <div className="cab-details">
                <h3 key={value.id}>Name: {value.name}</h3>
                <img src={value.img} alt="cab"/>
                <p>Price: Rs {value.price}</p>
                <p>Type: {value.type}</p>
                <p>Pick Up: {value.pickup}</p>
                <p>Destination: {value.destination}</p>
                <p>Distance: {value.distance} KM</p>
                <button  className="btn-book" type="button">Book</button>
            </div>
        ))}
    </div>
  )
}

export default Book;