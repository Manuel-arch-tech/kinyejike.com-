import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img 
              src="https://images.pexels.com/photos/1300354/pexels-photo-1300354.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mature free range chickens in countryside"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6} className="mt-4 mt-lg-0">
            <h2 className="display-5 fw-bold mb-4">Why Choose Our Kienyeji Chicken?</h2>
            <div className="row g-3">
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0">
                    <strong>1</strong>
                  </div>
                  <div>
                    <h5 className="fw-bold">Free Range & Natural</h5>
                    <p className="text-muted">
                      Our mature chickens roam freely in natural countryside environments, 
                      ensuring better taste and nutrition compared to commercial chickens.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0">
                    <strong>2</strong>
                  </div>
                  <div>
                    <h5 className="fw-bold">Perfect Size & Weight</h5>
                    <p className="text-muted">
                      Each mature chicken weighs between 1-1.1kg, perfect for families and 
                      ensuring you get excellent value for your money.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <div className="bg-success text-white rounded-circle p-2 me-3 flex-shrink-0">
                    <strong>3</strong>
                  </div>
                  <div>
                    <h5 className="fw-bold">Fresh & Halal</h5>
                    <p className="text-muted">
                      Freshly slaughtered according to halal guidelines and delivered 
                      the same day to ensure maximum freshness and quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
