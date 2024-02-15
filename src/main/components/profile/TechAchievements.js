import "../../design/techAchievementStyle.css";
import {Col, Row} from "react-bootstrap";
import eolympLogo from "../../assets/projectImages/eolymp.png";
import {FaRegKeyboard as LanguageIcon} from "react-icons/fa";
import {TbDeviceDesktopAnalytics as RankIcon} from "react-icons/tb";
import {BiUser as UserIcon} from "react-icons/bi";


export default function TechAchievements() {
    return (
        <>
            <Row className={'AchievementsBox KnowledgeBox text-center text-light p-2'}>
                <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                    <div className={'d-flex justify-content-center align-items-center bg-info'}>
                        <img src={eolympLogo} alt={'eolympLogo'}/>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={8} xl={8} xxl={8}>
                    <div style={{fontSize: 24}}>Website for programmers to self-exercise
                        into the world of algorithms.
                    </div>
                    <div className={'d-flex justify-content-around p-3 text-center'} style={{textAlign: "left"}}>
                        <div>
                            <div>
                                <LanguageIcon style={{color: "white"}} size={60}/>
                            </div>
                            <div>
                                C++
                            </div>
                        </div>
                        <div>
                            <RankIcon size={60}/>
                            Top 200
                        </div>
                        <div>
                            <UserIcon size={60}/>
                            <a href={"https://www.eolymp.com/en/users/OtarMurmanishvili"}
                               target={"_blank"}
                               rel={"noreferrer"}
                               style={{color: "lightblue"}}
                            >
                                Link
                            </a>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                    In 2020, while covid-19 was on his top, I achieved more than 200 certificates in various possible
                    directions learning them by online.
                    Here is a link of all certificates that I have.
                    <a
                        href={'https://drive.google.com/drive/folders/1ntb7uv8ei_NsIVT5tO3fI25Eq-LJzbgX?usp=sharing'}
                        target={'_blank'}
                        style={{color: 'lightblue'}}
                        rel="noreferrer"
                    > Link</a>
                </Col>
            </Row>
        </>
    )
}
