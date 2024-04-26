import React from 'react';
import { RxCross1 } from "react-icons/rx";

const PatronusMenu = (props) => {
    return (
        <div className={`overlay patronus-overlay`}>
        <span onClick={() => props.setIsPatronusOpen((prev) => !prev)}>
          <RxCross1 />
        </span>
        </div>
    );
}

export default PatronusMenu;
