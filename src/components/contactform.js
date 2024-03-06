import "./contactformstyles.css";
function Contactform(){
    return(
        <div className="contact-form">
            <h1 className="headingg">Say it to us!</h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Meaasage" rows="3"/>
                <button>Send</button>
            </form>
        </div>
    )
}
export default Contactform;