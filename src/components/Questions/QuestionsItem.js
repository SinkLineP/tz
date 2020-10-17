import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const QuestionsItem = ({question, number}) => {
    const [isDropDownShowing, setDropDownShowing] = useState(false);
    const toggleDropDown = (newValue) => {
        setDropDownShowing(newValue)
    }

    return (
        <div className={`questions-list-item ${
            isDropDownShowing
                ? "questions-list-item-drop" 
                : ""
        }`}
            onClick={() => toggleDropDown(!isDropDownShowing)}>
            <div className="questions-list-item-main">
            <p className="questions-list-item-main-text">{question.title}</p>
            <FontAwesomeIcon className="questions-list-item-main-icon" icon={faChevronDown} />
            </div>
            { isDropDownShowing &&
            <p className="questions-list-item-drop-text">{question.subtitle}</p>
            }
        </div>
    );
};

export default QuestionsItem;
