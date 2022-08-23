import { Container, Row, Col } from "react-bootstrap";

export const Interests = () => {
  return (
    <section className="interest" id="interests">
      <Container>
        <Row>
          <Col>
            <div className="interest-box">
              <h2>Interests</h2>
              <p>
                When I'm not coding or brewing a cup of coffee here's what you
                can catch me doing
              </p>
              <div className="card-container">
                <div
                  className="card text-bg-primary mb-3"
                  style={{ maxWidth: "12rem" }}
                >
                  <div className="card-header">Weightlifting</div>
                  <div className="card-body">
                    <img
                      src="https://img.icons8.com/color/96/000000/weightlift.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="card text-bg-primary mb-3"
                  style={{ maxWidth: "12rem" }}
                >
                  <div className="card-header">Artificial Intelligence</div>
                  <div className="card-body">
                    <img
                      src="https://img.icons8.com/color/96/000000/artificial-intelligence.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="card text-bg-primary mb-3"
                  style={{ maxWidth: "12rem" }}
                >
                  <div className="card-header">Coffee</div>
                  <div className="card-body">
                    <img
                      src="https://img.icons8.com/color/96/000000/coffee-pot.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="card text-bg-primary mb-3"
                  style={{ maxWidth: "12rem" }}
                >
                  <div className="card-header">Space</div>
                  <div className="card-body">
                    <img
                      src="https://img.icons8.com/color/96/000000/saturn-planet.png"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="card text-bg-primary mb-3"
                  style={{ maxWidth: "12rem" }}
                >
                  <div className="card-header">Biking</div>
                  <div className="card-body">
                    <img
                      src="https://img.icons8.com/color/96/000000/cycling-skin-type-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
