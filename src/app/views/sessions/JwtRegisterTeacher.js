import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import { Card, Checkbox, Grid, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import '../../mycomponent/Profile.css';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRegister = styled(JustifyBox)(() => ({
  backgroundImage: `linear-gradient(to right, #f9b83a, #f8d32a)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 1200,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  username: '',
  remember: true,
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtRegisterTeacher = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    setLoading(true);

    try {
      register(1, {
        Name: event.target.Name.value,
        subject: event.target.subject.value,
        Email: event.target.Email.value,
        Password: event.target.Password.value,
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
      });
      navigate('/');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const [Name, update_Name] = useState('');
  const [subject, update_subject] = useState('');
  const [Email, update_Email] = useState('');
  const [gender, update_gender] = useState('');
  const [Password, update_Password] = useState('');
  const [prefered_start_time, update_prefered_start_time] = useState('');
  const [prefered_end_time, update_prefered_end_time] = useState('');
  const [phno, update_phno] = useState('');
  const [yearsofexperience, update_yearsofexperience] = useState('');
  const [Address, update_Address] = useState('');
  const [City, update_City] = useState('');
  const [state, update_state] = useState('');
  const [district, update_district] = useState('');
  const [Country, update_Country] = useState('');
  const [postal_code, update_postal_code] = useState('');

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="https://ucghi.universityofcalifornia.edu/sites/default/files/img/register_icon.png"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <form onSubmit={handleFormSubmit}>
                <div className="profile-inner-1">
                  <div className="profile-inner-2">
                    <label>Name</label>
                    <input
                      type={'text'}
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
                      value={Email}
                      name={'Email'}
                      onChange={(event) => {
                        update_Email(event.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="profile-inner-2">
                    <label>Password</label>
                    <input
                      type={'text'}
                      value={Password}
                      name={'Password'}
                      onChange={(event) => {
                        update_Password(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="profile-inner-1">
                  <div className="profile-inner-2">
                    <label>prefered start time</label>
                    <input
                      type={'time'}
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
                      value={phno}
                      name={'phno'}
                      onChange={(event) => {
                        update_phno(event.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="profile-inner-2">
                    <label>Gender</label>
                    <select

                      value={gender}
                      name={'gender'}
                      onChange={(event) => {
                        update_gender(event.target.value);
                      }}
                    >
                      <option value='1'>Male</option>
                      <option value='0'>Female</option>
                      <option value='3'>others</option>

                    </select>
                  </div>

                  <div className="profile-inner-2">
                    <label>Experience</label>
                    <input
                      type={'text'}
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
                      value={postal_code}
                      name={'postal_code'}
                      onChange={(event) => {
                        update_postal_code(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <FlexBox gap={1} alignItems="center">
                  <Checkbox
                    size="small"
                    name="remember"
                    // onChange={handleChange}
                    // checked={values.remember}
                    sx={{ padding: 0 }}
                  />

                  <Paragraph fontSize={13}>
                    I have read and agree to the terms of service.
                  </Paragraph>
                </FlexBox>

                <LoadingButton
                  type="submit"
                  color="primary"
                  loading={loading}
                  variant="contained"
                  sx={{ mb: 2, mt: 3 }}
                >
                  Regiser
                </LoadingButton>

                <Paragraph>
                  Already have an account?
                  <NavLink
                    to="/session/signin"
                    style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                  >
                    Login
                  </NavLink>
                </Paragraph>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegisterTeacher;
