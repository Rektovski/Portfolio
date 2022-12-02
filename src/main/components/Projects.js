import {Col, Container, Row} from "react-bootstrap";
import "../styles/projectsStyle.css";
import {projectsList} from "../helperJavascript Files/projectsList";

export default function Projects() {
    const projects = projectsList.reverse();
    return (
        <Container fluid className={'p-5 projects'} id={"projects"}>
            <h3>Projects 2022 - Junior Starter Kit</h3>
            <Row>
                {
                    projects.map((item, id) => (
                        <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'g-5'}>
                            <a href={item.link} target={'_blank'} rel={'noreferrer'}>
                                <div className={'projects-card-style'}>
                                    <div className={'projectName font-monospace'}>{item.name}</div>
                                    <div className={'d-flex justify-content-center'}>
                                        <img className={'project-cards-img'} src={item.image} alt={item.alt}/>
                                    </div>
                                </div>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}