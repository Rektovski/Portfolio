import "../styles/helloTypeWriter.css";

export default function HelloTypeWriter() {
    return (
        <div className={'errorMessage d-flex justify-content-end'}>
            <div className={'css-typing'}>
                <p className={"typerText"}>Hi. I'm Otto! </p>
                <p className={"typerText"}>Junior Front-end Developer</p>
            </div>
        </div>
    )
}