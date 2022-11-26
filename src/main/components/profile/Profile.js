import "../../styles/profileStyle.css";
import HeroInfo from "./HeroInfo";
import Arrows from "../Arrows";
import HelloTypeWriter from "../HelloTypeWriter";

export default function Profile() {
    return (
        <>
            <div className={'profile-container'} id={"profile"}>
                <HeroInfo/>
                <Arrows/>
                <HelloTypeWriter/>
            </div>
        </>
    )
}