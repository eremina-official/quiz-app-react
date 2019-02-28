import React from 'react';

const Result = ( { questionNumber, message, counterRight, onClick } ) => {
  return (
    <div onClick={onClick}>
      <p className="no-result">{message}</p>

      { questionNumber &&
      <p className="result">Wynik: {counterRight} z {questionNumber}.</p> }

      <div className="button-reset">Reset quiz</div>
    </div>
  );
};

export default Result;
