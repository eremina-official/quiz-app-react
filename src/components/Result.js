import React from 'react';
import PropTypes from 'prop-types';

const Result = ({
  questionNumber,
  totalAnswerCount,
  counterRight,
  onClick,
}) => {
  return (
    <div>
      {questionNumber === totalAnswerCount ? (
        <p className="result">
          Wynik: {counterRight} z {questionNumber}.
        </p>
      ) : (
        <p className="no-result">Proszę odpowiedzieć na wszystkie pytania.</p>
      )}

      <button type="button" className="button-reset" onClick={onClick}>
        Resetuj quiz
      </button>
    </div>
  );
};

Result.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  totalAnswerCount: PropTypes.number.isRequired,
  counterRight: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Result;
