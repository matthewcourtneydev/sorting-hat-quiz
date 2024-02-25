import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionData from "../questions.json";

const Quiz = () => {
  const questions = questionData;
  const [questionIterator, setQuestionIterator] = useState(0);
  const [answerArray, addToAnswerArray] = useState([]);
  const navigate = useNavigate();

  function logAnswer(answer) {
    addToAnswerArray((prevAnswerArray) => {
      return [...prevAnswerArray, ...answer];
    });
  }

  function questionShift(answer) {
    // if (questionIterator + 1 >= questions.length) {
        if (questionIterator >=3) {
        const finalAnswerArray = [...answerArray, ...answer];

        const houseChoiceData = {
            gryffindor: finalAnswerArray.filter((house) => house === 'gryffindor').length,
            slytherin: finalAnswerArray.filter((house) => house === 'slytherin').length,
            ravenclaw: finalAnswerArray.filter((house) => house === 'ravenclaw').length,
            hufflepuff: finalAnswerArray.filter((house) => house === 'hufflepuff').length,
        } 

        let houseSelection = Object.keys(houseChoiceData).reduce((a, b) => houseChoiceData[a] > houseChoiceData[b] ? a : b);
        localStorage.setItem("hogwartsHouseName", houseSelection)
        console.log("Quiz Over", houseSelection);
        navigate("/poem")
      } else {
        logAnswer(answer);
        setQuestionIterator((prevQuestion) => prevQuestion + 1);
      }
  }

  let currentQuestion = questions[questionIterator];

  return (
    <div className="page">
      <div className="page-content">
        <div className="quiz-content">
          <div className="image">
            {/* {
                currentQuestion.image.map((img) => {
                    return require(img)
                })
            } */}
            <img src={currentQuestion.image} className="question-image" alt="example" />
          </div>
          <h1 className="question">{currentQuestion.question}</h1>
          <div className="answers">
            {currentQuestion.answers.map((answer) => {
              return (
                <button
                  className="answer-btn"
                  val={answer.value}
                  onClick={() => questionShift(answer.value)}
                >
                  {answer.content}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
