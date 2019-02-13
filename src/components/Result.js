import React from 'react';

const Result = (props) => {
  return (
    <div onClick={props.onClick}>
      <p className="no-result">{props.message}</p>

      { props.questionNumber &&
      <p className="result">Wynik: {props.counterRight} z {props.questionNumber}.</p> }

      <div className="button-reset">Reset quiz</div>
    </div>
  );
};

export default Result;
