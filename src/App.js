import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Header from './Pages/Header';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
