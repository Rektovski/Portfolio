import "../../styles/profileStyle.css";
import {Col, Container, Row} from "react-bootstrap";
import {knowledgeString} from "../../helperJavascript Files/knowledgeString";

export default function HeroInfo() {
    return (
        <>
            <Container>

                <Row className={'d-flex justify-content-around'}>
                    <Col className={'heroInfoCard m-4 text-center'}>
                        <h2>Hard Skills</h2>
                        <div>
                            <div>
                                const knowledge = [{knowledgeString}]
                            </div>
                        </div>
                    </Col>

                    <Col className={'heroInfoCard m-4 text-center'}>
                        <h2>Achievements</h2>
                        <div>
                            <div>C++</div>
                            <div>Top 200 - Eolymp.com</div>
                            <a
                                className={'cppLink'}
                                href={'https://www.eolymp.com/en/users/OtarMurmanishvili'}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                User
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}