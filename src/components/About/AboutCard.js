import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Clover  Baxter </span>
            and I'm from <span className="purple"> Maine.</span>
            <br />I am currently pursuing associates degree in Computer Technology. In my future I hope to 
            earn a Master of Computer Science degree and a CyberSecurity degree. My tag is 4-Leafs-Code 
            and my organization tag is Fearless Tech. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Crocheting
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I've got a new story to write and it looks nothing like my past!"{" "}
          </p>
          <footer className="blockquote-footer">4-Leafs-Code</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
