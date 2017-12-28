import React from 'react';

const Option = (props) => (
  <div>
    { props.optionVal }
    <button onClick={ (e) => {
      props.handleDeleteOption(props.optionVal);
    } }>X</button>
  </div>
);

export default Option;
