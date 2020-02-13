import React from "react";
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../TripCard.css'

const TripCard = props => {
  const { trip } = props

  return (
    <div className="ui column" style={{padding: '1.5rem'}}>
       <div className="ui link cards">
          <div className="ui card raised" style={{opacity: '0.85'}}
            key={trip.id}
            onClick={() => props.handleTripClick(trip)}>
              <div className="ui fluid image" >
              <Link to={`/trip/${trip.id}`}>
              <img alt="oh no!" src={trip.image} style={{height: '200px', borderRadius: '4px'}} />
              </Link>
              </div>
              <div className="content" style={{ opacity: '1' }}>
                <div className="header">{trip.name}</div>
                <div className="description">{trip.date}</div>
                <div className="trash-div">
                  <Icon link name='trash alternate outline' size='large'
                  onClick={() => props.handleDelete(trip)}  />
                </div>
              </div>
           </div>
       </div>
    </div>

  );
};

export default TripCard