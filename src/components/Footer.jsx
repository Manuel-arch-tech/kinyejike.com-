import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-2">
              &copy; 2024 kienyeji.ke - Fresh Kienyeji Chicken Delivery in Nairobi, Kenya
            </p>
            <div className="bg-secondary text-white py-2 px-3 rounded" style={{ fontSize: '0.875rem' }}>
              AI-powered development by Biela.dev, powered by TeachMeCode® Institute
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
