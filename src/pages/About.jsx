/* eslint-disable react/no-unescaped-entities */
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
                        Hey there! I'm Kyle Gruschow, a passionate learner and aspiring full stack web developer currently enrolled in an online Full Stack Web Development Bootcamp through UCLA. My journey into the world of coding began with a curiosity to understand how websites are built and a desire to create digital experiences that make a difference.<br></br>

                        <br></br>Throughout the bootcamp, I've had the opportunity to dive deep into various coding technologies, mastering languages like HTML, CSS, JavaScript, and frameworks like React.js and Node.js. I've also gained valuable experience working with databases such as MySQL and MongoDB, enabling me to build dynamic and interactive web applications.<br></br>

                        <br></br>What drives me in my journey as a web developer is the constant inspiration to keep learning and exploring new languages and technologies. The ever-evolving nature of the tech industry fuels my passion to stay updated with the latest trends and advancements. I believe that the key to success in this field lies in continuous learning and adapting to new challenges.<br></br>

                        <br></br>Beyond coding, I'm fueled by creativity and problem-solving. I enjoy collaborating with others to turn ideas into reality and strive to create meaningful and impactful solutions through my work. Join me on this exciting journey as I continue to expand my skills, tackle new challenges, and build innovative web experiences that make a difference.
                        </p>
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
