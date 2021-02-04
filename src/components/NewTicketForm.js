import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import Reusable from "./Reusable";

//child of TicketControl
//display or hide this form

//event handler, onSubmit
//triggers handleNewTicketFormSubmission function


function NewTicketForm(props){
  function handleNewTicketFormSubmission(event){
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.issue.value);
  }

//event handler > formSubmissionHandler
// invokes function > handleNewTicketFormSubmission
return(
  <React.Fragment>
    <Reusable
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText="Send request" />
    </React.Fragment>
);
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewTicketForm;
