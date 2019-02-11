import React from 'react';

const Navigation = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="prev">Wstecz</div>
      <div className="next">Do przodu</div>
    </div>
  );
};

export default Navigation;
