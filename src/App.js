import React from "react";
import "./App.css";
import { useState } from "react";
import { sculptureList } from "./data.jsx";
const App = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handlePreClick() {
    setIndex(index - 1);
  }

  function handleNextClick() {
    if (index === sculptureList.length - 1) {
      return;
    }
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <section className="main">
        <div className="btn">
        <button onClick={handlePreClick} disabled={index === 0}>
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={index === sculptureList.length - 1}
        >
          Next
        </button>
        </div>
        <h2>{sculpture.name}</h2>
        <p>{sculpture.artist}</p>

        <img src={sculpture.url} alt={sculpture.alternative} className="image" />
        <button onClick={handleMoreClick}>{showMore ? "Hide" : "Show More"}</button>
        {showMore && <p>{sculpture.description}</p>}
      </section>
    </div>
  );
};

export default App;
