import {Card, Col, Container, Row} from "react-bootstrap";
import "../styles/projectsStyle.css";
import GESA from '../images/GESA.png';
import marksman from "../images/marksman.png";

export default function ProjectsCards() {
    return (
        <Container fluid className={'p-5 projects'}>
            <h3>Projects 2022 - Junior Starter Kit</h3>
            <Row>
                <Col sm={12} md={6} lg={4} className={'m-3'}>
                    <a href={'https://geuropeanstudeisassosication.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>gesa.ge</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img src={GESA} alt={"GESA"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className={'m-3'}>
                    <a href={'https://marksmangeorgia.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>marksman.ge</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img src={marksman} alt={"GESA"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}