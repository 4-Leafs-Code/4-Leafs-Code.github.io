import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zelda from "../../Assets/Projects/Zelda.jpg";
import pet from "../../Assets/Projects/4-Leafs-Pet.jpg";
import battle from "../../Assets/Projects/battlegame.jpg";
import wd1 from "../../Assets/Projects/WD1.jpg";

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
              imgPath={zelda}
              isBlog={false}
              title="Zelda Like Game"
              description="This is a Zelda styled game writen in Python. I followed along with a tutorial to research
              how to make the virtual pet I wanted to make as my final project to MIT's 6.0001 course."
              ghLink="https://github.com/4-Leafs-Code/Like_Zelda_Game-"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battle}
              isBlog={false}
              title="A React.js Battle Game"
              description="This is a Turn-Based Battle Game built with React Only. 
              You will be the character MagaMan.
              Your opponent is Seamus.
              You will have 1 of 3 choices per turn: Attack, Magic, or Heal.
              When a character is defeated, the game over page will be displayed."
              ghLink="https://github.com/4-Leafs-Code/battlegame"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet}
              isBlog={false}
              title="4 Leafs Virtual Pet"
              description="This virtual pet was writen to display a little of everything I had learned throughout 
              MIT's 6.0001 course. The toolbar icons are just for looks at the moment but I hope to continue 
              building this into a tamagotchi-like virtual pet."
              ghLink="https://github.com/4-Leafs-Code/4-leafs-pet"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wd1}
              isBlog={false}
              title="Website of my Design"
              description="This is an update to the front-end design of a website I built. This version uses bootstrap 
              while the backend was wrote with Python, Flask, and SQLAlchemy."
              ghLink="https://github.com/4-Leafs-Code/IntroToWebDesignFP"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
