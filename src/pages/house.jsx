import React from "react";
import { useNavigate } from "react-router-dom";

const House = () => {
  const housename = localStorage.getItem("hogwartsHouseName");
  const navigate = useNavigate();

  function restartQuiz() {
    localStorage.removeItem("hogwartsHouseName");
    navigate("/")
  }

  return (
    <div className="page">
      <div className={`page-content ${housename}`}>
        <h1>{housename}</h1>
        <button onClick={restartQuiz}>Retake Quiz</button>
      </div>
    </div>
  );
};

export default House;
