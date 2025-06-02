import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ProductSection() {
  const productImages = [
    {
      src: "https://images.pexels.com/photos/1300354/pexels-photo-1300354.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Free Range Kienyeji",
      description: "Our mature chickens roam freely in natural countryside environments"
    },
    {
      src: "https://images.pexels.com/photos/1059943/pexels-photo-1059943.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Premium Quality",
      description: "Fresh, whole chicken ready for your kitchen - 1 to 1.1kg each"
    },
    {
      src: "https://images.pexels.com/photos/1300353/pexels-photo-1300353.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Farm Fresh",
      description: "Healthy, mature chickens raised with care in natural environments"
    }
  ];

  return (
    <section id="products" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-4 fw-bold text-dark mb-3">Our Premium Kienyeji Chicken</h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Sourced from trusted local farmers, our kienyeji chickens are raised naturally 
              and are 100% halal certified for your peace of mind.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {productImages.map((product, index) => (
            <Col md={4} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img 
                  variant="top" 
                  src={product.src} 
                  className="rounded-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {product.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <div className="bg-success text-white p-4 rounded shadow">
              <h3 className="fw-bold mb-3">✓ 100% Halal Certified</h3>
              <p className="mb-0 fs-5">
                All our chickens are slaughtered according to Islamic guidelines, 
                ensuring they meet the highest halal standards.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProductSection;
