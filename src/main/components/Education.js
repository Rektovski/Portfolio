import "../design/techBoxStyle.css";
import "../design/educationStyle.css";

export default function Education() {


    return (
        <>
            <div style={{maxHeight: 1200, overflow: "auto"}} className={'educationSpace'}>
                    <div className={'universityTitle'} >
                        Georgian Technical University - Master Degree
                    </div>
                    <div className={'university'}>
                        <div className={'universityDescriptionSpace'}>
                            <div className={'universityDescription'}>Faculty: Informatics and Control Systems</div>
                            <div className={'universityDescription'}>Program: Engineering Physics</div>
                            <div className={'universityDescription'}>Sub-Program: Forensic Examination - Criminology</div>
                            <div className={'universityDescription'}>Project Title - "Preventive methods of accidents caused
                                by driving a motor vehicle at an inappropriate velocity"
                            </div>
                        </div>
                        <iframe
                            src="https://www.youtube.com/embed/SbiPwf1oH6c?start=50"
                            className={'universityMasterProjectVideo'}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>

            </div>
        </>
    )

}