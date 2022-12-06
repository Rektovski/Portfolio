import {Col, Container, Row} from "react-bootstrap";
import "../styles/projectsStyle.css";
import {projectsList} from "../helperJavascript Files/projectsList";
import {Card, CardHeader} from "@chakra-ui/react";

export default function Projects() {
    const projects = projectsList.reverse();
    return (
        <Container fluid className={'p-5 projects'} id={"projects"}>
            <div className={'ProjectsHeader text-center text-light'}>Projects</div>
            <Row>
                {
                    projects.map((item, id) => (
                        <Col  key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'g-5'}>
                            <a href={item.link} target={'_blank'} rel={'noreferrer'}>
                                <Card align='center' className={'text-light ProjectsCard'}>
                                    <CardHeader className={'ProjectsCardTitle text-center'}>
                                        <div className={'pb-3'}>
                                            {item.name}
                                        </div>
                                        <img src={item.image} alt={'techlogo'}/>
                                    </CardHeader>
                                </Card>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}