import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
            <p className="fs-5 text-light">
              Ready to order? Contact us through any of these channels
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          <Col md={6}>
            <Card className="bg-success text-white h-100 border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="display-1 mb-3">📱</div>
                <Card.Title className="h3 fw-bold mb-3">WhatsApp Orders</Card.Title>
                <Card.Text className="fs-5 mb-4">
                  Call or message us directly on WhatsApp for quick orders and instant responses
                </Card.Text>
                <Button 
                  variant="light" 
                  size="lg" 
                  className="fw-bold"
                  href="https://wa.me/254718909493"
                  target="_blank"
                >
                  +254 718 909 493
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card className="bg-primary text-white h-100 border-0 shadow">
              <Card.Body className="text-center p-4">
                <div className="display-1 mb-3">✉️</div>
                <Card.Title className="h3 fw-bold mb-3">Email Us</Card.Title>
                <Card.Text className="fs-5 mb-4">
                  Send us your inquiries, feedback, or bulk order requests via email
                </Card.Text>
                <Button 
                  variant="light" 
                  size="lg" 
                  className="fw-bold"
                  href="mailto:kienyeji.ke@gmail.com"
                >
                  kienyeji.ke@gmail.com
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <h3 className="fw-bold mb-3">Follow Us on Social Media</h3>
            <div className="d-flex justify-content-center gap-4">
              <Button 
                variant="outline-light" 
                size="lg"
                href="https://tiktok.com/@kienyeji.ke"
                target="_blank"
                className="px-4 py-3 fw-bold"
              >
                TikTok @kienyeji.ke
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                href="https://instagram.com/kienyeji.ke"
                target="_blank"
                className="px-4 py-3 fw-bold"
              >
                Instagram @kienyeji.ke
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
