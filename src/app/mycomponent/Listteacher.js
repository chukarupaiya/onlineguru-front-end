import { React } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios.js';

import './Liststudent.css';

const Listteacher = (props) => {
  const [status, update_status] = useState(0);

  useEffect(async () => {
    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'admin/fetch/user',
      { user_id: props.user_id },
      {
        headers: headers,
      }
    );

    update_status(result.data.result.Status);
  }, []);

  return (
    <div className="outer-outer">
      {status == 0 && <div className="dis_layer"></div>}

      <div className="lisouter">
        {
          <img src="https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp"></img>
        }
        {
          <div className="lisinner-div">
            <p>User ID&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{props.user_id}</p>
            <p>Teacher ID&emsp;&nbsp;&nbsp;:{props.teacher_id}</p>
            <p>Name&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;:{props.Name}</p>
            <p>Subject&emsp;&emsp;&emsp;:{props.subject}</p>
            <p>prefered start time&emsp;&nbsp;:{props.prefered_start_time}</p>
            <p>prefered end time&emsp;&nbsp;&nbsp;&nbsp;:{props.prefered_end_time}</p>
            <p>Gender&emsp;&emsp;&emsp;:{props.gender}</p>
            <p>image&emsp;&emsp;&emsp;&nbsp;:{props.image}</p>
            <p>years of experience&emsp;:{props.yearsofexperience}</p>
            <p>Phno&emsp;&emsp;&emsp;&nbsp;&nbsp;:{props.phno}</p>
            <p>Email&emsp;&emsp;&emsp;&nbsp;:{props.Email}</p>
            <p>Address&emsp;&emsp;:{props.Address}</p>
            <p>District&emsp;&emsp;&nbsp;&nbsp;:{props.district}</p>
            <p>City&emsp;&emsp;&emsp;&emsp;:{props.city}</p>
            <p>Country&emsp;&emsp;&nbsp;:{props.country}</p>
            <p>State&emsp;&emsp;&emsp;&nbsp;&nbsp;:{props.state}</p>
            <p>postal code&nbsp;&nbsp;:{props.postal_code}</p>
            <button
              className="table-btn"
              onClick={() => {
                props.remove_user({ Email: props.Email });
              }}
            >
              remove
            </button>
          </div>
        }
      </div>
    </div>
  );
};

export default Listteacher;

{
  /* <tr className="table-row">
        <td>{d.user_id}</td>
        <td>{d.teacher_id}</td>
        <td>{d.Name}</td>
        <td>{d.subject}</td>
        <td>{d.prefered_start_time}</td>
        <td>{d.prefered_end_time}</td>
        <td>{d.gender}</td>
        <td>{d.image}</td>
        <td>{d.yearsofexperience}</td>
        <td>{d.phno}</td>
        <td>{d.Email}</td>
        <td>{d.Password}</td>
        <td>{d.Address}</td>
        <td>{d.district}</td>
        <td>{d.City}</td>
        <td>{d.state}</td>
        <td>{d.Country}</td>
        <td>{d.postal_code}</td> */
}
