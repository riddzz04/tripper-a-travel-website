import Contactform from "../components/contactform";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Contactimg from "../images/contactimg.jpeg";
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroimg={Contactimg}
            title="CONTACT"
        />
        <Contactform/>
        <Footer/>
        </>

    )
}
export default Contact;