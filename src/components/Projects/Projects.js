import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.jpg";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=" "
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SMART BUS RAPID TRANSIT [BRT] MANAGMENT SYSTEM"
              description="System prevents private vehicles from illegally entering the lane which is specified
              for public transport, Camera captures the image of the number plate Process it using Open Computer
              Vision. Search in database for authorization of vehicle."
              ghLink=" "
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="The social"
              description="online community app for like minded people, Added Login/Signup Authentication along with
               Google Authentication, Picture uploading enabled highlighting enabled, Tech Used ReactJS, Firebase. "
              ghLink=" "
              demoLink=" "              
            />
          </Col>

          
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
