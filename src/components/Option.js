import React from 'react';

const Option = (props) => (
  <div>
    { props.optionVal }
    <button
      className="button button--link"
      onClick={ (e) => {
      props.handleDeleteOption(props.optionVal);
    } }>Remove</button>
  </div>
);

export default Option;
