import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ className, onClick }) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="button-navigation"
        onClick={() => onClick('prev')}
      >
        Wstecz
      </button>

      <button
        type="button"
        className="button-navigation"
        onClick={() => onClick('next')}
      >
        Do przodu
      </button>
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
