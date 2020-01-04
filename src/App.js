import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Component/Login'
import Navbar from './Component/Navbar'
class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Login/>
     </div>
    )
  }
}

export default App;
