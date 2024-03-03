import React from 'react';
import { useState, useEffect } from 'react';
import LeftArrow from "../imgs/left-arrow.png"
import RightArrow from "../imgs/right-arrow.png"

const QuizQuestion = ({ questionData, questionShift, currentQueston }) => {
    const question = questionData;
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(currentQueston);

    useEffect(() => {
        console.log("Answer index: ", currentAnswerIndex)
        console.log(question.answers[currentAnswerIndex])
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

    function resetAnswerIterator() {
        setCurrentAnswerIndex((prevAnswerIndex) => {
            return prevAnswerIndex - prevAnswerIndex;
        })
    }

    
    function endGame(answer) {
        resetAnswerIterator();
         questionShift(answer);
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
            <button className="select" onClick={() => endGame(question.answers[currentAnswerIndex].value)}>Select</button>
        </div>
    );
}

export default QuizQuestion;
