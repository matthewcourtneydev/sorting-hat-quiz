import React from 'react';
import { useState, useEffect } from 'react';
import LeftArrow from "../imgs/left-arrow.png"
import RightArrow from "../imgs/right-arrow.png"

const SlideQuestion = ({ questionData, questionShift, currentQueston }) => {
    const question = questionData;
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState(currentQueston);
    const containImg = questionData.mainImg;

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

    function resetAnswerIterator() {
        setCurrentAnswerIndex((prevAnswerIndex) => {
            return prevAnswerIndex - prevAnswerIndex;
        })
    }

    
    function endGame(answer) {
        resetAnswerIterator();
         questionShift(answer);
    }

    let BackgroundStyles;
    if (question.answersBgColor) {
        BackgroundStyles = {
            backgroundColor: question.answersBgColor
        }
    } else if (question.bgImg) {
        BackgroundStyles = {
            backgroundImage: `url(${question.bgImg})`,
            backgroundSize: "contain"
        }
    }

    return (
        <div className="question-container">
            <p className="question-text">{question.question}</p>
            <div className="slideshow-container">
            <div className="slideshow">
                {currentAnswerIndex > 0 ? <div className="left" onClick={decAnsInt}><img src={LeftArrow} alt="" /></div> : <><span className="spacer"></span></>}
                <div className="image-container">
                <img src={require(containImg)} alt="" className="front-img"/>
                <img src={require(question.answers[currentAnswerIndex].img)} className="back-img" alt=""/>
                {question.bgImg ? <img className="background-image-question" src={question.bgImg} alt=""></img> : <></>}
                </div>
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

export default SlideQuestion;
