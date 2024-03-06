import "./destinationstyles.css";
import Image1 from "../images/dest1-1.jpg";
import Image2 from "../images/dest1-2.jpeg";
import Image3 from "../images/dest2-1.jpg";
import Image4 from "../images/dest2-2.jpg";
import DesinationData from "./destiationdata";

const Destination =() =>{
    return(
        <div className="destination">
            <h1>Popular Desinations</h1>
            <p>Beauty is in the eye of the beholder, come see it for yourself.</p>
            
            <DesinationData 
                    className="first-dest"
                    heading="Goa,India"
                    text="Goa is a paradise of positives. Its pristine beaches, influenced by Portuguese heritage, offer a unique blend of cultures. The lush landscapes  provide nature lovers with a haven of biodiversity. Goa's warm and diverse community creates a welcoming atmosphere for all visitors.The state's vibrant festivals and historic landmarks, like Old Goa's churches, add cultural richness. In Goa, one can find relaxation, adventure, culture, and culinary delights, making it a destination that leaves a lasting positive impression.
                    "
                    img1 = {Image1}
                    img2 ={Image2}
            />
             <DesinationData 
                    className="first-dest-reverse"
                    heading="Ladakh,India"
                    text="Ladakh, nestled in the northernmost part of India, is a land of awe-inspiring beauty and cultural richness. Its dramatic landscapes, characterized by towering Himalayan peaks and crystal-clear lakes, draw adventure seekers and nature enthusiasts alike. Ladakh's unique blend of Tibetan and Indian cultures is reflected in its monasteries, festivals, and cuisine. Beyond its natural and cultural splendors, Ladakh offers solitude and serenity, making it a haven for those seeking spiritual and inner peace.
                    "
                    img1 = {Image3}
                    img2 ={Image4}
            />

        </div>

    )
}
export default Destination;