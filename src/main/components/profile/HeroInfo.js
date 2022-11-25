import "../../styles/profileStyle.css";
import {AiOutlineArrowDown as ArrowDownIcon} from "react-icons/ai";
import {Button} from "react-bootstrap";

export default function HeroInfo() {
    return (
        <>
            <div >

                <div className={'portfolioOwnerInfo d-flex justify-content-around'}>
                    <div className={'text-center'}>
                        <h2>Software Knowledge</h2>
                        <div>
                            <ul style={{listStyleType: "none"}}>
                                <li className={'knowledge'}>C++</li>
                                <li className={'knowledge'}>Matlab</li>
                                <li className={'knowledge'}>HTML/JS/CSS</li>
                                <li className={'knowledge'}>React.js</li>
                                <li className={'knowledge'}>Bootstrap</li>
                                <li className={'knowledge'}>React-Bootstrap</li>
                            </ul>
                        </div>
                    </div>

                    <div className={'text-center'}>
                        <h2>Achievements</h2>
                        <div>
                            <ul style={{listStyleType: "none"}}>
                                <li className={'knowledge'}>C++ Top 200 => <a
                                    href={'https://www.eolymp.com/en/users/OtarMurmanishvili'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    User
                                </a></li>
                                <li className={'knowledge'}>University => <a
                                    href={'https://www.facebook.com/gtu.ge/posts/3540623606015672\''}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    Article
                                </a></li>
                                <li className={'knowledge'}>Book => <a
                                    href={'https://www.seu.edu.ge/uploads/files/News/kompiuteruli%20teqnologiebi%20(1).pdf'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    Book
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'mt-5 text-center'}>
                    <a href={'#projects'}>
                        <Button className={'toTheProjects'}>
                            <ArrowDownIcon size={40}/>
                        </Button>
                    </a>
                </div>


            </div>
        </>
    )
}