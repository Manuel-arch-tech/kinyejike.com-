import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="home" className="position-relative" style={{ 
      background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1300354/pexels-photo-1300354.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat',
      minHeight: '100vh',
      paddingTop: '80px'
    }}>
      <Container className="h-100 d-flex align-items-center">
        <Row className="text-white">
          <Col lg={8}>
            <h1 className="display-3 fw-bold mb-4">
              Fresh Kienyeji Chicken
              <br />
              <span className="text-success">Delivered to Your Door</span>
            </h1>
            <p className="fs-5 mb-4 lh-lg">
              Premium quality, 100% halal kienyeji chicken from free-range farms. 
              Each chicken weighs 1-1.1kg and is freshly slaughtered for maximum taste and nutrition.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <div className="bg-success text-white px-4 py-3 rounded shadow-sm">
                <strong className="fs-4">KSh 1,100</strong>
                <div className="small">per chicken (1-1.1kg)</div>
              </div>
              <div className="bg-warning text-dark px-4 py-3 rounded shadow-sm">
                <strong className="fs-5">+ KSh 250</strong>
                <div className="small">delivery in Nairobi</div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="btn-success px-5 py-3 fw-bold"
              href="https://wa.me/254718909493"
              target="_blank"
            >
              Order Now on WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
