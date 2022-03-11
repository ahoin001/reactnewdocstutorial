import React from "react";

export const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
