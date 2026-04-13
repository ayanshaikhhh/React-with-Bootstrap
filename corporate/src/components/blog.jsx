import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Img1 from "../assets/images/blog1.jpg"
import Img2 from "../assets/images/blog2.jpg"
import Img3 from "../assets/images/blog3.jpg"
const blogData = [
  {
    id: 1,
    image: Img1,
    time: "15 Jan 2026",
    date: "10 April 2026",
    title: "React Basics",
    description: "Learn the basics of React step by step.",
  },
  {
    id: 2,
    image: Img2,
    time: "15 Feb 2026",
    date: "11 April 2026",
    title: "Bootstrap Guide",
    description: "Understand how to use Bootstrap in your.",
  },
  {
    id: 3,
    image: Img3,
    time: "15 Mar 2026",
    date: "12 April 2026",
    title: "JavaScript Tips",
    description: "Improve your JS skills with these tips.",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Blog</h2>
          <div className="subtitle">get the latest news and updates</div>
        </div>

        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href="#" className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
