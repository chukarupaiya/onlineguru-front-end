import { React, useState, useEffect } from 'react';
import './Classdisplayblock.css';
import axios from 'axios.js';

const Classdisplayblock = (props) => {
  const user = window.localStorage.getItem('userrole');

  const [layerstate, updatelayer] = useState(props.v4 == 0 ? true : false);
  const [reqbtn, updatereqbtn] = useState(user == '0' ? false : true);

  const acceptreq = async () => {
    updatelayer(false);
    updatereqbtn(false);

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'student/info/getbyid',
      {
        student_id: props.v12,
      },
      {
        headers: headers,
      }
    );

    props.acceptclass({
      id: props.v6,
      user_id: result.data.result.user_id,
      credit: props.credit,
    });
  };

  const rejectreq = async () => {
    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'student/info/getbyid',
      {
        student_id: props.v12,
      },
      {
        headers: headers,
      }
    );

    props.rejectclass({
      id: props.v6,
      user_id: result.data.result.user_id,
      credit: props.credit,
    });
  };

  const onclick = () => {
    props.update_dis();
    props.update_dis_value({
      name: student_name,
      id: props.v12,
      topic: props.v1,
      time: props.v11,
    });
  };

  //get the teacher and student details
  const [teacher_name, update_teacher_name] = useState('');
  const [student_name, update_student_name] = useState('');

  useEffect(async () => {
    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'teacher/info/getbyid',
      {
        teacher_id: props.v2,
      },
      {
        headers: headers,
      }
    );

    const result2 = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'student/info/getbyid',
      {
        student_id: props.v12,
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
      {props.v4 == 3 && <div className="layer"></div>}
      {props.v4 == 4 && (
        <div className="pending-layer">
          <p>Rejected...</p>
        </div>
      )}
      {layerstate && !reqbtn && (
        <div className="pending-layer">
          <p>Requested...</p>
        </div>
      )}
      {reqbtn && layerstate && (
        <div className="pending-layer">
          <p>Requested...</p>
          <button onClick={onclick} className="reqacptbtn-2">
            i
          </button>
          <button className="reqacptbtn" onClick={acceptreq}>
            accept request
          </button>
          <button id="reqacptbtn2" onClick={rejectreq}>
            reject request
          </button>
        </div>
      )}

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqacJiFy7LrJs1s5tqzIUKxyIAz0v_AxW-Z54fPyHNPbOpw2k9OTxWMbnlxgMnXiNUiE&usqp=CAU"></img>
      <div className="inner-div">
        <h2>{props.v1}</h2>
        <h4>{teacher_name}</h4>
        <h4>classroom id:{props.v3}</h4>
        <h4>student name:{student_name}</h4>
      </div>
      <button
        onClick={() => {
          if (props.isteacher == false) {
            props.student_view();
            props.student_view_value({
              topic: props.v1,
              id_teacher: props.v2,
              classroom_id: props.v3,
              status: props.v4,
              classes_id: props.v6,
              req_time: ('' + new Date(props.v11)).substring(0, 25),
              id_student: props.v12,
              Link: props.v13,
              student_name: student_name,
            });
          } else {
            props.teacher_view();
            props.teacher_view_value({
              topic: props.v1,
              id_teacher: props.v2,
              classroom_id: props.v3,
              status: props.v4,
              classes_id: props.v6,
              req_time: ('' + new Date(props.v11)).substring(0, 25),
              id_student: props.v12,
              student_name: student_name,
            });
          }
        }}
      >
        open
      </button>
    </div>
  );
};

export default Classdisplayblock;
