// import React from "react";

export const Button = (props) => {
  return (
    <button className="bttn" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};
