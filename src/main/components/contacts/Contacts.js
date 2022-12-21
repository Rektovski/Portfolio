import "../../design/contactsStyle.css";
import {Alert, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import React, {useState} from "react";
import VisitCard from "./VisitCard";
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
    ModalCloseButton, Button, FormControl, FormLabel, useDisclosure, Input
} from '@chakra-ui/react'
import {FiSend as SendIcon} from "react-icons/fi";
import {HiOutlineMail as EmailIcon} from "react-icons/hi"
import {BsGoogle as GmailIcon} from "react-icons/bs";
import {ImLocation as LocationIcon, ImMobile as MobileIcon} from "react-icons/im";
import {FaFileDownload as DownloadIcon} from "react-icons/fa";
import resume from "../../PDF files/Otar_Murmanishvili_Resume.pdf";


export default function Contacts() {
    const [loading, setLoading] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");


    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const sendEmail = async () => {
        if (subject !== "" && email !== "" && text !== "") {
            setAlertSuccess(true);
            setLoading(true);
            setTimeout(() => {
                setSubject("");
                setEmail("");
                setText("");
                setAlertSuccess(false);
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <Container id={"contacts"}>
            <Row  className={'d-flex justify-content-around align-items-center'}>
                <Col sm={12} md={12} lg={8} className={'p-2'} style={{zIndex: 1}}>
                    <div className={'border bg-dark text-light p-4'}>
                        <div className={'text-center contactHeaderText'}>Contact</div>
                        <div className={'d-flex align-items-center contactTextVisual'}><GmailIcon className={'me-3'} size={20}/> murmanishvili94@gmail.com</div>
                        <hr /><div className={'d-flex align-items-center contactTextVisual'}><MobileIcon className={'me-3'} size={20}/> +995-558-142-959</div>
                        <hr /><div className={'pb-3 d-flex align-items-center contactTextVisual'}><LocationIcon className={'me-3'} size={20}/>Tbilisi, Georgia</div>
                        <div className={'resumeStyleSpace'}>
                            <div className={'resumeStyle'}>
                                <a href={resume} download>
                                    Resume
                                </a>
                                <DownloadIcon/>
                            </div>
                        </div>
                        <div className={'d-flex justify-content-end'}>
                            <Button
                                className={'p-3'}
                                leftIcon={<EmailIcon size={30}/>} colorScheme='teal'
                                    variant='solid' onClick={onOpen}>
                                Send me email
                            </Button>

                            <div>
                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                    size={"3xl"}
                                >
                                    <ModalOverlay/>
                                    <ModalContent>
                                        <ModalHeader>Write you e-mail:</ModalHeader>
                                        <ModalCloseButton/>
                                        <ModalBody>
                                            {
                                                alertSuccess ?
                                                    <Alert key={"success"} variant={"success"}>
                                                        <Alert.Heading>Nice to hear you.</Alert.Heading>
                                                        I'll check your e-mail in 10 working days. See you soon ❤️
                                                    </Alert>
                                                    : ""
                                            }
                                            <Form onSubmit={sendEmail}
                                                  action={"https://formspree.io/f/mlevqjav"}
                                                  method={"POST"}
                                            >

                                                <FormControl isRequired={true}>
                                                    <FormLabel>Subject</FormLabel>
                                                    <Input
                                                        onChange={(event) => {
                                                            setSubject(event.target.value)
                                                        }}
                                                        value={subject}
                                                        ref={initialRef} type={'text'} name={'name'}
                                                        placeholder='Enter your subject'
                                                        required/>
                                                </FormControl>

                                                <FormControl my={4} isRequired={true}>
                                                    <FormLabel>Email</FormLabel>
                                                    <Input
                                                        onChange={(event) => {
                                                            setEmail(event.target.value)
                                                        }}
                                                        value={email} type={'email'} name={'email'}
                                                        placeholder='Enter your email'
                                                        required/>
                                                </FormControl>

                                                <FormControl my={4} isRequired={true}>
                                                    <FormLabel>Text</FormLabel>
                                                    <Input
                                                        onChange={(event) => {
                                                            setText(event.target.value)
                                                        }}
                                                        value={text} style={{minHeight: "50px", maxHeight: "150px"}}
                                                        type={'textarea'} name={'textarea'} as={"textarea"}
                                                        placeholder='Enter your text' required/>
                                                </FormControl>

                                                <div className={"d-flex justify-content-end"}>
                                                    {
                                                        loading ?
                                                            <div className={"d-flex align-items-center"}>
                                                                <Spinner style={{color: "lightgray"}} className={'me-2'}
                                                                         animation="grow"
                                                                         role="status"></Spinner>
                                                                <span className="">Loading...</span>
                                                            </div>
                                                            :
                                                            <>
                                                                <Button type={'submit'} onSubmit={() => sendEmail()}
                                                                        className={'d-flex align-items-center justify-content-center'}>
                                                                    <div className={'me-3'}>
                                                                        Send
                                                                    </div>
                                                                    <SendIcon color={"blue"} size={30}/>
                                                                </Button>
                                                            </>
                                                    }
                                                </div>
                                            </Form>
                                        </ModalBody>
                                    </ModalContent>
                                </Modal>
                            </div>
                        </div>
                    </div>



                </Col>

                <Col className={'p-2'} >
                    <VisitCard/>
                </Col>
            </Row>
        </Container>
    )
}