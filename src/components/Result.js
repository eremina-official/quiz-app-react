import React from 'react';

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

export default Result;
