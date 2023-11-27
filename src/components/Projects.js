import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vocab from "../assets/img/vocab.svg";
import connected from "../assets/img/connected.svg";
import subject from "../assets/img/subject_specific.svg";
import dictionary from "../assets/img/dictionary.svg";
import AI from "../assets/img/AI.svg"
import customized from "../assets/img/curriculum.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vocabulary Size Estimation",
      description: "Estimates your terminology size",
      imgUrl: vocab,
    },
    {
      title: "Connected Words",
      description: "Shows the relationship between terminologies. Get structure to your learning journey",
      imgUrl: connected,
    },
    {
      title: "Customized Learning Curriculum",
      description: "Based on your evaluation, our system provide you the perfect learning program",
      imgUrl: customized,
    },
    {
      title: "Personal Dictionary",
      description: "Get examples for your words, learn pronunciation, and put them in your own dictionary",
      imgUrl: dictionary,
    },
    {
      title: "Subject Specific",
      description: "From Math, Linguistics, Science, Geography, our library has everything!",
      imgUrl: subject,
    },
    {
      title: "AI Assistant",
      description: "AI assistant is there for your if you have any questions!",
      imgUrl: AI,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Subject Specific Vocabulary Learning</h2>
                <p>A whole new experience in learning. Find words that are similar to each other. Beautiful visualization of network of words and termonologies. Program tailored to your need</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>More coming... Stay tuned</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More coming... Stay tuned</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
