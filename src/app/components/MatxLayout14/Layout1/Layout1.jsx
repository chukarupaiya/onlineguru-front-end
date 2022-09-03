import { ThemeProvider, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { MatxSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { sidenavCompactWidth, sideNavWidth } from 'app/utils/constant';
import React, { useEffect, useRef, useState } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import SidenavTheme from '../../MatxTheme/SidenavTheme/SidenavTheme';
import SecondarySidebar from '../../SecondarySidebar/SecondarySidebar';
import Layout1Sidenav from './Layout1Sidenav';
import Layout1Topbar from './Layout1Topbar';

import axios from 'axios.js';
import '../../../mycomponent/Profile.css';

const Layout1Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  background: theme.palette.background.default,
}));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  overflowY: 'auto',
  overflowX: 'hidden',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'column',
}));

const LayoutContainer = styled(Box)(({ width, secondarySidebar }) => ({
  height: '100vh',
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'column',
  verticalAlign: 'top',
  marginLeft: width,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  marginRight: secondarySidebar.open ? 50 : 0,
}));

const Layout1 = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings, secondarySidebar } = settings;
  const topbarTheme = settings.themes[layout1Settings.topbar.theme];
  const {
    leftSidebar: { mode: sidenavMode, show: showSidenav },
  } = layout1Settings;

  const getSidenavWidth = () => {
    switch (sidenavMode) {
      case 'full':
        return sideNavWidth;

      case 'compact':
        return sidenavCompactWidth;

      default:
        return '0px';
    }
  };

  const sidenavWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const ref = useRef({ isMdScreen, settings });
  const layoutClasses = `theme-${theme.palette.type}`;

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layout1Settings.leftSidebar.mode;
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? 'close' : sidebarMode;
      updateSettings({ layout1Settings: { leftSidebar: { mode } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdScreen]);

  const create_admin = async (event) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    };

    const result = await axios.post(
      'https://' + process.env.REACT_APP_BACKEND_URL + 'admin/register',
      {
        Name: event.target.Name.value,
        phno: event.target.Phno.value,
        Email: event.target.Email.value,
        Password: event.target.Password.value,
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

  const [Name, update_Name] = useState('');
  const [Password, update_Password] = useState('');
  const [Email, update_Email] = useState('');
  const [Phno, update_Phno] = useState('');
  const [Address, update_Address] = useState('');
  const [city, update_city] = useState('');
  const [state, update_state] = useState('');
  const [district, update_district] = useState('');
  const [country, update_country] = useState('');
  const [postal_code, update_postal_code] = useState('');

  return (
    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== 'close' && (
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
      )}

      <LayoutContainer width={sidenavWidth} secondarySidebar={secondarySidebar}>
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar && (
          <StyledScrollBar>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <Box flexGrow={1} position="relative">
              <MatxSuspense>
                <Outlet />
              </MatxSuspense>
            </Box>

            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </StyledScrollBar>
        )}

        {!settings.perfectScrollbar && (
          <ContentBox>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}

            <Box flexGrow={1} position="relative">
              <MatxSuspense>
                <div className="profile-outer">
                  <form onSubmit={create_admin}>
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
                          value={postal_code}
                          name={'postal_code'}
                          onChange={(event) => {
                            update_postal_code(event.target.value);
                          }}
                        ></input>
                      </div>
                    </div>

                    {<input id="sub-btn" type={'submit'} value={'create admin'}></input>}
                  </form>
                </div>
              </MatxSuspense>
            </Box>
          </ContentBox>
        )}

        {settings.footer.show && settings.footer.fixed && <Footer />}
      </LayoutContainer>

      {settings.secondarySidebar.show && <SecondarySidebar />}
    </Layout1Root>
  );
};

export default React.memo(Layout1);
