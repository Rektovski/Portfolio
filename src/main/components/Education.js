import "../design/techBoxStyle.css";
import "../design/educationStyle.css";

export default function Education() {


    return (
        <>
            <div style={{maxHeight: 1200, overflow: "auto"}} className={'KnowledgeBox educationSpace p-5'}>
                <ul>
                    <li className={'universityTitle'}>
                        Georgian Technical University - Master Degree
                    </li>
                    <div className={'university'}>
                        <div className={'universityDescription'}>Faculty: Informatics and Control Systems</div>
                        <div className={'universityDescription'}>Program: Engineering Physics</div>
                        <div className={'universityDescription'}>Sub-Program: Forensic Examination - Criminology</div>
                        <div className={'universityDescription'}>Project Title - "Preventive methods of accidents caused
                            by driving a motor vehicle at an inappropriate velocity"
                        </div>
                        <div className={'universityDescription universityDescriptionDetails'}>
                            Description:

                            <div>
                                &emsp;&emsp;When I suggested to the lecturers, that since they wanted something new, I
                                would write
                                physics formulas in C++ (I train students in algorithmization. So why not!?), they got
                                positron-electronic emotions on it.
                                <ol className={'universityOLspace'}>
                                    <li>Otar, it's good that you include programming.</li>
                                    <li>It's a shame that we don't know programming. We are physicists and we need
                                        formulas.
                                    </li>
                                </ol>
                                &emsp;&emsp;I got up accordingly and used my Front-enshtain skills. I organized a
                                website that discussed one
                                specific scenario of an expert investigation of the Ministry of Internal Affairs.

                                The rest of the students were brought out and finished in 5-10 minutes.
                                I left... 1 hour and 30 minutes...

                                <div className={'universityDescriptionDetailsResult'}>
                                    Reactions!?
                                </div>

                                <ol className={'universityOLspace'}>
                                    <li>
                                        *Slaps on the table*: We should call the Ministry of Internal Affairs... This
                                        should become
                                        a project.
                                    </li>
                                    <li>
                                        Boy can you imagine how much easier that makes things.
                                    </li>
                                    <li>
                                        This is the future, and it's better than calculating on paper, right?
                                    </li>
                                    <li>
                                        Mathematical proof of vector sketches by the point of view of geometry,
                                        explained by point of view physics and presented as website project using
                                        programming - Great work bachelor... (This was little bit sarcastic, cause for that moment I was fighting for master degree.)
                                    </li>
                                </ol>



                                All this led to the fact that the phrase "we want news" could not be explained to me for
                                2
                                years.
                                Innovation itself means two things.. invention, creative approach. Due to
                                misunderstanding,
                                I pressed both of them. A small shift in physics in the form of an invention and its
                                presentation in the creative part..

                                <div className={'universityDescriptionDetails'}>
                                    <div className={'universityDescriptionDetailsResult'}>
                                        Results!?
                                    </div>
                                    That particular scenario doesn't need a physicist anymore. Even a pupil will do it.
                                    The only thing I remember as a funny moment is that defense means you have to be asked
                                    questions and you have to not only answer on it also you need to defend the topic in the debate.
                                    After the first question, they argued with each other about the
                                    answer for 15 minutes and that's how it ended... 🤣😂
                                </div>
                            </div>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/SbiPwf1oH6c?start=50"
                            className={'universityMasterProjectVideo'}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>

                </ul>
            </div>
        </>
    )

}