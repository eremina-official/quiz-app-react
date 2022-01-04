import React from 'react';

const Navigation = ({ className, onClick }) => {
  return (
    <div className={className}>
      <div className="prev" onClick={() => onClick('prev')}>Wstecz</div>
      <div className="next" onClick={() => onClick('next')}>Do przodu</div>
    </div>
  );
};

export default Navigation;
