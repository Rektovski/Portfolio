import "../design/workExperienceStyle.css";
import {Container} from "react-bootstrap";
import {workplaceArray} from "../helperJavascript Files/workplaceArray";

export default function WorkExperience() {
    return (
        <>
            <Container>
                <div className={'workExperience reveal'}>
                    <div className={'workExperienceHeader'}>
                        Work Experience
                    </div>
                    <div className={'workExperienceBody'}>
                        {
                            workplaceArray.map((item, id) => (
                                <div key={id} className={'p-3'}>
                                    <div
                                        className={'workExperienceWorkTitle'}>{`${workplaceArray.length - id}.) ${item.name}`}</div>
                                    <div className={'workExperienceWorkDescription'}>
                                        <div>Position: {item.position}</div>
                                        <div>Depart/Categ: {item.department}</div>
                                        <div>Date: {item.date}</div>
                                        {
                                            item.link && <div>
                                                Link: <a href={'https://cpp-otto.netlify.app/'}
                                                         target={'_blank'}
                                                         rel={'noreferrer'}
                                                         style={{color: "lightblue"}}
                                            >{item.link}</a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}