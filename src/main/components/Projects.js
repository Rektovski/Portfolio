import {CardImg, Col, Container, Row} from "react-bootstrap";
import "../styles/projectsStyle.css";
import {projectsList} from "../helperJavascript Files/projectsList";
import {Card, CardBody, CardHeader} from "@chakra-ui/react";

export default function Projects() {
    const projects = projectsList.reverse();
    return (
        <Container fluid className={'p-5 projects'} id={"projects"}>
            <div className={'ProjectsHeader text-center text-light'}>Projects</div>
            <Row>
                {
                    projects.map((item, id) => (
                        <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'g-5'}>
                            <a href={item.link} target={'_blank'} rel={'noreferrer'}>
                                <Card align='center' className={'text-light ProjectsCard'}>
                                    <CardHeader className={'ProjectsCardTitle text-center'}>
                                        {item.name}
                                    </CardHeader>
                                    <CardBody>
                                        <CardImg className={'rounded'} src={item.image} alt={'tech logos'}/>
                                    </CardBody>
                                </Card>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}