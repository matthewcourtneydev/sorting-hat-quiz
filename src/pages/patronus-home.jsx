import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatronusHome = () => {
    const navigate = useNavigate();
    return (
        <div className="page patronus-home">
            <h1>Discover your Patronus</h1>
            <p>YOU CAN ONLY DISCOVER YOUR PATRONUS ONCE THE QUESTIONS ARE TIMED; GO WITH YOUR INSTINCTS</p>
            <button className="begin-patronus" onClick={() => navigate("/patronus-quiz")}><span></span>BEGIN</button>
        </div>
    );
}

export default PatronusHome;
