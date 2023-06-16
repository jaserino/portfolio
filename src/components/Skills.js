import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>Here are some of the technologies I use everyday</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className={'skill-slider'}
              >
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/javascript--v1.png"
                    alt="JS"
                  />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/react-native.png"
                    alt="React"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/null/python--v1.png"
                    alt="Python"
                  />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/null/nodejs.png"
                    alt="Nodejs"
                  />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/html-5--v1.png"
                    alt="HTML"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/css3.png"
                    alt="CSS "
                  />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/mongodb.png"
                    alt="MongoDB"
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/000000/bootstrap.png"
                    alt="Bootstrap"
                  />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/144px-Tailwind_CSS_Logo.svg.png?20211001194333"
                    alt="tailwindcss"
                  />
                  <h5>Tailwindcss</h5>
                </div>
                <div className="item">
                  <img
                    src="https://img.icons8.com/color/144/null/java-coffee-cup-logo--v1.png"
                    alt="Java"
                  />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
