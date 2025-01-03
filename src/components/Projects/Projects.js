import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import islami from "../../Assets/Projects/islami.png";
import News from "../../Assets/Projects/News.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={islami}
    isBlog={false}
    title="Islami App"
    description={
      <>
        <p>
          Islami App is a Flutter-based app providing easy access to the Quran, Hadith, and Dhikr (Sebha),
          with offline capabilities through local storage. It offers key features like:
        </p>
        <ul>
          <li><strong>Quran Fragment:</strong> Offline access to the Quran.</li>
          <li><strong>Sebha Fragment:</strong> Track Tasbeeh for Dhikr.</li>
          <li><strong>Hadith Fragment:</strong> Read saved Ahadith.</li>
        </ul>
      </>
    }
    ghLink="https://github.com/Shrouk-Ibrahim/IslamiApp"
    demoLink="https://drive.google.com/file/d/1vTyAdQ4c2B8RQfa9KytMW83mR2iUbFpg/view"
  />
</Col>


            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={News}
                isBlog={false}
                title="News APP"
                description={
                  <ul>
                    <li>Flutter project integrating Firebase</li>
                    <li>Customizable home screen with category selection</li>
                    <li>Languages (Arabic/English)</li>
                    <li>Uses **Bloc** for efficient state management</li>
                    <li>Fetches real-time news from **NewsAPI**</li>
                    <li>Emphasizes clean, maintainable code</li>
                    <li>Focus on readability, modularity, and performance optimization</li>
                  </ul>
                }
                ghLink="https://github.com/Shrouk-Ibrahim/NewsApp"
                figmaLink="https://www.figma.com/design/48e1711YXW0PJRPkvzCDIy/News-App"
              />
            </Col>


            <Col md={4} className="project-card">
  <ProjectCard
    imgPath={todo}
    isBlog={false}
    title="Todo App"
    description={
      <ul>
        <li><strong>Flutter-based project</strong> integrating Firebase for user authentication and task management.</li>
        <li><strong>Splash Screen</strong>: A visually appealing introduction to the app.</li>
        <li><strong>Login/SignUp</strong>: Secure user authentication and registration via Firebase.</li>
        <li><strong>Task List</strong>: Options to add, edit, delete, or mark tasks as done.</li>
        <li><strong>Customizable Settings</strong>: Allows theme and notification preferences.</li>
      </ul>
    }
    ghLink="https://github.com/Shrouk-Ibrahim/Todo_App?tab=readme-ov-file"
    figmaLink="https://www.figma.com/design/aRQOlqukflhcZFzkLHU9BP/Todo-App?node-id=0-1&p=f&t=1tT1VdtNZQ3j6sIH-0"
  />
</Col>


       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
