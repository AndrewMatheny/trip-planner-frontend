import React from "react";
// import { Card } from 'semantic-ui-react'

const TripCard = props => {
  const { trip } = props;
  console.log(props)

  return (
    <>

    <div className="ui column">
      <div
        className="ui card"
        key={trip.id}
        // onClick={() => props.handleClick(trip)}
      >
        <div className="image">
          <img alt="oh no!" src={trip.image} />
          {/* <img alt="oh no!" src="/images/avatar2/large/elyse.png" /> */}
        </div>
        <div className="content">
          <div className="header">
            {trip.name}
          </div>

        </div>
      </div>
    </div>

    </>
  );

};

export default TripCard;
