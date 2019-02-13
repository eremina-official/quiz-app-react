import React from 'react';


const Question = (props) => {

  return (
    <div className={props.answers.done} onClick={props.onClick}>
      <div className="question">
        <p className="question__number">Pytanie {props.value.number} z 8</p>
    
        <img src={props.value.image} alt="person" className="question__image" />
  
        <p className="question__hint"> {props.value.hint} </p>
  
        <ul className="question__variants">
          <li id="answerOne" className={props.answers.answerOne}>{props.value.variants[0]}</li>
          <li id="answerTwo" className={props.answers.answerTwo}>{props.value.variants[1]}</li>
          <li id="answerThree" className={props.answers.answerThree}>{props.value.variants[2]}</li>
        </ul>
  
        { props.answers.done &&
          <div className="description">
            <p className="description__title">{props.value.correctVariant}</p>
            <p>{props.value.description}</p>
          </div>
        }
      </div>
    </div>
  );
  
};

export default Question;
