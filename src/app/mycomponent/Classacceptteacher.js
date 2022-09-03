import { React, useState } from 'react';

import './Classacceptteacher.css';

const Classacceptteacher = (props) => {
  const backdrop = () => {
    props.updis();
  };
  return (
    <div>
      {<div className="out-reqacpt" onClick={backdrop}></div>}
      {
        <div className="in-in-reqacpt">
          <h4>Class Details:</h4>
          <h5>student Name:{props.name}</h5>

          <h5>student ID:{props.id}</h5>

          <h5>Topic:{props.topic}</h5>

          <h5>Prefered time:{props.time}</h5>
          <button className={'accept-btn'} onClick={backdrop}>
            close
          </button>
        </div>
      }
    </div>
  );
};

export default Classacceptteacher;
