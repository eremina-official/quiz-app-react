import React from 'react';


const Question = (props) => {

  return (
    <div className={props.answers.done} onClick={props.onClick}>
      <p className="question-number">Pytanie {props.value.number} z 8</p>
  
      <img src={props.value.image} alt="person" />

      <p className="hint"> {props.value.hint} </p>

      <ul className="variants">
        <li id="answerOne" className={props.answers.answerOne}> 
              {props.value.variants[0]} 
        </li>
        <li id="answerTwo" className={props.answers.answerTwo}> {props.value.variants[1]} </li>
        <li id="answerThree" className={props.answers.answerThree}> {props.value.variants[2]} </li>
      </ul>
    </div>
  );
  
};


export default Question;
