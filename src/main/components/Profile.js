import profile_picture from "../images/profile-picture-2.jpg";
import "../styles/profileStyle.css";
import {Accordion, Card, Col, Container, Row} from "react-bootstrap";

export default function Profile() {
    return (
        <Container fluid className={'profile-container'}>
            <Row className={'text-center align-items-center p-3'}>
                <Col sm={12} lg={6} className={"visit-card"}>
                    <h1 className={'Owner-Specialization'}>Mr. Otar Murmanishvili</h1>
                    <h3 className={'Owner-Specialization'}>Junior Front-End Developer</h3>
                    <h3 className={'Owner-Specialization'}>Master of Engineering Physics</h3>
                </Col>
                <Col sm={12} lg={6}>
                    <img src={profile_picture} alt={'profile'} className={'profile-img '}/>
                </Col>
            </Row>
            <div className={'text-center'}>
                <Accordion className={'accordion-style'} defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={'text-center'}>Software Knowledge</Accordion.Header>
                        <Accordion.Body>
                            <Card>
                                <Card.Body className={'d-flex justify-content-around text-center'}>
                                    <Row className={'align-items-center'}>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>C++</Card.Text>
                                        </Col>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>Matlab</Card.Text>
                                        </Col>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>HTML/JS/CSS</Card.Text>
                                        </Col>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>React.js</Card.Text>
                                        </Col>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>Bootstrap</Card.Text>
                                        </Col>
                                        <Col sm={12} lg={4}>
                                            <Card.Text className={'knowledge'}>React-Bootstrap</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={"2"}>
                        <Accordion.Header>Achievements</Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col className={'knowledge'} sm={12} lg={4}>Olympiad Competitive Account => <a
                                    href={'https://www.eolymp.com/en/users/OtarMurmanishvili'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    User
                                </a></Col>
                                <Col className={'knowledge'} sm={12} lg={4}>University’s article about me => <a
                                    href={'https://www.facebook.com/gtu.ge/posts/3540623606015672\''}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    Article
                                </a></Col>
                                <Col className={'knowledge'} sm={12} lg={4}>Book’s co-author about students' online
                                    personal data security during covid-19 => <a
                                        href={'https://www.seu.edu.ge/uploads/files/News/kompiuteruli%20teqnologiebi%20(1).pdf'}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                    >
                                        Book
                                    </a></Col>
                                <Col>
                                    <a href={'#contacts'}>
                                        Come and get me...
                                    </a>
                                </Col>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </Container>
    )
}