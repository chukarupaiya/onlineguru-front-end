import { React, useEffect, useState } from 'react';
import './Classdisplayblock.css';

import axios from 'axios.js';

const ClassdisplayBlock2 = (props) => {
  const handle_update_disp = () => {
    props.update_disp({
      id: props.v3,
      credit: props.credit,
    });
    if (props.v2 == undefined) {
      props.update_teacher(props.v5);
    } else {
      props.update_teacher(props.v2);
    }
  };

  const [teacher_name, update_teacher_name] = useState('');
  const [student_name, update_student_name] = useState('');

  useEffect(async () => {
    const accessToken = window.localStorage.getItem('token');

    const id = props.v2 == undefined ? props.v5 : props.v2;

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'teacher/info/getbyid',
      {
        teacher_id: id,
      },
      {
        headers: headers,
      }
    );

    const result2 = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'student/info/getbyid',
      {
        student_id: props.v4,
      },
      {
        headers: headers,
      }
    );

    update_teacher_name(result.data.result.Name);
    update_student_name(result2.data.result.FirstName);
  }, []);

  return (
    <div className="outer-div">
      {props.status == 0 && (
        <div className="pending-layer">
          <p>Waiting for Approval</p>
        </div>
      )}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqacJiFy7LrJs1s5tqzIUKxyIAz0v_AxW-Z54fPyHNPbOpw2k9OTxWMbnlxgMnXiNUiE&usqp=CAU"></img>
      <div className="inner-div">
        <h2>{props.v1}</h2>
        <h4>{teacher_name}</h4>
        <h4>classroom id:{props.v3}</h4>
        <h4>student name:{student_name}</h4>
        <h4>credit:{props.credit}</h4>
      </div>
      <button onClick={handle_update_disp}>open</button>
    </div>
  );
};

export default ClassdisplayBlock2;
