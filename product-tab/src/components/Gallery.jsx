import { useState } from "react";
import { sculptureList } from "../sculptureData";
const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleClickNext = () => {
    setIndex(index + 1);
  };

  const handleSshowMore = () => {
    setShowDetails(!showDetails);
  };

  let currentSculpture = sculptureList[index];

  return (
    <div style={{border:'solid 2px red'}}>
      <button onClick={handleClickNext} style={{marginTop:'40px'}}>Next</button>
      <h2>
        <i>{currentSculpture.name} </i>
        by {currentSculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleSshowMore} style={{marginBottom:'40px'}}>
        {showDetails ? "Hide" : "Show"} details
      </button>
      {showDetails && <p>{currentSculpture.description}</p>}
      <img src={currentSculpture.url} alt={currentSculpture.alt} />
    </div>
  );
};

export default Gallery;
