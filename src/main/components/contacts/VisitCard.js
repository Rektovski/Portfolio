import {
    AiFillFacebook as Facebook,
    AiFillGithub as GithubIcon,
    // AiOutlineCopy as Copy,
    AiFillLinkedin as LinkedIn
} from "react-icons/ai";
import "../../design/visitCardStyle.css";

export default function VisitCard() {
    // const mail = "murmanishvili94@gmail.com";
    //
    // const copy = async () => {
    //     await navigator.clipboard.writeText(mail);
    //     window.alert(`Copied!`);
    // }

    return (
        <>

            <div className={'VisitCard'} style={{zIndex: 0}}>
               <div className={'VisitCardHeader'}>Visit Card</div>
                <div className={'d-flex justify-content-center align-items-center'}>
                    <div className={'mx-2'}>
                        <a
                            href={'https://www.facebook.com/OtexRektovski/'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <Facebook size={50}
                                      className={'social-icons1'}
                            />
                        </a>
                    </div>
                    <div className={'mx-2'}>
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
                    <div className={'mx-2'}>
                        <a
                            href={'https://www.linkedin.com/in/otarmurmanishvili/'}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            <LinkedIn size={50}
                                      className={'social-icons3'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


{/*<div className={'d-flex justify-content-around align-items-center'}>*/
}
{/*    <div>*/
}
{/*        {`murmanishvili94@gmail.com`}*/
}
{/*    </div>*/
}
{/*    <Copy size={50} className={'copy-icon mx-4'} onClick={() => {copy()}}/>*/
}
{/*</div>*/
}