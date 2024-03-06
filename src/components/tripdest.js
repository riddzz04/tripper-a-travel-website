import Image1 from "../images/dest1-1.jpg";
import Image2 from "../images/dest1-2.jpeg";
import WeatherForecast from "./forcast";
import "./tripdeststyles.css";

function Tripdest(){
        return (
             <>
             <h1 className="dest-headingg">EXPERIENCE THE BEST OR ALL PLACES</h1>
                <div className="loc">
                    <div className="places" id="place1">
                        <div className="desti-text">
                            <div className="content">
                                <h2>Goa</h2>
                                <p>
                                "Goa is a paradise of positives. Its pristine beaches, influenced by Portuguese heritage, offer a unique blend of cultures. The lush landscapes  provide nature lovers with a haven of biodiversity. Goa's warm and diverse community creates a welcoming atmosphere for all visitors.The state's vibrant festivals and historic landmarks, like Old Goa's churches, add cultural richness. In Goa, one can find relaxation, adventure, culture, and culinary delights, making it a destination that leaves a lasting positive impression.
                            "     </p>
                            
                            </div>
                        </div>
                        <div className="imag">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984962.9467283923!2d73.34722614574983!3d15.348759664324652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1696812942052!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <WeatherForecast location="Goa,IN"/>
                       
                    </div>
                    <div className="places" id="place2">
                        <div className="desti-text">
                            <div className="content">
                                <h2>Ladakh</h2>
                                <p>
                                "Ladakh, nestled in the northernmost part of India, is a land of awe-inspiring beauty and cultural richness. Its dramatic landscapes, characterized by towering Himalayan peaks and crystal-clear lakes, draw adventure seekers and nature enthusiasts alike. Ladakh's unique blend of Tibetan and Indian cultures is reflected in its monasteries, festivals, and cuisine. Beyond its natural and cultural splendors, Ladakh offers solitude and serenity, making it a haven for those seeking spiritual and inner peace.
                    "
                                </p>
                            </div>
                        </div>
                        <div className="imag">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1693540.170269453!2d76.12245839894568!3d34.00035054527934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd86bce37d7139%3A0xc6c2990fdad28ac7!2sLadakh!5e0!3m2!1sen!2sin!4v1696817857037!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <WeatherForecast location="Leh"/>
                    </div>
                    <div className="places" id="place3">
                        <div className="desti-text">
                            <div className="content">
                                <h2>Agra</h2>
                                <p>"Agra, a city steeped in history and culture, is a jewel in the crown of India's heritage. Home to the iconic Taj Mahal, this UNESCO World Heritage site an architectural brilliance. Agra's rich Mughal legacy is evident in its majestic forts, like the Agra Fort, and splendid tombs. The city's markets offer a vibrant handicrafts and delicious street food, making it a paradise for shoppers and food enthusiasts. As the Yamuna River flows gracefully draws visitors into a timeless journey through India's captivating past."
                                </p>
                            </div>
                        </div>
                        <div className="imag">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.63893141127!2d77.89744033996509!3d27.17630304183705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1696817753624!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <WeatherForecast location="Agra"/>
                    </div>
                </div>
                
             </>
        );
    }
export default Tripdest;