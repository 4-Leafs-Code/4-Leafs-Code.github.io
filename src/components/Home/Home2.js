import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { FaGithubSquare, FaDev, FaMedium } from "react-icons/fa";
import myImg from "../../Assets/Fearless.png";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming at the beginning of 2022. I am the founder and Co-Owner of{" "} 
              <a
                href="https://github.com/orgs/FearlessTech"
                target="_blank" //Open in new tab
                rel="noreferrer"
              >
                FearlessTech
              </a>, an OPEN TO ALL, open source community on Github.  
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> HTML, CSS, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Websites and/or Games </b> and
                also in areas related to{" "}
                <b className="purple">
                  installing hardware, programing, and networking.
                </b>
              </i>
              
            </p>
          </Col>
          <Col md={5} className="myImg">
            <br></br>
            <Tilt>
              <img src={myImg} className="img-fluid mt-5" alt="ProfilePic" style={{ borderRadius: '25px' }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/4-Leafs-Code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithubSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://dev.to/4leafscode"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDev />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@cloversuebaxter"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
