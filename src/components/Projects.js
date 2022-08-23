import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import plantsocial from "../assets/img/plantsocial.png";
import wolfpacktravel from "../assets/img/wolfpacktravel.png";
import eatnrank from "../assets/img/eatnrank.png";
import ahva from "../assets/img/ahva.png";
import lolchamps from "../assets/img/lolchamps.png";
import runX from "../assets/img/runX.png";

export const Projects = () => {
  const projects = [
    {
      title: "Plant Social",
      description: "xxxx",
      imgUrl: plantsocial,
      pageLink: "https://plantsocial.netlify.app/",
      gitLink: "https://github.com/jaserino/plantsocial",
    },
    {
      title: "WolfPack Travel",
      description: "xxxx",
      imgUrl: wolfpacktravel,
      pageLink: "https://wolfpacktravel.netlify.app/",
      gitLink: "https://github.com/jaserino/WolfPackTravel",
    },
    {
      title: "EatNRank",
      description: "xxxx",
      imgUrl: eatnrank,
      pageLink: "https://eatnrank.netlify.app/",
      gitLink: "https://github.com/jaserino/Eat-N-Rank",
    },
    {
      title: "Desktop Assistant",
      description: "xxxx",
      imgUrl: ahva,
      gitLink: "https://github.com/jaserino/virtual-assistant",
    },
    {
      title: "LOL Rolodex",
      description: "xxxx",
      imgUrl: lolchamps,
      pageLink: "https://jaserino.github.io/LOL-rolodex",
      gitLink: "https://github.com/jaserino/LOL-rolodex",
    },
    {
      title: "RunX Fitness App",
      description: "xxxx",
      imgUrl: runX,
      gitLink: "https://github.com/jaserino/RunX",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of the projects I've built. Live demos and github
              links are available below
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
