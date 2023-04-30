import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APP_API;

  render() {
    return ( 
      <div>
        <Router>
          <NavBar />

          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={6} country="in" category="general" apiKey={this.apiKey}/>} />          
            <Route exact path='/Buisness' element={<News key="Buisness" pageSize={6} country="in" category="Buisness" apiKey={this.apiKey}/>} />          
            <Route exact path='/Entertainment' element={<News key="Entertainment" pageSize={6} country="in" category="Entertainment" apiKey={this.apiKey}/>} />          
            <Route exact path='/Health' element={<News key="Health" pageSize={6} country="in" category="Health" apiKey={this.apiKey}/>} />          
            <Route exact path='/Science' element={<News key="Science" pageSize={6} country="in" category="Science" apiKey={this.apiKey}/>} />          
            <Route exact path='/Technology' element={<News key="Technology" pageSize={6} country="in" category="Technology" apiKey={this.apiKey}/>} />          
            <Route exact path='/Sports' element={<News key="Sports" pageSize={6} country="in" category="Sports" apiKey={this.apiKey}/>} />          
          </Routes>

        </Router>
      </div>
    ) 
  }
}

export default App