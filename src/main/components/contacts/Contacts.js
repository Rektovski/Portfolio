import "../../styles/contactsStyle.css";
import {Alert, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import emailjs from "emailjs-com";
import React, {useCallback, useEffect, useRef, useState} from "react";
import VisitCard from "./VisitCard";
import ReactCanvasConfetti from "react-canvas-confetti";

//********************FOR
//********************CONFETTI
//********************EFFECT
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function getAnimationSettings(originXA, originXB) {
    return {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 150,
        origin: {
            x: randomInRange(originXA, originXB),
            y: Math.random() - 0.2
        }
    };
}

export default function Contacts() {
    const [loading, setLoading] = useState(false);
    const [alertDanger, setAlertDanger] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        // if form is not filled it will not be sent by default because we use "required"
        // in all input brackets
        if (localStorage.getItem("dateSaver") === null || localStorage.getItem("dateSaver") === undefined) {
            let temp = new Date();
            let dateUserSubmittedForm = new Date(temp.getTime()); // 1999-01-01 for example
            localStorage.setItem("dateSaver", dateUserSubmittedForm.toString().split(" ")[0]);

            // We did not meet each other before so you can send me email
            setLoading(true);
            await emailjs
                .sendForm(
                    'service_tmxa0dr',
                    'template_yaeyoff',
                    form.current,
                    'Y-w-i3WhQ1WOF33bv')
                .then(result => console.log(result.text))
                .catch(error => console.log(error.text + "EmailJS, Invalid Form/Connection Lost/Connection Drop"));
            setLoading(false);
            startAnimation(); // happy animation
            setAlertSuccess(true);

            // now we need alert counter to hide it for example after 3 seconds...
            setTimeout(() => {
                setAlertSuccess(false);
            }, 5000);
        } else {
            let temp1 = new Date();
            // today
            let dateUserSubmittedForm = new Date(temp1.getTime()).toString().split(" ")[0];
            // 1999-01-01 for example
            // yesterday or any past date.
            temp1 = localStorage.getItem("dateSaver"); //

            if (dateUserSubmittedForm && temp1 && (dateUserSubmittedForm !== temp1)) {
                setLoading(true);
                await emailjs
                    .sendForm(
                        'service_tmxa0dr',
                        'template_yaeyoff',
                        form.current,
                        'Y-w-i3WhQ1WOF33bv')
                    .then(result => console.log(result.text))
                    .catch(error => console.log(error.text + "EmailJS, Invalid Form/Connection Lost/Connection Drop"));
                setLoading(false);
                startAnimation(); // happy animation

                // For securing ourselves from duplicating or deformatting data
                localStorage.removeItem("dateSaver");

                let temp = new Date();
                let today = new Date(temp.getDate());
                // Saving in the browser new date.
                localStorage.setItem("dateSaver", today.toString().split(" ")[0]);

                // Now we need alert of success. Something like... :)
                setAlertSuccess(true);

                // now we need alert counter to hide it for example after 3 seconds...
                setTimeout(() => {
                    setAlertSuccess(false);
                }, 5000);
            } else {
                // user tried to send me messages more than 1 time.
                setAlertDanger(true);

                // now we need alert counter to hide it for example after 3 seconds...
                setTimeout(() => {
                    setAlertDanger(false);
                }, 5000);
            }
        }


        e.target.reset();
    };

    // ***********************
    // ******CONFETTI*********
    // **************EFFECT***
    // ***********************
    const refAnimationInstance = useRef(null);
    const [intervalId, setIntervalId] = useState();

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const nextTickAnimation = useCallback(() => {
        if (refAnimationInstance.current) {
            refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
            refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
        }
    }, []);

    const startAnimation = useCallback(() => {
        if (!intervalId) {
            setIntervalId(setInterval(nextTickAnimation, 400));
            setTimeout(() => {
                clearInterval(intervalId);
                setIntervalId(null);
            }, 400);
        }
    }, [intervalId, nextTickAnimation]);

    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        };
    }, [intervalId]);
    // ***********************
    // ***********************
    // ***********************
    // ***********************

    return (
        <Container id={"contacts"} >
            <Row className={'d-flex justify-content-around'}>
                <Col sm={12} md={12} lg={8}>
                    <Form ref={form} onSubmit={sendEmail} className={'contactForm border rounded m-3 p-3'}>
                        <h1 className={'font-monospace text-center'}>
                            <div>Email Form:</div>
                        </h1>
                        <h4>
                            <div>You can send 1 mail per day. Just some security steps... 😎</div>
                            <div>Be aware with your choice!</div>
                        </h4>
                        <div className={''}>
                            <div className={'me-5'}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text" name={"name"} placeholder="Enter name" required/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" name={"email"} placeholder="Enter email" required/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Subject:</Form.Label>
                                    <Form.Control type="text" name={"subject"} placeholder="Enter subject" required/>
                                </Form.Group>
                            </div>

                            <div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Text:</Form.Label>
                                    <Form.Control className={'formTextarea'} type={"textarea"} as={"textarea"}
                                                  name={"text"} placeholder="Enter text" required/>
                                </Form.Group>
                            </div>
                        </div>

                        {
                            alertDanger ?
                                <Alert key={"danger"} variant={"danger"}>
                                    <Alert.Heading>Excuse me.. Come back tomorrow.</Alert.Heading>
                                    I can't take more than 1 email per day from you.
                                </Alert>
                                : ""
                        }

                        {
                            alertSuccess ?
                                <Alert key={"success"} variant={"success"}>
                                    <Alert.Heading>Nice to hear you.</Alert.Heading>
                                    I'll check your e-mail in 10 working days. See you soon ❤️
                                </Alert>
                                : ""
                        }

                        <div className={'d-flex'}>
                            <div className={'flex-fill'}></div>
                            {
                                loading ?
                                    <div className={"d-flex align-items-center"}>
                                        <Spinner style={{color: "lightgray"}} className={'me-2'} animation="grow"
                                                 role="status"></Spinner>
                                        <span className="">Loading...</span>
                                    </div>
                                    :
                                    <>
                                        <button className={'submitHoorayButton'}>Send Message</button>
                                        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles}/>
                                    </>
                            }
                        </div>
                    </Form>
                </Col>

                <Col className={'d-flex align-items-center justify-content-center'}>
                    <VisitCard/>
                </Col>
            </Row>
        </Container>
    )
}