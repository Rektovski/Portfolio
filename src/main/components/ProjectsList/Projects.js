import {Button, Col, Container, Row} from "react-bootstrap";
import "../../styles/projectsStyle.css";
import {projects} from "./projects";
import {AiOutlineArrowDown as ArrowDownIcon, AiOutlineArrowUp as ArrowUpIcon} from "react-icons/ai";

export default function Projects() {
    return (
        <Container fluid className={'p-5 projects'} id={"projects"}>
            <div className={'text-center'}>
                <a href={'#hero'}>
                    <Button className={'toTheProjects'}>
                        <ArrowUpIcon size={40}/>
                    </Button>
                </a>
            </div>
            <h3>Projects 2022 - Junior Starter Kit</h3>
            <Row>
                {
                    projects.map((item, id) => (
                        <Col key={id} sm={12} md={6} lg={6} className={'g-5'}>
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
            <div className={'mt-5 text-center'}>
                <a href={'#contacts'}>
                    <Button className={'toTheProjects'}>
                        <ArrowDownIcon size={40}/>
                    </Button>
                </a>
            </div>
        </Container>
    )
}