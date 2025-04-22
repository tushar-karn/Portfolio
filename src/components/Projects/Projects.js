import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/todo.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/wallpaper.jpg";
import chatify from "../../Assets/Projects/banking.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/mern.jpg";

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
              title="BMS Java"
              description="Designed and developed a comprehensive Banking Management System using Java Full Stack,enabling secure and efficient financial transaction management. Implemented key functionalities,including account creation, deposits, withdrawals, fund transfers, and transaction history tracking."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mern Stack Ecom Store"
              description="Developed a full-featured e-commerce store using the MERN stack, delivering a seamlessshopping experience with modern UI/UX. Implemented key functionalities such as productlisting, filtering, user authentication, cart management, and secure checkout."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Kotlin Based Wallpaper App"
              description="Developed a Kotlin-based Wallpaper app, providing users with a vast collection of high-qualitywallpaper through a sleek and intuitive interface. Implemented features such as wallpaper browsing, category filtering, favorites management, andone-tap wallpaper setting."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ToDo App"
              description="Designed and developed a user-friendly cross-platform Todo app using React, aimed atstreamlining task management. Built responsive and intuitive interfaces optimized for both web and mobile platforms, followingmodern UI/UX principles."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
