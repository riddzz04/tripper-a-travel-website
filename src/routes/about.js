import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Aboutimg from "../images/aboutimg.jpg";
import Footer from "../components/footer";
import Aboutus from "../components/aboutus";
function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroimg={Aboutimg}
            title="ABOUT"
        />
        <Aboutus/>
        <Footer/>
        </>

    )
}
export default About;