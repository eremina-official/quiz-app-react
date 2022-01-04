import React from 'react';

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

export default Navigation;
