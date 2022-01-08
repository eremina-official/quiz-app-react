import React from 'react';
import PropTypes from 'prop-types';

const Result = ({
  questionsNumber,
  totalAnswerCount,
  counterRight,
  onClick,
}) => {
  const allQuestionsDone =
    questionsNumber === totalAnswerCount.filter((answer) => answer).length;

  return (
    <div className="result-wrapper">
      <p className="result">
        {allQuestionsDone
          ? `Wynik: ${counterRight} z ${questionsNumber}.`
          : 'Proszę odpowiedzieć na wszystkie pytania.'}
      </p>

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
