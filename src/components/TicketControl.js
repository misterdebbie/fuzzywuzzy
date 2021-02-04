import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';

//parent of TicketList and NewTicketForm
//this holds state
//class based component

//callbacks to pass data from child to parent
//unidirectional data flow, parent to child
//callbacks allow data from child to flow up to parent
//define method is state holding parent component
//pass method to child as prop
//add method to a functuon in child as a callback
//function is executed in child, method is invoked in parent, access to data

//local state > display || hide form
//shared state > display all requests
//display single ticket request

//set local state with this.state object
//formVisible > boolean to conditionally display or hide request form
//mainTicketList > empty array, holds all submitted tickets
//selectedTicket > single ticket to view detail
//edit > update a sinlge ticket detail

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      mainTicketList: [],
      selectedTicket: null,
      edit: false
    };
    //this.handleClick = this.handleClick.bind(this);
    //no need to bind bc of arrow functions
    //arrow functions bind functions to their lexical scope
    //callbacks keep their context in the DOM

    //mainTicketList is initialized as an empty array
    //pass down as a prop, ticketList

  }
//setState() method >
//takes an object as an arg
//{key: value}
//{formVisible: !prevState.formVisible}
//setState() can also take 2 args
//setState(state, props) => stateChange
//pass an arrow function
//current state and props as args

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisible: false,
        selectedTicket: null,
        edit: false
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  //pass current state of formVisible (boolean) to prevState
  //reset state to be !prevState.formVisible (opposite of old state)
  //intended behavior is to toggle back and forth

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisible: false });
  }
//newTicket is param
//init new var newMainTicketList as state of mainTicketList with newTicket added
//set state as updated with new ticket
//set state of page as false, form is hidden, display submitted tickets

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

//pass handleAddingNewTicketToList method to child as a prop
//prop is onNewTicketCreation
//onNewTicketCreation is a callback

handleDeletingTicket = (id) => {
  const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
  this.setState({
    mainTicketList: newMainTicketList,
    selectedTicket: null
  });
}

handleEditClick = () => {
  console.log("handleEditClick invoked");
  this.setState({edit: true});
}

handleEditingTicketInList = (ticketToEdit) => {
  const editedMainTicketList = this.state.mainTicketList
    .filter(ticket => ticket.id !== this.state.selectedTicket.id)
    .concat(ticketToEdit);
  this.setState({
      mainTicketList: editedMainTicketList,
      edit: false,
      selectedTicket: null
    });
}

//conditonal rendering
// if this.state is edit > render the <EditTicketForm /> component
// if this.state is selectedTicket > render <TicketDetail /> component
// if this.state is formVisible > render the <NewTicketForm /> component
// else render <TicketList /> component

  render(){
    let presentState = null;
    let buttonText = null;
    if (this.state.edit) {
      presentState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    }
    else if (this.state.selectedTicket != null) {
      presentState = <TicketDetail ticket = {this.state.selectedTicket}
      onClickingDelete = {this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick}
      />
      buttonText = "Return to Ticket List";
    }
    else if (this.state.formVisible) {
      presentState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "View all requests";
    }
    else {
      presentState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add your request";
    }
    return (
      <React.Fragment>
        {presentState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
//event handler attached to button
// <button onClick={this.handleClick}>{buttonText}</button>
// onClick={this.handleClick}
// invoke this function, handleClick(), when the button is clicked
/* handleClick = () => {
  if (this.state.selectedTicket != null) {
    this.setState({
      formVisible: false,
      selectedTicket: null,
      edit: false
    });
  } else {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible,
    }));
  }
}*/

export default TicketControl;
