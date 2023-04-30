import React, { Component } from 'react'
import { Link } from "react-router-dom"

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="fixed-top navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Instant News</Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Buisness">Buisness</Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="nav-link active" to="/Entertainment">Entertainment</Link>
                            </li>                 
                            <li className="nav-item"> 
                                <Link className="nav-link active" to="/Health">Health</Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="nav-link active" to="/Science">Science</Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="nav-link active" to="/Technology">Technology</Link>
                            </li>         
                            <li className="nav-item"> 
                                <Link className="nav-link active" to="/Sports">Sports</Link>
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