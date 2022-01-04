import React from 'react';
import PropTypes from 'prop-types';

const Question = ({
  /* destructure props */
  questionsData: { number, image, hint, variants, correctVariant, description },
  selectedVariant,
  onClick,
}) => {
  return (
    <div className={selectedVariant ? 'question-is-done' : null}>
      <div className="question">
        <div className="question__image">
          <p className="question__image__number">Pytanie {number} z 8</p>

          <img src={image} alt="person" className="question__image__img" />
        </div>

        <div className="question__data">
          <p className="question__data__hint">{hint}</p>

          <div className="question__data__variants">
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
    </div>
  );
};

Question.propTypes = {
  questionsData: PropTypes.object.isRequired,
  selectedVariant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Question.defaultProps = {
  selectedVariant: '',
};

export default Question;
