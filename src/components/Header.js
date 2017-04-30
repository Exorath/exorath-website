/**
 * Created by toonsev on 4/29/2017.
 */

const React = require('react');
import Button from 'react-bootstrap/';
import styled, {keyframes} from 'styled-components'

const HeaderRoot = styled.header`
    display: flex;
    align-items: center;
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
`;

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
`;

const Title = styled.a`
    display: block;
    text-transform: uppercase;
    font-size: 1.2em;
    border-bottom: 0;
    color: #ffffff !important;
    padding: 0 1.5em 0 1.5em;
    text-decoration: none;
    
    &:hover {
        > span,strong {
        color: Maroon;}
      }
    > span {
    font-size: 0.4em;
    color: GhostWhite;
      
    }
`;

const NavLink = `    border-bottom: 0;
                color: #404040;
                display: block;
                font-size: 0.8em;
                font-weight: 900;
                letter-spacing: 0.075em;
                    padding: 0 2.0625em;
                text-decoration: none;
                text-transform: uppercase;
                transition: color 0.3s ease-in-out 0s;
                &:hover {
                  color: #c16161;
                }
                &:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: #000;
                    visibility: hidden;
                    -webkit-transform: scaleX(0);
                    transform: scaleX(0);
                    -webkit-transition: all 0.3s ease-in-out 0s;
                    transition: all 0.3s ease-in-out 0s;
                }
                &:hover:before {
                    visibility: visible;
                    -webkit-transform: scaleX(1);
                    transform: scaleX(1);
                }`
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
              ${NavLink}
            }
        }
    }
`;

const Ribbon = styled.div`
{
  position: absolute;
  right: -5px; top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px; height: 75px;
  text-align: right;
  
  pointer-events: none;
> span {
  font-size: 10px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
  line-height: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 100px;
  display: block;
  background: #79A70A;
  box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
  position: absolute;
  top: 19px; right: -21px;

}
}
`;
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
            <HeaderRoot class='.hidden-sm-down' id='home'>
                <Logo>
                    <Title href="index.html"><span>play.</span><strong>Exorath</strong><span>.com</span>
                        </Title>
                </Logo>
                <Nav id="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="generic.html">Forums</a></li>
                        <li><a href="generic.html">Support</a></li>
                        <li><Ribbon><span>Online</span></Ribbon><a href="generic.html">Store</a></li>
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