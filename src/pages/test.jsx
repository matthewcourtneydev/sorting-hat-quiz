import React from 'react';
import QuizQuestion from '../components/quiz-question';
import questionData from "../questions.json"

const Test = () => {
    let question = questionData[0]
    return (
        <div className="page">
            <div className="page-content">
                <QuizQuestion questionData={question} />
            </div>
        </div>
    );
}

export default Test;
