import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route }
 from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutme from './components/pages/Aboutme';
import JoinMe from './components/pages/JoinMe';



function App() {
  return (
    <>
    <Router>
       <Navbar />  
       <Switch>
         <Route path='/'exact component = {Home} />
         <Route path='/services' component = {Services} />
         <Route path='/about me' component = {Aboutme} />
         <Route path='/join me' component = {JoinMe} />

       </Switch>
    </Router>
      
    </>
  );
}

export default App;
