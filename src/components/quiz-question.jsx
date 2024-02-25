import React from 'react';
import { useState, useEffect } from 'react';
import LeftArrow from "../imgs/left-arrow.png"
import RightArrow from "../imgs/right-arrow.png"

const QuizQuestion = ({ questionData }) => {
    const question = questionData;
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);

    useEffect(() => {
        console.log("Answer index: ", currentAnswerIndex)
    }, [currentAnswerIndex])

    function incAnsInt() {
        setCurrentAnswerIndex((prevAnswerIndex) => {
            return prevAnswerIndex + 1;
        })
    }

    function decAnsInt() {
        setCurrentAnswerIndex((prevAnswerIndex) => {
            return prevAnswerIndex - 1;
        })
    }

    function logAnswer() {
        console.log(question.answers[currentAnswerIndex].value);
    }
    
    return (
        <div className="question-container">
            <p className="question-text">{question.question}</p>
            <div className="slideshow-container">
            <div className="slideshow">
                {currentAnswerIndex > 0 ? <div className="left" onClick={decAnsInt}><img src={LeftArrow} alt="" /></div> : <><span className="spacer"></span></>}
                <img src={question.answers[currentAnswerIndex].img} alt="" />
                {currentAnswerIndex < question.answers.length - 1 ? <div className="right" onClick={incAnsInt}><img src={RightArrow} alt="" /></div> : <><span className="spacer"></span></>}
            </div>
            <div className="slider-nav">
                {question.answers.map((answer, i) => {
                    if (currentAnswerIndex === i) {
                        return <div className="dot active"></div>
                    } else {
                    return <div className="dot"></div>
                    }
                })}
            </div>
            </div>
            <div className="answer-text">{question.answers[currentAnswerIndex].content}</div>
            <button className="select" value={question.answers[currentAnswerIndex].value} onClick={logAnswer}>Select</button>
        </div>
    );
}

export default QuizQuestion;
