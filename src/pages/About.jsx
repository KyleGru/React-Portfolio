import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
    return (
        <Container>
            <Row className="d-flex flex-wrap justify-content-center align-items-center my-5">
                <Col md={4} className="text-center">
                    <img src="https://i.imgur.com/MfBzGfc.jpg" alt="Kyle Gruschow" className="img-fluid profile-image" width='200px' />
                </Col>
                <Col md={8}>
                    <h1 className="name">Kyle Gruschow</h1>
                    <h4 className="title">Junior Full Stack Web Developer</h4>
                    <section className="right-container text-left">
                        <p>
                            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
