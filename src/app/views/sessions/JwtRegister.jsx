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
    maxWidth: 800,
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

const JwtRegister = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      register(values.email, values.username, values.password);
      navigate('/');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="data:image/png;base64,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"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <LoadingButton
                style={{
                  display: 'block',
                  margin: 'auto',
                  marginBottom: '60px',
                  marginTop: '30px',
                }}
                color="primary"
                variant="contained"
                sx={{ my: 2 }}
                onClick={() => {
                  navigate('/session/signup/student');
                }}
              >
                register as student
              </LoadingButton>

              <LoadingButton
                style={{ display: 'block', margin: 'auto' }}
                color="primary"
                variant="contained"
                onClick={() => {
                  navigate('/session/signup/teacher');
                }}
                sx={{ my: 2 }}
              >
                register as teacher
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegister;
