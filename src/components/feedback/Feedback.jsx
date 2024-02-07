import css from './Feedback.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) =>{

  return (
    <div className={css.feedback}>
      <h1 className={css.feedback__title}>Please leave feedback</h1>
      <div className="feedback__buttons">
      {options.map(option => (
        <button className={css.feedback_buttons}
          type="button"
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      </div>
    </div>
  );
};
  


  Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;