import {Col, Container, Row} from "react-bootstrap";
import "../design/projectsStyle.css";
import {projectsList} from "../helperJavascript Files/projectsList";
import {reveal} from "../helperJavascript Files/scrollAnimation";

export default function Projects() {
    window.addEventListener('scroll', reveal);

    const projects = projectsList.reverse();

    return (
        <>
            <Container className={'p-5 projects reveal'} id={"projects"}>
                <div className={'ProjectsHeader text-center'}>Projects</div>
                <Row>
                    {
                        projects.map((item, id) => (
                            <Col key={id} sm={12} md={6} lg={4} xl={4} xxl={3} className={'g-5'}>
                                <a href={item.link} target={'_blank'} rel={'noreferrer'}>
                                    <div className={'text-light ProjectsCard'}>
                                        <div className={'ProjectsCardTitle rounded text-center'}>
                                            <div className={'p-3'}>
                                                {item.name}
                                            </div>
                                            <div className={'p-2'}>
                                                <img className={'rounded'} src={item.image} alt={'techlogo'}/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}