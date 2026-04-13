import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>

        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Enter Your Full Name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter Your Email Address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="tel"
                placeholder="Enter Your Contact Number"
                required
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Enter Your Message Here"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28705.675800237685!2d73.65357479555888!3d25.92834583973127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3969e8999121b5b9%3A0x21b2a95f873ec496!2sSojat%2C%20Rajasthan%20306104!5e0!3m2!1sen!2sin!4v1776068772632!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ marginRight: "10px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>

      <div className=" fluid container-fluid">
        <div className="contact-info">
          <ul>
            <li className="justify-content-center">
              <i className="fas fa-envelope"></i>hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>London, United Kingdom
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
