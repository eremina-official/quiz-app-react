import React from 'react';

const Result = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      { props.questionNumber &&
      <p className="result">Wynik: {props.counterRight} z {props.questionNumber}.</p> }
    </div>
  );
};

export default Result;
