import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Loja Online Desktop",
      description: "E-Commerce",
      imgUrl: projImg1,
      repoUrl: "https://github.com/vitoriatumelero/E-Commerce-Moda"
    },
    {
      title: "Loja Online Mobile",
      description: "E-Commerce",
      imgUrl: projImg2,
      repoUrl: "https://github.com/vitoriatumelero/bebece-mobile"
    },
    {
      title: "MiAu",
      description: "Site em processo para adoção de animais",
      imgUrl: projImg3,
      repoUrl: "https://github.com/vitoriatumelero/appmiau"
    },
    {
      title: "Loja Online Desktop",
      description: "E-Commerce",
      imgUrl: projImg1,
      repoUrl: "https://github.com/vitoriatumelero/E-Commerce-Moda"
    },
    {
      title: "Loja Online Mobile",
      description: "E-Commerce",
      imgUrl: projImg2,
      repoUrl: "https://github.com/vitoriatumelero/bebece-mobile"
    },
    {
      title: "MiAu",
      description: "Site em processo para adoção de animais",
      imgUrl: projImg3,
      repoUrl: "https://github.com/vitoriatumelero/appmiau"
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
                <h2>Projetos</h2>
                <p>Alguns dos meus últimos projetos em andamento, você pode conferir outros em meu github no início da página.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3</Nav.Link>
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
                      <p>section</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Em breve</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
