import React, { useState, useRef } from "react";
//import Chevron from "../Components/Chevron";
import Recovered from "../resources/cheve.png";

const Accordion = props => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion-icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "decoy" : "");
    setHeightState(
      setActive === "decoy" ? "0px" : `${content.current.scrollHeight}px`
    );
    console.log(content.current.scrollHeight);
    setRotateState(
      setActive === "decoy" ? "accordion-icon" : "accordion-icon rotate"
    );
  }
  return (
    <div className="accordion-section">
      <button
        className={`accordion-button ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="accordion-title">{props.title}</p>
        <div className="guide-image">
          <img
            className={` ${setRotate}`}
            src={Recovered}
            alt="cheveron right"
          />
        </div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion-content"
      >
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
