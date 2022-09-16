import {Card, Col, Container, Row} from "react-bootstrap";
import "../styles/projectsStyle.css";
import GESA from '../images/GESA.png';
import marksman from "../images/marksman.png";
import saunje from "../images/saunje.png";
import movies from "../images/movies.png";

export default function ProjectsCards() {
    return (
        <Container fluid className={'p-5 projects'}>
            <h3>Projects 2022 - Junior Starter Kit</h3>
            <Row>
                <Col sm={12} md={6} lg={4} className={'g-5'}>
                    <a href={'https://geuropeanstudeisassosication.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>gesa.ge</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img className={'project-cards-img'} src={GESA} alt={"GESA"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className={'g-5'}>
                    <a href={'https://marksmangeorgia.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>marksman.ge</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img className={'project-cards-img'} src={marksman} alt={"marksman"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className={'g-5'}>
                    <a href={'https://saunje.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>saunje.ge</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img className={'project-cards-img'} src={saunje} alt={"saunje"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col sm={12} md={6} lg={4} className={'g-5'}>
                    <a href={'https://filmebi.netlify.app/'} target={'_blank'} rel={'noreferrer'}>
                        <Card className={'projects-card-style'}>
                            <Card.Header>
                                <Card.Title>*Training - Movies</Card.Title>
                            </Card.Header>
                            <Card.Body className={'text-center'}>
                                <img className={'project-cards-img'} src={movies} alt={"movies"}/>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}