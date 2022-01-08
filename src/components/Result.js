import React from 'react';
import PropTypes from 'prop-types';

const Result = ({
  questionsNumber,
  totalAnswerCount,
  counterRight,
  onClick,
}) => {
  return (
    <div className="result-wrapper">
      {questionsNumber ===
      totalAnswerCount.filter((answer) => answer).length ? (
        <p className="result">
          Wynik: {counterRight} z {questionsNumber}.
        </p>
      ) : (
        <p className="no-result">Proszę odpowiedzieć na wszystkie pytania.</p>
      )}

      <button type="button" className="button" onClick={onClick}>
        Resetuj quiz
      </button>
    </div>
  );
};

Result.propTypes = {
  questionsNumber: PropTypes.number.isRequired,
  totalAnswerCount: PropTypes.array.isRequired,
  counterRight: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Result;
