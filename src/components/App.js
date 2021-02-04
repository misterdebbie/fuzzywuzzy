import '../App.css';
import React from 'react';
import Header from './Header';
import TicketControl from './TicketControl';

//function components
//cannot change state
//static

//App is main 
function App() {
  return (
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;
