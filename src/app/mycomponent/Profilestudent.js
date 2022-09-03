import { React, useEffect, useState } from 'react';

import axios from 'axios.js';

import './Profile.css';

const Profilestudent = (props) => {
  const [disab, update_disab] = useState(true);
  const [FirstName, update_FirstName] = useState(props.value.FirstName);
  const [LastName, update_LastName] = useState(props.value.LastName);
  const [Email, update_Email] = useState(props.value.Email);
  const [Standard, update_Standard] = useState(props.value.Standard);
  const [Board, update_Board] = useState(props.value.Board);
  const [Phno, update_Phno] = useState(props.value.phno);
  const [Address, update_Address] = useState(props.value.Address);
  const [City, update_City] = useState(props.value.city);
  const [State, update_State] = useState(props.value.state);
  const [District, update_District] = useState(props.value.district);
  const [Country, update_Country] = useState(props.value.country);
  const [Postal_code, update_Postal_code] = useState(props.value.postal_code);

  const profile_submit = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'student/update/info',
      {
        FirstName: event.target.FirstName.value,
        LastName: event.target.LastName.value,
        Standard: event.target.Standard.value,
        Board: event.target.Board.value,
        phno: event.target.Phno.value,
        Address: event.target.Address.value,
        district: event.target.District.value,
        city: event.target.City.value,
        country: event.target.Country.value,
        state: event.target.State.value,
        postal_code: event.target.Postal_code.value,
      },
      {
        headers: headers,
      }
    );

    window.location.reload();
  };

  return (
    <div className="profile-outer">
      <form onSubmit={profile_submit}>
        <h6
          onClick={() => {
            update_disab(false);
          }}
        >
          edit profile
        </h6>
        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>First Name</label>
            <input
              type={'text'}
              disabled={disab}
              value={FirstName}
              name={'FirstName'}
              onChange={(event) => {
                update_FirstName(event.target.value);
              }}
            ></input>
          </div>

          <div className="profile-inner-2">
            <label>Last Name</label>
            <input
              type={'text'}
              disabled={disab}
              value={LastName}
              name={'LastName'}
              onChange={(event) => {
                update_LastName(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>Email</label>
            <input
              type={'text'}
              disabled={true}
              value={Email}
              name={'Email'}
              onChange={(event) => {
                update_Email(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>Standard</label>
            <input
              type={'text'}
              disabled={disab}
              value={Standard}
              name={'Standard'}
              onChange={(event) => {
                update_Standard(event.target.value);
              }}
            ></input>
          </div>

          <div className="profile-inner-2">
            <label>Board</label>
            <input
              type={'text'}
              disabled={disab}
              value={Board}
              name={'Board'}
              onChange={(event) => {
                update_Board(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>Phone number</label>
            <input
              type={'text'}
              disabled={disab}
              value={Phno}
              name={'Phno'}
              onChange={(event) => {
                update_Phno(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>Address</label>
            <input
              type={'text'}
              disabled={disab}
              value={Address}
              name={'Address'}
              onChange={(event) => {
                update_Address(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>City</label>
            <input
              type={'text'}
              disabled={disab}
              value={City}
              name={'City'}
              onChange={(event) => {
                update_City(event.target.value);
              }}
            ></input>
          </div>
          <div className="profile-inner-2">
            <label>District</label>
            <input
              type={'text'}
              disabled={disab}
              value={District}
              name={'District'}
              onChange={(event) => {
                update_District(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>State</label>
            <input
              type={'text'}
              disabled={disab}
              value={State}
              name={'State'}
              onChange={(event) => {
                update_State(event.target.value);
              }}
            ></input>
          </div>
          <div className="profile-inner-2">
            <label>Country</label>
            <input
              type={'text'}
              disabled={disab}
              value={Country}
              name={'Country'}
              onChange={(event) => {
                update_Country(event.target.value);
              }}
            ></input>
          </div>
        </div>

        <div className="profile-inner-1">
          <div className="profile-inner-2">
            <label>Postal code</label>
            <input
              type={'text'}
              disabled={disab}
              value={Postal_code}
              name={'Postal_code'}
              onChange={(event) => {
                update_Postal_code(event.target.value);
              }}
            ></input>
          </div>
        </div>

        {!disab && <input id="sub-btn" type={'submit'} disabled={disab} value={'edit'}></input>}
      </form>
    </div>
  );
};

export default Profilestudent;
