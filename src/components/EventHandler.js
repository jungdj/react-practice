import React from 'react';

const EventHandler = (props) => {
  function handleClick() {
    alert('Click');
  }
  return (
    <button onClick={handleClick}>Button</button>
  )
}

export default EventHandler;
