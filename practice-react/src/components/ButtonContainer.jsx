import React from "react";
import { Button } from "./Button";
import { useState } from "react";

const ButtonContainer = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <header className="App-header">
        <div className="ButtonContainer-header">
          <p>This is a container with the button component</p>
          <Button buttonText={props.buttonText} onClick={handleClick} />
          <p>Button was clicked {count} times!</p>
        </div>
      </header>
    </>
  );
};

export default ButtonContainer;
