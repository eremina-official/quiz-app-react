import React from 'react';

const Question = ({
  /* destructure props */
  questionsData: {
    number,
    image,
    hint,
    variants,
    correctVariant,
    description,
  },
  selectedVariant,
  onClick,
}) => {
  return (
    <div className={selectedVariant ? 'question-is-done' : null}>
      <div className="question">
        <p className="question__number">Pytanie {number} z 8</p>

        <img src={image} alt="person" className="question__image" />

        <p className="question__hint"> {hint} </p>

        <div className="question__variants">
          {variants.map((variant) => {
            let answerClassName = 'answer';
            if (selectedVariant && variant === correctVariant) {
              answerClassName = 'answer right';
            }

            if (selectedVariant && variant === selectedVariant) {
              answerClassName =
                selectedVariant === correctVariant
                  ? 'answer right'
                  : 'answer wrong';
            }

            return (
              <button
                type="button"
                className={answerClassName}
                key={variant}
                onClick={() => onClick(variant)}
              >
                {variant}
              </button>
            );
          })}
        </div>

        {selectedVariant && (
          <div className="description">
            <p className="description__title">{correctVariant}</p>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
