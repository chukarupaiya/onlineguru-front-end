import { React } from 'react';

import img1 from '../resource/img8.png';
import img2 from '../resource/img2.svg';
import img3 from '../resource/img11.jpeg';

import './Facilities.css';

const Facilities = () => {
  document.addEventListener('mousemove', parallax);

  function parallax(e) {
    this.querySelectorAll('.lay').forEach((element) => {
      var x = (window.innerWidth - e.pageX * 6) / 90;
      var y = (window.innerHeight - e.pageY * 6) / 90;

      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  document.addEventListener('mousemove', parallax2);

  function parallax2(e) {
    this.querySelectorAll('.lay2').forEach((element) => {
      var x = (window.innerWidth - e.pageX * 5) / 90;
      var y = (window.innerHeight - e.pageY * 5) / 90;

      element.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <div>
      <div className="showcase-2">
        <img
          className="img1"
          src={
            'https://images.unsplash.com/photo-1546430498-05c7b929830e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          }
        ></img>

        <div className="layer"></div>
        <div className="company-detail">
          <h1>ONE-ON-ONE SESSIONS</h1>
          <h2>LEARN WITHOUT GOING TO SCHOOL</h2>
          <h2>LEARN THE FUN WAY-PREMIUM LEARNING EXPERIENCE</h2>
        </div>
      </div>

      <div className="fouter-1">
        <div className="finner-1">
          <h1>FACILITIES</h1>
          <p>
            We are providing online tuition services to improve your study skills and exam
            preparation from grade 1-12 in a LOW AND A AFFORDABLE WAY.You’ll find opportunities to
            learn new techniques with new tools.
          </p>
          <p>The Boards in we are Expertised:</p>

          <ul>
            <li>
              <p>CBSE</p>
            </li>
            <li>
              <p>IB</p>
            </li>
            <li>
              <p>ICSE</p>
            </li>
            <li>
              {' '}
              <p>IGCSE</p>
            </li>
            <li>
              <p>STATE BOARD</p>
            </li>
          </ul>
        </div>

        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"></img>
      </div>

      <div className="fouter-3">
        <img src="https://thumbs.dreamstime.com/b/multitasking-man-woman-miltitasking-african-american-70379280.jpg"></img>

        <div className="finner-3">
          <h1>EXPERIENCED TEACHERS</h1>
          <div className="finner-3-2">
            <p>
              Aspiring teacher with skills in classroom management, lesson planning and organisation
              along with a compassionate and caring attitude focused towards inspiring, motivating
              and developing each student's imagination and innovative thinking.
            </p>
            <p>
              They are able to juggle multiple priorities and achieve results through alignment of
              cross-functional and multi-divisional activities in a highly collaborative,
              multi-cultural, team-oriented, and fast-paced environment
            </p>
          </div>
        </div>
      </div>

      <div className="fouter-2">
        <div className="finner-2">
          <h1>EXTRACURICULAR CLASSES</h1>
          <div className="finner-2-2">
            <p>
              Take the next step in your artistic journey. With ONLINE GURU , you can explore a
              range of art topics, from drawing and painting, to lettering and fine art like dance ,
              music and yoga. Whether you’re looking for art classes for beginners or you’re already
              an experienced artist, you can take your skills to the next level with online classes
              , all taught by talented artists and professionals.
            </p>
            <p>You can get hands-on experience by completing and sharing your own art projects.</p>
          </div>
        </div>

        <img src={img3}></img>
      </div>

      <div className="about-us">
        <div className="para">
          <h3>02</h3>
          <h2>LEARN FROM ANYWHERE</h2>
          <p className="para-1">Connect with an online tutor in seconds</p>
          <p>
            Online lessons are flexible, and can be easily fitted in between after-school
            activities, or while the student is abroad. Students often form great relationships with
            their personal tutor, and the sense of continuity provided by online lessons with one
            mentor has proved hugely beneficial when preparing for change.We share material online,
            using shared whiteboards and googledocs to track the student’s progress throughout the
            lesson. These platforms also make homework sharing and updating instantly available, and
            allow the students to access their work from any device. Once they’re familiar with the
            interface, we can yield fantastic results!
          </p>
        </div>
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1529579134665-75dfc9c5ccef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
        ></img>
      </div>

      <div class="featuresList about-us">
        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGReports.635bcc1e.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Smart Attendance</p>
          <p class="featuresList_content_text">
            Keep parents updated with live attendance and monthly reports.
          </p>
        </div>
        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGReports.635bcc1e.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Insighful Student Reports</p>
          <p class="featuresList_content_text">
            Personalised performance reports <br /> for all your students
          </p>
        </div>
        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGChat.f6df6673.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Parent Communication Module</p>
          <p class="featuresList_content_text">
            Chat with parents, anytime, anywhere. Disable chat when you're busy
          </p>
        </div>

        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGPrivacy.437532bc.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Privacy Control</p>
          <p class="featuresList_content_text">
            Control what info your faculties and admin can view for your batches
          </p>
        </div>
        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGOnlineTest.f62981fa.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Online Test</p>
          <p class="featuresList_content_text">
            Conduct your online tests powered with automatic checking and solutions.
          </p>
        </div>

        <div class="featuresList_content">
          <img
            src="https://classplusapp.com/create-your-own-brand/static/media/SVGClass.7fe4ff46.svg"
            alt="circled"
            class="featuresList_content_img"
          />
          <p class="featuresList_content_head">Class Management</p>
          <p class="featuresList_content_text">
            Forget tons of paperwork and manage your institute completely digitally
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
