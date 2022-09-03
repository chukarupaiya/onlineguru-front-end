import { React, useEffect, useState } from 'react';

import axios from 'axios.js';

import './Profile.css';

const Profileteacher = (props) => {
  const [disab, update_disab] = useState(true);
  const [Name, update_Name] = useState(props.value.Name);
  const [subject, update_subject] = useState(props.value.subject);
  const [Email, update_Email] = useState(props.value.Email);
  const [prefered_start_time, update_prefered_start_time] = useState(props.value.prefer_start_Time);
  const [prefered_end_time, update_prefered_end_time] = useState(props.value.prefer_end_Time);
  const [gender, update_gender] = useState(props.value.gender);
  const [phno, update_phno] = useState(props.value.phno);
  const [yearsofexperience, update_yearsofexperience] = useState(props.value.yearsofexperience);
  const [Address, update_Address] = useState(props.value.Address);
  const [City, update_City] = useState(props.value.City);
  const [state, update_state] = useState(props.value.state);
  const [district, update_district] = useState(props.value.district);
  const [Country, update_Country] = useState(props.value.Country);
  const [postal_code, update_postal_code] = useState(props.value.postal_code);

  const profile_submit = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'teacher/update/info',
      {
        Name: event.target.Name.value,
        subject: event.target.subject.value,
        prefer_start_Time: event.target.prefered_start_time.value,
        prefer_end_Time: event.target.prefered_end_time.value,
        gender: event.target.gender.value,
        yearsofexperience: event.target.yearsofexperience.value,
        phno: event.target.phno.value,
        Address: event.target.Address.value,
        district: event.target.district.value,
        city: event.target.City.value,
        state: event.target.state.value,
        country: event.target.Country.value,
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

          <div className="profile-inner-2">
            <label>subject</label>
            <input
              type={'text'}
              disabled={disab}
              value={subject}
              name={'subject'}
              onChange={(event) => {
                update_subject(event.target.value);
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
            <label>prefered start time</label>
            <input
              type={'time'}
              disabled={disab}
              value={prefered_start_time}
              name={'prefered_start_time'}
              onChange={(event) => {
                update_prefered_start_time(event.target.value);
              }}
            ></input>
          </div>

          <div className="profile-inner-2">
            <label>prefered end time</label>
            <input
              type={'time'}
              disabled={disab}
              value={prefered_end_time}
              name={'prefered_end_time'}
              onChange={(event) => {
                update_prefered_end_time(event.target.value);
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
              value={phno}
              name={'phno'}
              onChange={(event) => {
                update_phno(event.target.value);
              }}
            ></input>
          </div>
          <div className="profile-inner-2">
            <label>Gender</label>
            <input
              type={'text'}
              disabled={disab}
              value={gender}
              name={'gender'}
              onChange={(event) => {
                update_gender(event.target.value);
              }}
            ></input>
          </div>

          <div className="profile-inner-2">
            <label>Experience</label>
            <input
              type={'text'}
              disabled={disab}
              value={yearsofexperience}
              name={'yearsofexperience'}
              onChange={(event) => {
                update_yearsofexperience(event.target.value);
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

export default Profileteacher;
