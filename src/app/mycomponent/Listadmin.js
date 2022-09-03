import { React, useState, useEffect } from 'react';

import './Liststudent.css';
import axios from 'axios.js';

const Listadmin = (props) => {
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
    <div className="lisouter">
      {status == 0 && <div className="dis_layer"></div>}
      {
        <img src="https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp"></img>
      }
      {
        <div className="lisinner-div">
          <p>User ID&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{props.user_id}</p>
          <p>Name&emsp;&emsp;&emsp;:{props.Name}</p>
          <p>Phno&emsp;&emsp;&emsp;&nbsp;:{props.Phno}</p>
          <p>Email&emsp;&emsp;&emsp;:{props.Email}</p>
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
  );
};

export default Listadmin;

//   <tr className="table-row">
//     <td>{d.user_id}</td>
//     <td>{d.student_id}</td>
//     <td>{d.FirstName}</td>
//     <td>{d.Email}</td>
//     <td>{d.LastName}</td>
//     <td>{d.Standard}</td>
//     <td>{d.Board}</td>
//     <td>{d.phno}</td>
//     <td>{d.demo}</td>
//     <td>{d.Password}</td>
//     <td>{d.Address}</td>
//     <td>{d.district}</td>
//     <td>{d.city}</td>
//     <td>{d.country}</td>
//     <td>{d.state}</td>
//     <td>{d.postal_code}</td>
//     <button className="table-btn">remove</button>
//   </tr>

//     <table className="table-1">
//     <tr>
//       <th>User id</th>
//       <th>Student id</th>
//       <th>Firstname</th>
//       <th>Email</th>
//       <th>Lastname</th>
//       <th>Standard</th>
//       <th>Board</th>
//       <th>Phno</th>
//       <th>Demo</th>
//       <th>Password</th>
//       <th>Address</th>
//       <th>District</th>
//       <th>City</th>
//       <th>Country</th>
//       <th>State</th>
//       <th>Postal code</th>
//       <th></th>
//     </tr>
//     <tbody>{item}</tbody>
//   </table>
