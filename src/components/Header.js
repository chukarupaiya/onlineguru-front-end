import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import img1 from '../app/components/ONG_logo.png';

const Header = () => {
  return (
    <div className="outer-nav-1">
      <img id="company_logo" src={img1}></img>
      <h1 className="nav-company">ONLINE GURU</h1>

      <div className="outer-nav">
        <Link to="/home">
          <button className="nav">Home</button>
        </Link>
        <Link to="/facilities">
          <button className="nav">Facilities</button>
        </Link>
        <Link to="/contactus">
          <button className="nav">Contact us</button>
        </Link>
        <Link to="/">
          <button className="nav">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
