/**
 * Created by toon_lappie on 4/30/2017.
 */

const React = require('react');

import styled, {keyframes} from 'styled-components'

const Counter = styled.h2`
color: white;

> b {
  
}
`;
class PlayerCount extends React.Component {
    render() {
        return (
            <Counter>Right now there are <b>{this.props.players}</b> players online!
            </Counter>
        );
    }
}
module.exports = PlayerCount;