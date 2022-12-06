import "../../styles/profileStyle.css";
import {CardImg, Col, Container, Row} from "react-bootstrap";
import {knowledgeArray} from "../../helperJavascript Files/knowledgeArray";
import {Card, CardBody, CardFooter} from "@chakra-ui/react";
import profileGif from "../../images/background.webp";
import {RiCheckboxBlankLine as RectIcon} from "react-icons/ri";
import {
    AiFillCloseCircle as CloseIcon,
    AiOutlineMinus as MinusIcon,
    AiOutlineFolderAdd as TerminalAddIcon
} from "react-icons/ai";
import {FaRegHandPeace as HelloIcon} from "react-icons/fa";
import {useState} from "react";

export default function HeroInfo() {
    const [closeButtonTextShow, setCloseButtonTextShow] = useState(false);

    return (
        <>
            <div className={'Header'}>
                <div className={'HeaderImage m-2'}>
                    <img src={profileGif} alt={'profileGif'}/>
                </div>
                <div className={'HeaderText m-2'}>

                    <div className={'bg-dark p-1 d-flex align-items-center justify-content-between'}>
                        <div className={'p-2 me-5'}><TerminalAddIcon size={20}/></div>
                        <div className={''}>
                            user@host
                        </div>
                        <div className={'d-flex justify-content-center align-items-center'}>
                            <MinusIcon className={'me-3'}/>
                            <RectIcon className={'HeaderRectangle me-3'}/>
                            <CloseIcon
                                onMouseOver={() => {
                                    if (!closeButtonTextShow) setCloseButtonTextShow(true);
                                    console.log('1')
                                }}
                                className={'closeButton me-1'}
                            />

                        </div>
                    </div>

                    <div className={'HeaderHello'}>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span>
                        </div>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span>
                        </div>
                        <div>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span>
                        </div>
                        <div className={' align-items-center'}>
                            <span className={"HeaderText1"}>user@host:</span>
                            <span className={"HeaderText2"}>~</span>
                            <span className={"HeaderText3"}>$</span> Sudo emoji!
                            <div className={'d-flex'}><HelloIcon/>..</div>
                        </div>
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
                        {
                            closeButtonTextShow ?
                                <div>
                                    <span className={"HeaderText1"}>user@host:</span>
                                    <span className={"HeaderText2"}>~</span>
                                    <span className={"HeaderText3"}>$</span> Well, pardon me young man, excuse the shit
                                    out of my goddamn French but did you just threaten me!?
                                </div>
                                : ""
                        }
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
                                        <CardImg className={'rounded'} style={{width: 70}} src={item.image}
                                                 alt={'tech logos'}/>
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