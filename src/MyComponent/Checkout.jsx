import React from 'react';
import { useParams } from "react-router-dom";
import Data from './MOCK_DATA.json';
import "./checkout.css";

export const Checkout=()=> {
  
  let { id } = useParams();

  return(
    <div className='container main'>
      <div className='imagediv'>
        <img className='imagetag' src={Data[id-1].image} alt="shoeimage"/>
      </div>
      <div className='textdiv'>
        <div className='part1'>
          <h1>{Data[id-1].name}</h1>
          <h6 id="shoestar1">★{Data[id-1].star}.0</h6>
        </div>
        <p className='texting'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat doloribus nihil eveniet velit tenetur, molestiae officia vero cum animi autem voluptatibus natus tempore ullam aspernatur sunt harum quas. Eveniet, velit?</p>
        <h4 className='col part2'>₹{Data[id-1].price}.00</h4>
        <h2 className='col part3'>Delivery By : {Data[id-1].time}</h2>
        <div className='col part4'>
          <h5><b>Qty</b></h5>
          <div><button className='partbtn'>-</button><input className='parttxt' type="text" placeholder='1'/><button className='partbtn'>+</button></div>  
        </div><br/>
        <button className='cartbtn' type="submit">Add To Cart</button>
      </div>
    </div>
  )
}


