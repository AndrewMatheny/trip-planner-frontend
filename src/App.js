import React from 'react';
import SigninContainer from './SigninContainer';

// import ButtonExampleButton from './Btn.js' //Semantic UI button
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  // getTrips = () => {
  //   fetch(`localhost`)
  // }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <TripContainer /> */}
        <SigninContainer />
      </div>
    );
  }
}

export default App;