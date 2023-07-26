import "../../design/profileStyle.css";
import {Container,} from "react-bootstrap";
import profileGif from "../../assets/background.webp";
import {RiCheckboxBlankLine as RectIcon} from "react-icons/ri";
import {
    AiFillCloseCircle as CloseIcon, AiOutlineMinus as MinusIcon,
    AiOutlineFolderAdd as TerminalAddIcon
} from "react-icons/ai";
import {FaRegHandPeace as HelloIcon} from "react-icons/fa";
import {useState} from "react";
import {reveal} from "../../helperJavascript Files/scrollAnimation";
import TechKnowledge from "./TechKnowledge";
import TechAchievements from "./TechAchievements";
import WorkExperience from "../WorkExperience";
import Education from "../Education";

export default function HeroInfo() {
    const [closeButtonTextShow, setCloseButtonTextShow] = useState(false);
    const [terminalHeight, setTerminalHeight] = useState(false);
    const [terminalMaximized, setTerminalMaximized] = useState(false);

    window.addEventListener('scroll', reveal);

    return (
        <>
            <Container>
                <div className={'Header'}>
                    <div className={'HeaderImage m-2'}>
                        <img src={profileGif} alt={'profileGif'}/>
                    </div>
                    <div className={`${!terminalMaximized ? "HeaderText" : "HeaderTextMaximized"} m-2`}>

                        <div className={'bg-dark p-1 d-flex align-items-center justify-content-between'}>
                            <div className={'p-2 me-5'}><TerminalAddIcon className={'TerminalAdd'} size={20}/></div>
                            <div className={''}>
                                user@host
                            </div>
                            <div className={'d-flex justify-content-center align-items-center'}>
                                <MinusIcon className={'HeaderMinus mx-3'}
                                           onClick={() => setTerminalHeight(!terminalHeight)}/>
                                <RectIcon className={'HeaderRectangle me-3'}
                                          onClick={() => setTerminalMaximized(!terminalMaximized)}/>
                                <CloseIcon
                                    onClick={() => {
                                        setCloseButtonTextShow(!closeButtonTextShow);
                                    }}
                                    className={'closeButton me-1'}
                                />
                            </div>
                        </div>

                        <div className={`${!terminalHeight ? "HeaderHello" : "HeaderHelloMinimized"}`}
                             style={terminalHeight ? {height: 0} : {}}>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span>
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span>
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span>
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}} className={' align-items-center'}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span> Sudo emoji!
                                <div className={'d-flex'}><HelloIcon/>..</div>
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span> Hello, I'm otto
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span> Junior Front-End developer
                            </div>
                            <div style={terminalHeight ? {display: 'none'} : {}}>
                                <span className={"HeaderText1"}>user@host:</span>
                                <span className={"HeaderText2"}>~</span>
                                <span className={"HeaderText3"}>$</span> Here are my skills and achievements
                            </div>
                            {
                                closeButtonTextShow ?
                                    <div style={terminalHeight ? {display: 'none'} : {}}>
                                        <span className={"HeaderText1"}>user@host:</span>
                                        <span className={"HeaderText2"}>~</span>
                                        <span className={"HeaderText3"}>$</span> Nope...
                                    </div>
                                    : ""
                            }
                        </div>
                    </div>

                </div>

                <div className={'KnowledgeBoxHeader'}>
                    Education
                </div>

                <Education/>

                <div className={'KnowledgeBoxHeader'}>
                    tech_Knowledge
                </div>

                <TechKnowledge />

                <div className={'reveal'}>
                    <div className={'KnowledgeBoxHeader'}>
                        Achievements
                    </div>
                    <TechAchievements />
                </div>

                <WorkExperience/>
            </Container>
        </>
    )
}