import Profile from "./profile/Profile";
import Projects from "./Projects";
import Footer from "./Footer";
import Contacts from "./contacts/Contacts";
import LiveProjects from "./LiveProjects";

export default function Main() {
    return (
        <>
            <Profile/>
            <Projects/>
            <LiveProjects />
            <Contacts/>
            <Footer/>
        </>
    )
}