import React, { Component } from 'react';
import logo from './logo.png';
import S from './S.png';
import './App.css';
import Users from "./Component/Users";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import User from "./Component/User";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider >
            <div className="App">

        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />


          <h1 className="App-title">Car Gallery <br/> Decentralized application</h1>
        </header>

        <div className="App-intro">
         <Users/>
        </div>
        </div></MuiThemeProvider>
    );
  }
}

export default App;
