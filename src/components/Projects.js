import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCards';
import plantsocial from '../assets/img/plantsocial.png';
import wolfpacktravel from '../assets/img/wolfpacktravel.png';
import eatnrank from '../assets/img/eatnrank.png';
import runX from '../assets/img/runX.png';
import solar from '../assets/img/solar2.png';
import ras from '../assets/img/RAS.png';

export const Projects = () => {
  const projects = [
    {
      title: 'RAS Safety Consultants Inc',
      description: 'xxxx',
      imgUrl: ras,
      pageLink: 'https://www.rassafetyconsultantsinc.com/',
      gitLink: 'https://github.com/jaserino/RAS_Safety_Consultants',
    },
    {
      title: 'Solar',
      description: 'xxxx',
      imgUrl: solar,
      pageLink: 'https://github.com/jaserino/solarstudy',
      gitLink: 'https://github.com/jaserino/solarstudy',
    },
    {
      title: 'Plant Social',
      description: 'xxxx',
      imgUrl: plantsocial,
      pageLink: 'https://plantsocial.netlify.app/',
      gitLink: 'https://github.com/jaserino/plantsocial',
    },
    {
      title: 'WolfPack Travel',
      description: 'xxxx',
      imgUrl: wolfpacktravel,
      pageLink: 'https://wolfpacktravel.netlify.app/',
      gitLink: 'https://github.com/jaserino/WolfPackTravel',
    },
    {
      title: 'EatNRank',
      description: 'xxxx',
      imgUrl: eatnrank,
      pageLink: 'https://eatnrank.netlify.app/',
      gitLink: 'https://github.com/jaserino/Eat-N-Rank',
    },
    {
      title: 'RunX Fitness App',
      description: 'xxxx',
      imgUrl: runX,
      pageLink: 'https://github.com/jaserino/RunX',
      gitLink: 'https://github.com/jaserino/RunX',
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
