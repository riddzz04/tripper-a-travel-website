import React from "react";
import { Component } from "react";
import "./Navbarstyles.css";
import { MenuItems } from "./menuitems";
import { Link } from "react-router-dom";
class Navbar extends Component{
    state = {clicked:false};
    handleClick = () =>
    {
        this.setState({clicked : !this.state.clicked})
    }
    render(){
        return(
            <nav  className="NavbarItems">
                <h1 className="navbar-logo">Tripper</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className={this.state.clicked ? "nav-menu active": "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}>
                                <Link className={item.cname} to={item.url}>
                                    <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )                    
                    })}
                    
                </ul>
            </nav>
        )
    }
}
export default Navbar;