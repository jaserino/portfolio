import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, imgUrl, pageLink, gitLink }) => {
  return (
    <Col sm={6} md={6} lg={4}>
      <div className="project-imgbox">
        <img className="project-img" src={imgUrl} alt="project" />
        <div className="project-label">
          <h4>{title}</h4>
        </div>
      </div>
      <div className="project-button">
        <a
          className="button_p"
          href={pageLink}
          target="_blank"
          rel="noreferrer"
        >
          <span>Live Demo</span>
        </a>
        <a className="button_p" href={gitLink} target="_blank" rel="noreferrer">
          <span>Github</span>
        </a>
      </div>
    </Col>
  );
};
