import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shrouk Ibrahim </span>
            from <span className="purple"> Alexandria, Egypt.</span>
            <br />
            I am currently enrolled in an internship at the Digital Egypt Pioneers Initiative (DEPI) in the Mobile Application Native Track.         
              <br />
             <br/>
            software developer with a Bachelor of Science in Software Industry and Multimedia from the University of
            Alexandria. 
        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to guide clients from concept to reality. "{" "}
          </p>
          <footer className="blockquote-footer">Shrouk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
