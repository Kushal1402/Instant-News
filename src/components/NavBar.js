import React, { Component } from 'react'
import { Link } from "react-router-dom"
import newsicon from "../components/news-icon.png";
import homeIcon from "./home-icon.png"
import businessIcon from "./briefcase-icon.png"
import entertainmentIcon from "./entertainment-icon.png"
import healthIcon from "./health-icon.png"
import scienceIcon from "./science-icon.png"
import techIcon from "./technology-icon.png"
import sportIcon from "./basketball-icon.png"


class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="header fixed-top navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="web-brand navbar-brand d-flex align-items-center p-0 m-0" to="/">
                        <img src={newsicon} alt="" width="40" />
                        Instant News
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="d-flex align-items-center nav-link active" aria-current="page" to="/">
                                    <img src={homeIcon} alt="" width="40" height="40" />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="d-flex align-items-center nav-link active" to="/Buisness">
                                    <img src={businessIcon} alt="" width="40" height="40" />
                                    Buisness
                                </Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="d-flex align-items-center nav-link active" to="/Entertainment">
                                    <img src={entertainmentIcon} alt="" width="40" height="40" />
                                    Entertainment
                                </Link>
                            </li>                 
                            <li className="nav-item"> 
                                <Link className="d-flex align-items-center nav-link active" to="/Health">
                                    <img src={healthIcon} alt="" width="40" height="40" />
                                    Health
                                </Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="d-flex align-items-center nav-link active" to="/Science">
                                    <img src={scienceIcon} alt="" width="40" height="40" />
                                    Science
                                </Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="d-flex align-items-center nav-link active" to="/Technology">
                                    <img src={techIcon} alt="" width="40" height="40" />
                                    Technology
                                </Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="d-flex align-items-center nav-link active" to="/Sports">
                                    <img src={sportIcon} alt="" width="40" height="40" />
                                    Sports
                                </Link>
                            </li>        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default NavBar;