import React from "react";
import { useState, useEffect } from "react";
import questionData from "../questions.json";
import Terrain from "../imgs/terrain.png";

const Quiz = () => {
  const questions = questionData.questions;
  const [questionIterator, setQuestionIterator] = useState(0);
  const [answerArray, addToAnswerArray] = useState([]);

  function logAnswer(answer) {
    addToAnswerArray((prevAnswerArray) => {
      return [...prevAnswerArray, ...answer];
    });
  }

  function questionShift(answer) {
    if (questionIterator + 1 >= questions.length) {
        const finalAnswerArray = [...answerArray, ...answer];

        const houseChoiceData = {
            griffyndor: finalAnswerArray.filter((house) => house === 'griffyndor').length,
            slytherin: finalAnswerArray.filter((house) => house === 'slytherin').length,
            ravenclaw: finalAnswerArray.filter((house) => house === 'ravenclaw').length,
            hufflepuff: finalAnswerArray.filter((house) => house === 'hufflepuff').length,
        } 

        let houseSelection = Object.keys(houseChoiceData).reduce((a, b) => houseChoiceData[a] > houseChoiceData[b] ? a : b);
        console.log("Quiz Over", houseSelection);
        return;
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
            <img src={Terrain} className="question-image" alt="example" />
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
