import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiGithub, DiJava } from "react-icons/di";
import { SiFirebase,  SiMongodb } from "react-icons/si"; 

import { SiKotlin } from "react-icons/si"; // Add Kotlin icon
import { SiFlutter } from "react-icons/si"; // Add Flutter icon

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
