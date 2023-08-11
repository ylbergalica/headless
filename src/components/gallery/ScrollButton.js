import React, { useEffect, useRef } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = (props) => {
	return (
        <button className={'slider-button ' + props.classes} onClick={props.onClick} style={props.style} >
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
	)
}

export default ScrollButton;