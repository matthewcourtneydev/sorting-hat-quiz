import React from 'react';
import Img from "../imgs/malfoy.webp"

const MemberCard = (props) => {
    let memberData = props.memberData;
    return (
        <div className="member-card">
        <div className="member-img-container">
        <img src={Img} alt="" />
            <h5>{memberData.name}</h5>
        </div>
        <p className='member-desc'>{memberData.desc}</p>
        </div>
    );
}

export default MemberCard;
