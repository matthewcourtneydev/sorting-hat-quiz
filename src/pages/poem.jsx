import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import poemData from "../poem.json";

const Poem = () => {
  const poem = poemData[0].poem;
  const [poemSection, adjPoemSection] = useState(0);
  const currentPoemLine = poem[poemSection];
  const navigate = useNavigate();

  const headerStyle = {
    color: currentPoemLine.color,
  };

  function incPoemSection() {
    adjPoemSection((prevSection) => {
      return prevSection + 1;
    });
  }

  useEffect(() => {
    if (poemSection < 3) {
      setTimeout(() => {
        console.log("animation done");
        incPoemSection();
      }, 15000);
    } else {
      setTimeout(() => {
        navigate("/house");
      }, 15000);
    }
  }, [poemSection]);

  return (
    <div className="page">
      <div className="page-content poem">
        <p key={poemSection} className="poem-first first-animation">
          {currentPoemLine.lineOne}
        </p>
        <h1
          key={poemSection}
          className="poem-house-name house-animation"
          style={headerStyle}
        >
          {currentPoemLine.housename}
        </h1>
        <p key={poemSection} className="second-animation">
          {currentPoemLine.lineTwo}
        </p>
        <p key={poemSection} className="third-animation">
          {currentPoemLine.lineThree}
        </p>
        <p key={poemSection} className="fourth-animation">
          {currentPoemLine.lineFour}
        </p>
      </div>
    </div>
  );
};

export default Poem;
