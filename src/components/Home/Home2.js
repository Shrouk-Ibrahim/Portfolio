import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {FaEnvelope } from "react-icons/fa";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
     
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
    <p className="home-about-body">
      I am a passionate <span className="highlight purple">software developer</span>  , I have extensive experience in
      <br />
      <span className="highlight purple">mobile application development</span> using <span className="highlight purple">Flutter</span> and <span className="highlight purple">Android</span>.
      <br />
  
      My career includes a proven track record of leading and contributing to diverse projects and initiatives.
      <br />
      <br />
      <i>
        <b className="purple">MY Unique Selling Proposition:</b>
      </i>
      <br />
      I strive to harness my passion for crafting cutting-edge, user-friendly products that deliver meaningful impact and align with current trends. 
      <br />
      
      With a commitment to professionalism, on-time delivery, and exceptional after-sales support, my goal is to guide clients from concept to reality.
      <br />
   <br />
      This ensures seamless transitions from <span className="purple">design</span> to a fully developed <span className="purple">application</span>.
    </p>
  </Col>
  <Col md={4} className="my-avatar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="Avatar" />
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
                  href="https://github.com/Shrouk-Ibrahim"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://shroukibrahim.offical@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shrouk--ibrahim/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
