import Destination from "../components/destination";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Homeimg from "../images/homeimg.jpeg";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroimg={Homeimg}
            title="Your Journey Your story"
            text="create your own story with us"
            btntext="Travel Plan"
            url="/service"
            btnclass="show"
        />
        <Destination/>
        <Footer/>
        </>

    )
}
export default Home;