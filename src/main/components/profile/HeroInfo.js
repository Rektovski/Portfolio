import "../../styles/profileStyle.css";
import {CardImg, Col, Container, Row} from "react-bootstrap";
import {knowledgeArray} from "../../helperJavascript Files/knowledgeArray";
import {Card, CardBody, CardFooter} from "@chakra-ui/react";
import profileGif from "../../images/background.webp";

export default function HeroInfo() {
    return (
        <>
            <div className={'Header'}>
                <div className={'HeaderImage m-2'}>
                    <img src={profileGif} alt={'profileGif'}/>
                </div>
                <div className={'HeaderText m-2'}>
                    <div className={'bg-dark p-1 d-flex justify-content-between'}>
                        <div></div>
                        <div className={''}>
                            user@host
                        </div>
                        <div>X</div>
                    </div>
                    <div className={'HeaderHello'}>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span> Hello, I'm otto
                        </div>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span> Full-Stack Junior developer
                        </div>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span> Here are my skills and achievements
                        </div>
                    </div>
                </div>
            </div>
            <Container>

                <div className={'KnowledgeBoxHeader'}>
                    Tech Box
                </div>
                <Row style={{maxHeight: 600, overflow: "auto"}} className={'KnowledgeBox bg-dark text-light'}>
                    {
                        knowledgeArray.map((item, id) => (
                            <Col key={id} sm={6} md={4} lg={3} xl={2} xxl={2}>
                                <Card align='center' className={'text-light KnowledgeCard'}>
                                    <CardBody>
                                        <CardImg className={'rounded'} style={{width: 70}} src={item.image} alt={'tech logos'}/>
                                    </CardBody>
                                    <CardFooter className={'text-center'}>
                                        {item.name}
                                    </CardFooter>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}