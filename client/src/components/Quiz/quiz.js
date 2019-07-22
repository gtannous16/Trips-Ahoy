import React from "react";
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../Quiz/Question';
import QuestionCount from '../Quiz/QuestionCount';
import AnswerOption from '../Quiz/AnswerOption';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return(
         <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={key.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
    );
}

return(
    <CSSTransitionGroup
        className = "container"
        component ="div"
        transitionName = "fade"
        transitionEnterTimeout = {800}
        transitionLeaveTimeout = {500}
        transitionAppear
        transitionAppearTimout = {500}
    >
        <div key= {props.questionId}>
            <QuestionCount counter = {props.questionId} total = {props.questionTotal} />
            <Question content = {props.question} />
            <ul className = "answerOptions">
                {props.answerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    </CSSTransitionGroup>
);

}

Quiz.PropTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;