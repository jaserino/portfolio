import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, imgUrl, pageLink, gitLink }) => {
  return (
    <Col sm={6} md={4} lg={4}>
      <div className="project-imgbox">
        <img src={imgUrl} alt="project" />
        <div className="project-tide">
          <h4>{title}</h4>
        </div>
      </div>
      <div className="project-button">
        <a className="button_p" href={pageLink} rel="nofollow">
          <span>Live Demo</span>
        </a>
        <a className="button_p" href={gitLink} rel="nofollow">
          <span>Github</span>
        </a>
      </div>
    </Col>
  );
};
