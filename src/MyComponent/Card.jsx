import React from 'react';
import { Link } from 'react-router-dom';
import "./card.css";

function Card(props) {
  return(
    <div className="col-md-4">

      <Link to={{pathname: `/checkout/${props.id}/${props.name}`}}>
         <div className="card mb-4 shadow-sm">
           <img id="shoeimg" src={props.image} className="card-img-top" width="240px" height="150px" alt=""></img>
           <div className="card-body">
               <div className="justify-content-between align-items-center">
                 <hr></hr>
                 <div className="row">
                   <div className="col"><h5 id="shoename" className="card-img-header">{props.name}</h5><br></br></div>
                   <div className="col"><h6 id="shoestar">★{props.star}.0</h6></div>
                 </div>
                 <div className="row">
                   <div className="col"><h5 id="shoeprice" className="card-img-sidebar">₹{props.price}.00</h5><br></br></div>
                 </div>
                 <div className="row">
                   <div className="col"><h6 id="shoetime" className="card-img-footer text-muted">Delivery by: {props.time}</h6></div>
                 </div>
               </div>
           </div>
         </div>
     </Link>
    </div>
  )
}

export default Card;
