import React from 'react';
import PropTypes from 'prop-types';

//child of TicketList

//inline style with styke object demo

/*function Ticket(props) {
  const cssDemo = {
    backgroundColor: 'pink'
  }
  return (
    <div style={cssDemo}>
      <h3>{props.location} - {props.names}</h3>
      <p>{props.issue}</p>
      <hr/>
    </div>
  );
}*/

function Ticket(props) {
  return (
    <React.Fragment>
    <div onClick = {() => props.whenTicketClicked(props.id)}>
     { /* We add a div with an onClick function */}
     <h3>{props.location} - {props.names}</h3>
     <p><em>{props.issue}</em></p>
     <hr/>
   </div>
    </React.Fragment>
  );
}

/*Ticket.propTypes = {
  apartment: PropTypes.string,
  resident: PropTypes.string,
  request: PropTypes.string
};*/

export default Ticket;
