import Profile from "./profile/Profile";
import Projects from "./ProjectsList/Projects";
import Footer from "./Footer";
import Contacts from "./contacts/Contacts";

export default function Main() {
    return (
        <>
            <Profile/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </>
    )
}