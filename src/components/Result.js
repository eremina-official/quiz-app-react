import React from 'react';
import PropTypes from 'prop-types';
import data from '../quiz-data/questions-data';

const Result = ({ questionsNumber, totalAnswerCount, onClick }) => {
  const allQuestionsDone =
    questionsNumber === totalAnswerCount.filter((answer) => answer).length;

  const correctAnswerCount = totalAnswerCount
    .map((answer, index) => answer === data[index].correctVariant)
    .filter((answer) => answer).length;

  return (
    <div className="result-wrapper">
      <p className="result">
        {allQuestionsDone
          ? `Wynik: ${correctAnswerCount} z ${data.length}.`
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
  onClick: PropTypes.func.isRequired,
};

export default Result;
