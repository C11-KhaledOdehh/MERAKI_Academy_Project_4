import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-4">
      <Container className='f'>
        <Row>
          <Col >
            <h6 style={{ textAlign: 'left' }}>About Us</h6>
            <p style={{ textAlign: 'left' }}>JobIn, founded in 2024 by khaled odeh, is a prominent professional networking platform that connects individuals and businesses globally.</p>
          </Col>
          <Col >
            <h2>JobIn</h2>
           
          </Col>
          <Col >
            <h6 >Contact Us</h6>
            <address>
              Jordan<br />
              Amman, Makkah st.<br />
              <a href="https://mail.google.com/" className="text-light">khaled.awd.odeh@gmail.com</a><br />
              <a  className="text-light">+972-796959715</a>
            </address>
          </Col>
        </Row>
        <Row>
          <Col >
            <b>copyright © 2024 JobIn. All rights reserved.</b>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
