import React, { Component } from 'react'

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="fixed-top navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Instant News</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/Buisness">Buisness</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/Entertainment">Entertainment</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/General">General</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/Health">Health</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/Science">Science</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/Technology">Technology</a>
                            </li>         
                            <li className="nav-item"> 
                                <a className="nav-link active" href="/Sports">Sports</a>
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