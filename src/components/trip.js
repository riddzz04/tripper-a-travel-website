import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Serviceimg from "../images/serviceimg.png";
import Footer from "../components/footer";
import Tripheader from "./trip-header";
import Tripdest from "./tripdest";
import TripPlanner from "./tripplanner";
function Trip(){
    
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroimg={Serviceimg}
            title="PLAN YOUR TRIP"
        />
        <Tripheader/>
        <Tripdest/>
        <TripPlanner/>
        <Footer/>
        </>

    )
}
export default Trip;