import "../styles/contactsStyle.css";
import {Card} from "react-bootstrap";
import {AiFillFacebook as Facebook, AiOutlineCopy as Copy} from "react-icons/ai";
import {AiFillGithub as GithubIcon} from "react-icons/ai";

export default function Contacts() {
    const mail = "murmanishvili94@gmail.com";

    const copy = async () => {
        await navigator.clipboard.writeText(mail);
        window.alert(`Copied!`);
    }

    return (
        <div id={"contacts"} className={'contactCard'}>
            <Card className={'helicopterHelicopter'}>
                <Card.Header className={'text-center'}>
                    <Card.Title>
                        Visit Card
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className={'d-flex justify-content-around align-items-center'}>
                        <div>
                            {`murmanishvili94@gmail.com`}
                        </div>
                        <Copy size={50} className={'copy-icon mx-4'} onClick={() => {copy()}}/>
                    </div>
                    <div className={'d-flex justify-content-around align-items-center my-3'}>
                        <a
                            href={'https://www.facebook.com/OtexRektovski/'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Facebook size={50}
                                      className={'social-icons1'}
                            />
                        </a>
                        <a
                            href={'https://github.com/Rektovski'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <GithubIcon size={50}
                                        className={'social-icons2'}
                            />
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}