import React from 'react';

const Result = ( { questionNumber, message, counterRight, onClick } ) => {
  return (
    <div>
      <p className="no-result">{message}</p>

      { questionNumber &&
      <p className="result">Wynik: {counterRight} z {questionNumber}.</p> }

      <div className="button-reset" onClick={onClick}>Resetuj quiz</div>
    </div>
  );
};

export default Result;
