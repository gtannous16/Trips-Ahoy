<<<<<<< HEAD
=======
import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <h2 className="question">{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
>>>>>>> 3c32d8360cf829346ba2553113e40e68776ced1f
