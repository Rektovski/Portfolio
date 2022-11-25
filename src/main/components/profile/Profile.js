import "../../styles/profileStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import {Component} from "react";
import HeroInfo from "./HeroInfo";

export default class Profile extends Component {
    render() {
        return (
            <Container fluid className={'profile-container'} id={"hero"}>
                <Row className={' text-center align-items-center p-3'}>
                    <Col sm={12} lg={6}>
                        <h1 className={'Owner-Specialization'}>Mr. Otar Murmanishvili</h1>
                        <h3 className={'Owner-Specialization'}>Junior Front-End Developer</h3>
                        <h3 className={'Owner-Specialization'}>Master of Engineering Physics</h3>
                    </Col>
                </Row>

                <HeroInfo/>
            </Container>
        )
    }
}