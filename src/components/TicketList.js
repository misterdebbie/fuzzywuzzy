import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

//child of TicketControl
//parent of Ticket
//display or hide all tickets

/*const mainTicketList = [
  {
    apartment: "303B",
    resident: "Chong",
    request: "Hot water is not hot"
  },
  {
    apartment: "407A",
    resident: "Bradford",
    request: "Ceiling is leaking"
  },
  {
    apartment: "212C",
    resident: "Jones",
    request: "Kitchen faucet is broken"
  }
]*/
//add props
function TicketList(props) {
  return (
    <React.Fragment>
    <hr />
    {props.ticketList.map((ticket, index)=>
      <Ticket
        whenTicketClicked = { props.onTicketSelection }
        names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        id={ticket.id}
        key={ticket.id}/>
    )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
