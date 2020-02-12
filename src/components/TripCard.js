import React from "react";
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../TripCard.css';

const TripCard = props => {
  const { trip } = props

  return (
    <div className="ui column" style={{padding: '1.5rem'}}>
     
       <div className="ui link cards">
     
      <div className="ui card raised"
        key={trip.id}
        onClick={() => props.handleTripClick(trip)}>
            <div className="ui fluid image" >
              <Link to={`/trip/${trip.id}`}>
              <img alt="oh no!" src={trip.image} style={{height: '200px'}} />
              {/* <img alt="oh no!" src="/images/avatar2/large/elyse.png" /> */}
              </Link>
              </div>
            <div className="content">
          <div className="header">{trip.name}</div>
         <div className="description">{trip.date}</div>
        <div className="trash-div">
          <Icon link name='trash alternate outline'
          onClick={() => props.handleDelete(trip)}  />
        </div>
        </div>
       </div>
       
      </div>
    
    </div>

  );
};

export default TripCard