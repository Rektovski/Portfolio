import "../styles/footerStyle.css";

export default function Footer() {
    return (
        <div className={'footer text-center'}>
            <a
                href={"https://otarmurmanishvili.netlify.app/"}
                target={"_blank"}
                rel={"noreferrer"}
                className={'developer-box'}>
                Developer: "Otar Murmanishvili"
            </a>
        </div>
    )
}