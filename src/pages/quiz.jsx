import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionData from "../questions.json";
import QuizQuestion from "../components/quiz-question";
import SlideQuestion from "../components/slide-question";
import Logo from "../imgs/ww-logo.png"

const Quiz = () => {
  const questions = questionData;
  const [questionIterator, setQuestionIterator] = useState(0);
  const [answerArray, addToAnswerArray] = useState([]);
  const navigate = useNavigate();

  function logAnswer(answer) {
    console.log(answer)
    addToAnswerArray((prevAnswerArray) => {
      return [...prevAnswerArray, ...answer];
    });
  }

  function questionShift(answer) {
    // if (questionIterator + 1 >= questions.length) {
    if (questionIterator >= 10) {
      const finalAnswerArray = [...answerArray, ...answer];

      const houseChoiceData = {
        gryffindor: finalAnswerArray.filter((house) => house === "gryffindor")
          .length,
        slytherin: finalAnswerArray.filter((house) => house === "slytherin")
          .length,
        ravenclaw: finalAnswerArray.filter((house) => house === "ravenclaw")
          .length,
        hufflepuff: finalAnswerArray.filter((house) => house === "hufflepuff")
          .length,
      };

      let houseSelection = Object.keys(houseChoiceData).reduce((a, b) =>
        houseChoiceData[a] > houseChoiceData[b] ? a : b
      );
      localStorage.setItem("hogwartsHouseName", houseSelection);
      console.log("Quiz Over", houseSelection);
      navigate("/poem");
    } else {
      logAnswer(answer);
      setQuestionIterator((prevQuestion) => prevQuestion + 1);
    }
  }

  let currentQuestion = questions[questionIterator];

  let questionType;

  if (currentQuestion.type === "slide") {
    questionType = <SlideQuestion questionData={currentQuestion} questionShift={questionShift} currentQueston={questionIterator}/>
  } else if (currentQuestion.type === "normal") {
    questionType = <QuizQuestion questionData={currentQuestion} questionShift={questionShift} currentQueston={questionIterator}/>
  }

  return (
    <div className="page">
      <div className="page-content quiz-content-fix">
        <img src={Logo} alt="logo" className="quiz-logo"/>
        {questionType}
      </div>
    </div>
  );
};

export default Quiz;
