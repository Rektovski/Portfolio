import "../../styles/contactsStyle.css";
import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import emailjs from "emailjs-com";
import {useRef, useState} from "react";
import VisitCard from "./VisitCard";
import {AiOutlineArrowUp as ArrowUpIcon} from "react-icons/ai";

export default function Contacts() {
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        // if form is not filled it will not be sent by default because we use "required"
        // in all input brackets
        setLoading(true);
        await emailjs
            .sendForm(
                'service_tmxa0dr',
                'template_yaeyoff',
                form.current,
                'Y-w-i3WhQ1WOF33bv')
            .then(result => console.log(result.text))
            .catch(error => console.log(error.text));
        setLoading(false);
        e.target.reset();
    };

    return (
        <Container>
            <div className={'mt-5 text-center'}>
                <a href={'#projects'}>
                    <Button className={'toTheProjects'}>
                        <ArrowUpIcon size={40}/>
                    </Button>
                </a>
            </div>
            <Row className={'d-flex justify-content-around'}>
                <Col sm={12} md={12} lg={8}>
                    <Form ref={form} onSubmit={sendEmail} className={'contactForm border rounded m-3 p-3'}>
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

                        <div className={'d-flex'}>
                            <div className={'flex-fill'}></div>



                            {
                                loading ?
                                    <div className={"d-flex align-items-center"}>
                                        <Spinner style={{color: "lightgray"}} animation="grow" role="status"></Spinner>
                                        <span className="">Loading...</span>
                                    </div>
                                    :
                                    <Button variant="primary" type="submit" value={"send"}>
                                        Submit
                                    </Button>
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