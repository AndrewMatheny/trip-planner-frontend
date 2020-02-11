import React from "react";
// import { Card } from 'semantic-ui-react'

const TripCard = props => {
  const { trip } = props;

  return (
    <>
    
    <div className="ui column" style={{padding: '1.5rem'}} >
      <div
        className="ui card raised"
        key={trip.id}
        onClick={() => props.handleTripClick(trip)}
        // onClick={() => props.handleClick(trip)}
      >
        <div className="ui fluid image" >
          <img alt="oh no!" src={trip.image} style={{height: '200px'}} />
          {/* <img alt="oh no!" src="/images/avatar2/large/elyse.png" /> */}
        </div>
        <div className="content">
          <div className="header">{trip.name}</div>
          <div className="description">{trip.date}</div>
        </div>
      </div>
    </div>

    </>
  );

};



export default TripCard; 
