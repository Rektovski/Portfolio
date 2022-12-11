import "../../styles/profileStyle.css";
import HeroInfo from "./HeroInfo";
import Arrows from "../Arrows";

export default function Profile() {
    return (
        <>
            <div id={"profile"}>
                <HeroInfo/>
                <Arrows/>
            </div>
        </>
    )
}