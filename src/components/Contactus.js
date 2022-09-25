import { React } from 'react';
import './Contactus.css';

import img4 from '../resource/img4.jpg';
import img1 from '../resource/img2.svg';
import img5 from '../resource/img5.jpg';

const Contactus = () => {
  return (
    <div>
      <div className="contactus-header">
        <img
          src={
            'https://images.unsplash.com/photo-1599249300675-c39f1dd2d6be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
        ></img>
        <div className="layer"></div>

        <div className="inner-contactus">
          <h2>PLEASE FEEL FREE TO CONTACT US AT ANY TIME TO DISCUSS YOUR NEEDS</h2>
          <p>
            Ready to serve any time, day or night and to assist in multiple languages. Always happy,
            consistent and non-judgmental.We are providing online tuition services to improve your
            study skills and exam preparation from grade 1-12 (cbse , ib ,icse ,igcse)
          </p>
          <div className="inner-2-contactus">
            <p>Ph no&emsp;&emsp;:9344095648</p>
            <p>Email&emsp;&emsp;:onlineguruofficial2020@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="Form">
        <img
          src={
            'https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg?w=2000'
          }
        ></img>

        <form>
          <h1>REACH US</h1>
          <label>Name*</label>
          <input type="text"></input>
          <label>Email*</label>
          <input type="text"></input>
          <label>Message*</label>
          <textarea></textarea>
          <input type="submit" value={'submit'}></input>
        </form>
      </div>

      {/* <div className="map-outer">
        <div id="map">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11.050638896265198,77.01330184936525+(RVS%20agency)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default Contactus;
