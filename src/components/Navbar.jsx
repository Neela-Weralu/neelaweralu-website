import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/neela_logo.svg";
import "../styles/Navbar.css";

// Test

export default class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className="navbar" style={{ marginTop: "0px", marginBottom: "5px" }}>
            <div className="nav-center">
                <div className="nav-header">
                <Link to="/">
                    <img src={logo} alt="Beach Resort" style={{ width: "120px", height: "auto" }} />
                </Link>
                <button type="button" className="nav-btn" onClick={this.handleToggle} >
                    <FaAlignRight className="nav-icon" />
                </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}
