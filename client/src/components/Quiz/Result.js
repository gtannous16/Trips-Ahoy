import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
    return (
        <CSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div>
                The Cruises best suited for your Personality Type are: {props.quizResult}
            </div>
        </CSSTransitionGroup>
    );

}

Result.PropTypes = {
    quizResult: PropTypes.string.isRequired
};

export default Result;