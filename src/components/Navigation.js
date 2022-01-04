import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({
  className,
  currentQuestionIndex,
  questionsNumber,
  onClick,
}) => {
  return (
    <div className={className}>
      {currentQuestionIndex > 0 && (
        <button
          type="button"
          className="button-navigation"
          onClick={() => onClick(-1)}
        >
          Wstecz
        </button>
      )}

      {currentQuestionIndex < questionsNumber && (
        <button
          type="button"
          className="button-navigation button-navigation-next"
          onClick={() => onClick(1)}
        >
          Do przodu
        </button>
      )}
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questionsNumber: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
