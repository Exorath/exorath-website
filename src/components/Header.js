/**
 * Created by toonsev on 4/29/2017.
 */

const React = require('react');

import styled from 'styled-components'

const HeaderRoot = styled.header`
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-align-items: center;
    -webkit-align-items: center;
    -ms-align-items: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    background-color: #ffffff;
    height: 3.75em;
    line-height: 3.75em;
    box-shadow: inset 0 -1px 0 0 #dbdbdb;
    overflow: hidden;
    font-size: 16pt;
    font-family: "Source Sans Pro", Helvetica, sans-serif;
`

const Logo = styled.div`
    background-color: #c16161;
    color: #ffffff;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    display: block;
    white-space: nowrap;
    &:last-child {
        margin-bottom: 0;
    }
`

const Title = styled.a`
    display: block;
    text-transform: uppercase;
    font-size: 1em;
    border-bottom: 0;
    color: #ffffff !important;
    padding: 0 3em 0 1.5em;
    text-decoration: none;
    > span {
      margin-left: 0.5em;
    font-size: 0.9em;
    color: GhostWhite;
    &:hover {
        color: IndianRed;
      }
      
    }
`
const Nav = styled.nav`
    -moz-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0;
    cursor: default;
    > ul {
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-justify-content: -moz-flex-end;
        -webkit-justify-content: -webkit-flex-end;
        -ms-justify-content: -ms-flex-end;
        justify-content: flex-end;
        list-style: none;
        margin: 0;
        padding: 0;
        > li {
            border-left: solid 1px #f4f4f4;
            display: block;
            margin: 0;
            padding: 0;
            position: relative;
            > a {
                border-bottom: 0;
                color: #404040;
                display: block;
                font-size: 0.8em;
                font-weight: 900;
                letter-spacing: 0.075em;
                    padding: 0 2.0625em;
                text-decoration: none;
                text-transform: uppercase;
            }
        &:firstChild {
          border-left: 0;
        }
        }
    }
`
class Header extends React.Component {
    getInitialState() {
        return {
            window: {
                height: 0,
                width: 0
            }
        };
    }

    updateDimensions() {
        return this.setState({
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    }

    render() {
        return (
            <HeaderRoot id='home'>
                <Logo>
                    <Title href="index.html"><strong>Exorath</strong>
                        <span>play.exorath.com</span></Title>
                </Logo>
                <Nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="generic.html">Store</a></li>
                        <li><a href="generic.html">Forums</a></li>
                        <li><a href="generic.html">Support</a></li>
                    </ul>
                </Nav>
            </HeaderRoot>
        );
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        return window.addEventListener('resize', this.updateDimensions);
    }
}
module.exports = Header;