import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setMaxListeners } from "stream";
import PatronusQuestions from "../patronus-quiz.json";
import PatronusResults from "../patronus.json"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";


const PatronusQuiz = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [patronusResult, setPatronusResult] = useState();
  const navigate = useNavigate();

  let questions = PatronusQuestions[currentQuestionIndex];
  let patronusArray = [...PatronusResults.patronusArray]

  function updateAnswerArray(e) {
    setAnswersArray((prev) => [...prev, e.target.innerText]);
  }

  function handleAnswer(e) {
    updateAnswerArray(e)
    if (currentQuestionIndex < 4) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }

  useEffect(() => {
    console.log(answersArray)
    if (answersArray.length === 5) {
      console.log(answersArray)
      let usersPatronus = patronusArray.filter((patronus) => {
        if (
          patronus.firstQuestion.includes(answersArray[0])
          && patronus.secondQuestion.includes(answersArray[1])
          && patronus.thirdQuestion.includes(answersArray[2])
          && patronus.fourthQuestion.includes(answersArray[3])
          && patronus.fifthQuestion.includes(answersArray[4])
        ) {
          return patronus;
        }
      })
      setPatronusResult((prev) => usersPatronus[0].name);
      setIsQuizFinished((prev) => !prev);
    }
  }, [answersArray]);

  useEffect(() => {
    if (patronusResult) {
      debugger
      console.log(patronusResult);
      props.setUserInfo((prev) => {
        return {
          ...prev,
          patronus: patronusResult
        }
      });
      console.log(props.userInfo)
      debugger;
      localStorage.setItem("mdc_sorting_hat_user_info", JSON.stringify({...props.userInfo, patronus: patronusResult}))
    }
  }, [patronusResult])

  return (
    <div className="page patronus-quiz">
      {!isQuizFinished && (
        <div className="patronus-container">
          {questions[Math.floor(Math.random() * 5)].map((choice) => {
            return (
              <h2 className="choice" onClick={(e) => handleAnswer(e)}>
                {choice}
              </h2>
            );
          })}
        </div>
      )}
      {isQuizFinished && patronusResult && (
        <div className="patronus-container-non-flex">
          <p className="lead-in-text-patronus">Your Patronus is a...</p>
          <h2>{patronusResult}</h2>
          <p className="share">SHARE</p>
          <div className="link-container">
            <a href={"#"}><FaFacebookF /></a>
            <a href={"#"}><FaXTwitter /></a>
            <a href={"#"}><MdMailOutline /></a>
          </div>
          <button className="return-to-profile" onClick={() => navigate("/house")}><span></span>
            RETURN TO MY PROFILE
          </button>
        </div>
      )}
    </div>
  );
};

export default PatronusQuiz;
