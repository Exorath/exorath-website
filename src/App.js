import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
const Header = require('./components/Header.js');

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;
