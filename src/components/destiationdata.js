import { Component } from "react";
import "../components/destinationstyles.css";
import Image1 from "../images/dest1-1.jpg";
import Image2 from "../images/dest1-2.jpeg";

class DesinationData extends Component{
    render() {
        return (
             <>
                <div className={this.props.className}>
                    <div className="dest-text">
                        <h2>{this.props.heading}</h2>
                        <p>
                            {this.props.text}
                        </p>
                    </div>
                    <div className="image">
                        <img alt="img1" src={this.props.img1}/>
                        <img alt="img2" src={this.props.img2}/>
                    </div>
                    
                </div>
                
             </>
        );
    }
}
export default DesinationData;