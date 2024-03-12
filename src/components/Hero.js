import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as CoffeeSvg } from '../assets/img/coffee.svg';

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="name">Jared Serino</span>
            <h1 className="we">Software Developer</h1>
            <p>
              Hi I'm Jared 👋🏼, former accounting clerk turned software devloper.
              I have a Bachelors in Computer Information Systems with a
              specialization in Software Engineering. Im striving to bring my
              analytical and creative approach to problem solving within a
              fast-paced tech environment.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <CoffeeSvg className="mug" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
