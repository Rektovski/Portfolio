import "../design/liveProjectsStyle.css";
import {Container} from "react-bootstrap";
import image1 from "../assets/liveProjecst/project1/1.png";
import image2 from "../assets/liveProjecst/project1/2.png";
import image3 from "../assets/liveProjecst/project1/3.png";
import image4 from "../assets/liveProjecst/project1/4.png";

export default function LiveProjects() {
    return (
        <>
            <Container>
                <div className={'liveProjectsSpace'}>
                    <div className={'liveProjectsTitle'}>
                        <div className={'liveProjectsTitleLive'}>Live</div>
                        <div className={'liveProjectsTitleProject'}>Projects:</div>
                    </div>
                    <div className={'liveProjects'}>
                        <div>#1</div>
                        <span style={{color: "red"}}>Title:</span> Hypermarket's tool for accountant operators.
                        <div>History:</div>
                        <div className={'historyText'}>
                            I was working at the job where you have to work with not only financial programs also with
                            the financial documents.
                            Some Documents had problems. It was not done at yesterday. So the Higher role workers, also
                            known as bosses,
                            was needed information what the "ehm" was going on with that documents. They only needed
                            info why for example document number 17
                            was not done yesterday.
                        </div>
                        <div className={'historyText'}>
                            I had to print each of these documents. I wrote with a pen on the top an explanation of why
                            it could not be completed the day before. Every time the boss asked for an explanation, I
                            had to find that document, figure out what the problem was, and give them a structured
                            answer.
                        </div>
                        <div className={'historyText'}>
                            Precisely because I was tired of printing so many documents, writing information on them,
                            searching for information that was difficult for me to find out, and bosses were only
                            interested in information, I created an application that would store all this online. Here
                            the boss could see information not only about my branch but also about all other branches. And if
                            he got lazy anyway, I would only have to ctrl+f, ctrl+c and ctrl+v. This made things much
                            easier.
                        </div>
                        <div className={'liveProjectsPart1'}>
                            <div className={'liveProjectImageSpace'}>
                                <img src={image1} alt={'foto of live project'} className={'liveProjectImage'}/>
                            </div>
                            <div>
                                Every user, including low and high roles, have to authenticate themselves.
                            </div>
                        </div>
                        <div className={'liveProjectsPart2'}>
                            <div className={'liveProjectImageSpace'}>
                                <img src={image2} alt={'foto of live project'} className={'liveProjectImage'}/>
                            </div>
                            <div>
                                <li>
                                    Low role users can mark the problematic documents with there id, date, company name
                                    and/or reason of its problem.
                                </li>
                                <li>
                                    Also they can edit or delete it.
                                </li>
                            </div>
                        </div>
                        <div className={'liveProjectsPart1'}>
                            <div className={'liveProjectImageSpace'}>
                                <img src={image3} alt={'foto of live project'} className={'liveProjectImage'}/>
                            </div>
                            <div>
                                <div>
                                    As operators, we have to contact with other companies.
                                </div>
                                <div>
                                    So we need the contact information of them. I added this part too.
                                </div>
                                <div>So Everytime I contact to the company I mark their number.</div>
                                <div>And the list is growing and growing...</div>
                            </div>
                        </div>
                        <div className={'liveProjectsPart2'}>
                            <div className={'liveProjectImageSpace'}>
                                <img src={image4} alt={'foto of live project'} className={'liveProjectImage'}/>
                            </div>
                            <div>
                                <div>
                                    High role users only need to see information why some
                                </div>
                                <div>document has not done yet. So they can choose which branch</div>
                                <div>do they want to check.</div>
                                <div>They also can add problems here but not edit or delete.</div>
                                <div>Cause it can ruin the job that operator has done.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}