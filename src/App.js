import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_APP_API;

  render() {
    return ( 
      <div>
        <NavBar />
        <News pageSize={6} country={"in"} category={"sports"} apiKey={this.apiKey}/>
      </div>
    )
  }
}

export default App