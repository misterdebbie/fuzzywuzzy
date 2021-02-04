import React from "react";
import PropTypes from "prop-types";

function Reusable(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Resident name' />
          <br/>
          <br/>
        <input
          type='text'
          name='location'
          placeholder='Unit number' />
          <br/>
          <br/>
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
          <br/>
          <br/>
        <button type='submit'>{props.buttonText}</button>
        <br/>
        <br/>
      </form>
    </React.Fragment>
  );
}

Reusable.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default Reusable;
