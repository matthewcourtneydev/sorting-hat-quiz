import React from 'react';
import { RxCross1 } from "react-icons/rx";


const HouseIntro = (props) => {
    return (
        <div className="overlay">
            <span onClick={() => props.setIsIntroOpen((prev) => !prev)}><RxCross1 /></span>
            <p className="house-words">pride, ambition, cunning</p>
            <h1>Slytherin</h1>
            <div className="triangle">+++</div>
            <p className="house-welcome">WELCOME TO SLYTHERIN</p>
            <p className="paragraph"><span className='first-letter'>Y</span>ou probably know that some of Slytherin's most renowned memebers include Severus Snape and Bellatrix Lestrange. But did you know Merlin himself was a slytherin, or that according to legend, the ribbon of a First Class Order of Merlin is green to reflect his Hogwarts house?</p>
        </div>
    );
}

export default HouseIntro;
