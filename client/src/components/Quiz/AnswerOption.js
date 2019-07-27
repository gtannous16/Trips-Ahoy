import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  const outputOption = option => {
    if ( option.includes('://') ) {
      return <img src={option} />
    }

    return option;
  }

  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      {/* <img src={props.answerContent} /> */}
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        <div className="answer-option">
          {outputOption(props.answerContent)}
        </div>
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