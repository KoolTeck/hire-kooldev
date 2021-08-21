import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";

const KoolDevResume = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Container className="main">
        <Row>
          {/*aside contaning basic info started*/}
          <Col xs={12} md={4} className="aside">
            {/*details start*/}
            <Row className="details">
              <h2>
                ADETUNJI <br></br> ADEBOWALE
              </h2>
              <small>Front End Developer</small>
            </Row>
            <div className="underline"></div>
            {/*details end*/}

            {/*contact section start*/}
            <Row className="contacts">
              <div className="icon">
                <FaEnvelope /> <div>bowaleadetunji@gmail.com</div>
              </div>

              <div className="icon">
                <FaPhone /> <div>07068414723</div>
              </div>
              <div className="icon">
                <FaMapMarkerAlt />{" "}
                <div> Off Rite Foods limited Ososa Ogun State</div>
              </div>
              <div className="icon">
                {" "}
                <FaLinkedinIn />
                <div>
                  {" "}
                  <a href="https://www.linkedin.com/in/adebowale-adetunji-908b291aa6">
                    linkedin.com/me
                  </a>
                </div>
              </div>
            </Row>

            {/*contact section ends*/}

            {/*skills section start*/}
            <h3> SkILL SETS</h3>
            <div className="underline"></div>
            <Row className="skills">
              <ul>
                <li>HTML5</li>
                <li>CSS/Bootstrap,</li>
                <li>Git</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Node</li>
                <li>Netlify</li>
                <li>JSON/Web Api</li>
                <li>Wordpress etc..</li>
              </ul>
            </Row>
            {/*skills section end*/}

            {/*EDUCATION section started*/}
            <h3> EDUCATION</h3>
            <div className="underline"></div>
            <Row className="education">
              <h4>HND / MECHANICAL ENGINEERING</h4>
              <small>
                Federal Polytechnic Offa, Kwara <br />
                <em>2017-2019</em>
              </small>
              <h4>ND / MECHANICAL ENGINEERING</h4>
              <small>
                Federal Polytechnic Offa, Kwara <br />
                <em>2012-2016</em>
              </small>
              <h4> FULLSTACK DEVELOPER MICRODEGREE</h4>
              <small>
                Edconnect/Remote <br />
                <em>Jan/June-2021</em>
              </small>
              <h4>CERTIFICATE OF PARTICIPATION/FRONT END </h4>
              <small>
                HNGI7/Remote <br /> <em>March/June-2020</em>
              </small>
            </Row>
            {/*EDUCATION section ended*/}

            {/*awards section begin*/}
            <h3>AWARDS</h3>
            <div className="underline"></div>
            <Row className="awards">
              <h4>Rector Honors List</h4>
              <small>Federal Polytechnic Offa</small>
            </Row>
            {/*awards section end*/}
          </Col>
          {/*aside contaning basic info ended*/}

          {/*main content containing experience started*/}
          <Col xs={12} md={8} className="content">
            {/*profile started*/}
            <Row className="profile">
              <h3>PROFILE</h3>
              <p>
                <em>
                  Creative Front-End Developer offering 2+ years of experience
                  providing high-impact web solutions for diverse industry
                  organizations. Skilled in designing, developing and testing
                  multiple web-based applications incorporating a range of
                  technologies. Aspiring to combine broad background with strong
                  technical skills to excel as a Front-End Developer.
                </em>
              </p>
            </Row>

            {/*profile END*/}

            {/*experience started*/}
            <h3>PROFESSIONAL EXPERIENCE</h3>

            {/*experience 1*/}
            <div className="experience">
              <Row>
                <h4>Edconnect Internship - Fullstack developer</h4>
                <small>
                  <em>Remote - Jan - July-2021</em>
                </small>
                <ul>
                  <li>
                    developed a web app(project-explorer) with latest industry
                    tools
                  </li>
                  <li>reach out to team members to solve challenges</li>
                </ul>
              </Row>
              {/*experience 1 end*/}

              {/*experience 2 start*/}
              <Row>
                <h4>HNG Internships — Frontend Developer [Intern]</h4>
                <small>
                  <em>May 2020 - August 2020 </em>
                </small>
                <p>
                  I contributed with teams of developers in developing user
                  interfaces for a series of products within three months.
                </p>

                <ul>
                  <li>
                    Worked with Node.js developers to create an invoice
                    generating app.
                  </li>

                  <li>
                    Worked with PHP developers to create an airtime procurement
                    web app
                  </li>
                  <li>
                    Contributed to the frontend department of my team to deliver
                    responsive web templates to be sold on envato marketplace
                    online
                  </li>
                  <li>
                    Built a fun chatbot with rivescript on one of the challenges{" "}
                  </li>
                </ul>
              </Row>
              {/*experience 2 ended*/}

              {/*experience 3 start*/}
              <Row>
                <h4>
                  NPOWER Tech Software Program - Frontend and Backend developer
                  [Intern]{" "}
                </h4>
                <small>
                  <em>OCTOBER 2019 - DECEMBER 2019 0 </em>
                </small>
                <p>
                  I worked as an inter under the Federal Government youth
                  empowerment program called Npower Tech Software during my
                  early days of getting into tech
                </p>

                <ul>
                  <li>
                    Used PHP and Mysql as backend and database management
                    technology respectively in building my final project called
                    Menu Menu restaurant, a website.
                  </li>

                  <li>
                    Designed websites with bootstrap and CSS as part of the
                    various frontend challenges.
                  </li>
                </ul>
              </Row>
              {/*experience 3 ended*/}
            </div>

            {/*experience ended*/}
            {/* message me section started */}
            <h3>REACH OUT</h3>
            <Form action="contact" method="POST" id="contactForm">
              <Row className="mb-4">
                <Col>
                  <Form.Control
                    value={name}
                    onChange={(eve) => {
                      setName(eve.target.value);
                    }}
                    name="name"
                    placeholder="Your name"
                    required={true}
                  />
                </Col>
                <Col>
                  <Form.Control
                    value={email}
                    onChange={(eve) => {
                      setEmail(eve.target.value);
                    }}
                    name="email"
                    placeholder="Your email"
                    required={true}
                    type="email"
                  />
                </Col>
              </Row>
              <Form.Group className="mb-4">
                <Form.Control
                  name="message"
                  value={message}
                  onChange={(eve) => {
                    setMessage(eve.target.value);
                  }}
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  required={true}
                />
              </Form.Group>
              <Button type="submit" variant="warning" className="mt-4">
                SHOOT
              </Button>
            </Form>

            {/* message me section ended */}
          </Col>
          {/*main content containing experience end*/}
        </Row>
      </Container>
      <footer>
        <p>made with 💖 by @kooldev For </p>
        <div>
          <a
            href="https://internship.zuri.team
"
          >
            <img
              src="https://internship.zuri.team/static/media/logo.36d2d48a.svg"
              alt="zuri"
            ></img>
          </a>{" "}
          <a
            href="https://ingressive.org
"
          >
            <img
              src="https://ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png"
              alt="i4g"
              className="i4g"
            />{" "}
          </a>{" "}
          Stage Two Task
        </div>
      </footer>
    </>
  );
};

export default KoolDevResume;
