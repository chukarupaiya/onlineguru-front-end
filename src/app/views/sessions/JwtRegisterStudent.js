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

const JwtRegisterStudent = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    setLoading(true);

    try {
      register(0, {
        FirstName: event.target.FirstName.value,
        LastName: event.target.LastName.value,
        Email: event.target.Email.value,
        Password: event.target.Password.value,
        Standard: event.target.Standard.value,
        Board: event.target.Board.value,
        phno: event.target.Phno.value,
        Address: event.target.Address.value,
        district: event.target.District.value,
        city: event.target.City.value,
        country: event.target.Country.value,
        state: event.target.State.value,
        postal_code: event.target.Postal_code.value,
      });
      navigate('/');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const [FirstName, update_FirstName] = useState('');
  const [LastName, update_LastName] = useState('');
  const [Email, update_Email] = useState('');
  const [Gender, update_Gender] = useState('');
  const [Password, update_Password] = useState('');
  const [Standard, update_Standard] = useState('');
  const [Board, update_Board] = useState('');
  const [Phno, update_Phno] = useState('');
  const [Address, update_Address] = useState('');
  const [City, update_City] = useState('');
  const [State, update_State] = useState('');
  const [District, update_District] = useState('');
  const [Country, update_Country] = useState('');
  const [Postal_code, update_Postal_code] = useState('');

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
                    <label>First Name</label>
                    <input
                      type={'text'}
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
                    <label>Standard</label>
                    <input
                      type={'text'}
                      value={Standard}
                      name={'Standard'}
                      onChange={(event) => {
                        update_Standard(event.target.value);
                      }}
                    ></input>
                  </div>

                  <div className="profile-inner-2">
                    <label>Board</label>
                    <select

                      value={Board}
                      name={'Board'}
                      onChange={(event) => {
                        // console.log(event.target.value);
                        update_Board(event.target.value);
                      }}

                    >
                      <option value='1'>CBSE</option>
                      <option value='2'>ICSE</option>
                      <option value='3'>IGCSE</option>
                      <option value='4'>IB</option>
                    </select>
                  </div>

                </div>

                <div className="profile-inner-1">
                  <div className="profile-inner-2">
                    <label>Phone number</label>
                    <input
                      type={'text'}
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
                      value={Postal_code}
                      name={'Postal_code'}
                      onChange={(event) => {
                        update_Postal_code(event.target.value);
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
                  Register
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

export default JwtRegisterStudent;
