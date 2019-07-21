import React from 'react';

const Question = ( 
  { /* destructure props */
    questionsData: { number, image, hint, variants, correctVariant, description }, 
    classNames: { answerOne, answerTwo, answerThree, done },  
    onClick 
  }

) => {
  return (
    <div className={done} onClick={onClick}>
      <div className="question">
        <p className="question__number">Pytanie {number} z 8</p>
    
        <img src={image} alt="person" className="question__image" />
  
        <p className="question__hint"> {hint} </p>
  
        <ul className="question__variants">
          <li id="answerOne" className={answerOne}>{variants[0]}</li>
          <li id="answerTwo" className={answerTwo}>{variants[1]}</li>
          <li id="answerThree" className={answerThree}>{variants[2]}</li>
        </ul>
  
        { done &&
          <div className="description">
            <p className="description__title">{correctVariant}</p>
            <p>{description}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Question;
