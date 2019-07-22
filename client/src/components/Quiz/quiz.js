import React from "react";
import PropTypes from 'prop-types';
//import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../Quiz/Question';
import QuestionCount from '../Quiz/QuestionCount';
import AnswerOption from '../Quiz/AnswerOption';
import { TransitionGroup } from 'react-transition-group';

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
    <TransitionGroup
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
            <ul className = "AnswerOptions">
                {props.AnswerOptions.map(renderAnswerOptions)}
            </ul>
        </div>
    </TransitionGroup>
);

}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;