import "./footerstyles.css";
const Footer =() =>{
    return(
    <div className="footer">
        <div className="top">
            <div>
                <h1>
                    Tripper
                </h1>
                <p>
                    Explore your favourite places
                </p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"/>
                </a>
                <a href="/">
                <i className="fa-brands fa-snapchat-square"/>
                </a>
                <a href="/">
                    <i className="fa-brands fa-whatsapp-square"/>
                </a>
            </div>
        </div>
        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Chnagelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">Github</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Help</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Others</h4>
                <a href="/">Terms of service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
            </div>
        </div>
    </div>
    )
}
export default Footer;