import React from "react";
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (
        <li className =  "answerOtpion">
            <input
                type="radio"
                className="radioButton"
                name="radioGropup"
                checked={props.answerType === props.answer}
                id={props.answerType}
                value={props.answerType}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
                />
            <label className="RadioLabel" htmlFor={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );

}

AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;