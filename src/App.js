import React from 'react';

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';

import TripIndex from './TripIndex';

class App extends React.Component {

  // getTrips = () => {
  //   fetch(`localhost`)
  // }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <TripIndex />
      </div>
    );
  }
}

export default App;