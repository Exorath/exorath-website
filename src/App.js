import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
const Header = require('./components/Header.js');

const Banner = require('./components/banner/Banner.js');

const AppStyle = {
  "display" : "flex",
    "flex-direction" : "column",
    "height" : "100vh"
};
class App extends Component {
    render() {
        return (
            <div className="App" style={AppStyle}>
                <Header/>
                <Banner/>
            </div>
        );
    }
}

export default App;
