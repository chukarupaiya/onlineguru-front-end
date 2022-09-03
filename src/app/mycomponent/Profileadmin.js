import { React, useEffect, useState } from 'react';

import axios from 'axios.js';

import './Profile.css';

const Profileadmin = (props) => {
  const [disab, update_disab] = useState(true);
  const [Name, update_Name] = useState(props.value.Name);
  const [Email, update_Email] = useState(props.value.Email);
  const [Phno, update_Phno] = useState(props.value.Phno);
  const [Address, update_Address] = useState(props.value.Address);
  const [city, update_city] = useState(props.value.city);
  const [state, update_state] = useState(props.value.state);
  const [district, update_district] = useState(props.value.district);
  const [country, update_country] = useState(props.value.country);
  const [postal_code, update_postal_code] = useState(props.value.postal_code);

  const profile_submit = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'admin/update/info',
      {
        Name: event.target.Name.value,
        phno: event.target.Phno.value,
        Address: event.target.Address.value,
        district: event.target.district.value,
        city: event.target.city.value,
        state: event.target.state.value,
        country: event.target.country.value,
        postal_code: event.target.postal_code.value,
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
            <label>Name</label>
            <input
              type={'text'}
              disabled={disab}
              value={Name}
              name={'Name'}
              onChange={(event) => {
                update_Name(event.target.value);
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
              value={city}
              name={'city'}
              onChange={(event) => {
                update_city(event.target.value);
              }}
            ></input>
          </div>
          <div className="profile-inner-2">
            <label>District</label>
            <input
              type={'text'}
              disabled={disab}
              value={district}
              name={'district'}
              onChange={(event) => {
                update_district(event.target.value);
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
              value={state}
              name={'state'}
              onChange={(event) => {
                update_state(event.target.value);
              }}
            ></input>
          </div>
          <div className="profile-inner-2">
            <label>Country</label>
            <input
              type={'text'}
              disabled={disab}
              value={country}
              name={'country'}
              onChange={(event) => {
                update_country(event.target.value);
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
              value={postal_code}
              name={'postal_code'}
              onChange={(event) => {
                update_postal_code(event.target.value);
              }}
            ></input>
          </div>
        </div>

        {!disab && <input id="sub-btn" type={'submit'} disabled={disab} value={'edit'}></input>}
      </form>
    </div>
  );
};

export default Profileadmin;
