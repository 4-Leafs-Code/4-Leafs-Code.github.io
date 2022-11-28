import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";
import logo from "../../Assets/FsUnicorn.png";


function Blogs() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          Under <strong className="purple">Construction </strong>
        </h1>
        <p style={{ color: "white" }}>
          Coming soon are a few college essays I've wrote recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={logo}
              isBlog={false}
              title="CloversTech Essays"
              description="Coming Soon"
              ghLink="https://github.com/4-Leafs-Code/Like_Zelda_Game-"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={logo}
              isBlog={false}
              title="CloversTech Essays"
              description="Coming Soon"
              ghLink="https://github.com/4-Leafs-Code/battlegame"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={logo}
              isBlog={false}
              title="CloversTech Essays"
              description="Coming Soon"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
