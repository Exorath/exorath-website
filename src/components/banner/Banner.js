/**
 * Created by toon_lappie on 4/30/2017.
 */

const React = require('react');

import styled, {keyframes} from 'styled-components'

const PlayerCount = require('./PlayerCount.js');

const BannerImg = styled.img`
  margin-top: 1vh;
  max-height: 65vh;
  max-width: 95%;
`;
const BannerDiv = styled.div`
  flex-grow: 1;
  width: 100%;
  background: #000000 url(https://i.imgur.com/j1pyC5h.jpg) no-repeat center bottom;
      background-size: cover;
`;
const InfoDiv = styled.div`
    max-height: 10vh
`
class Banner extends React.Component {
    render() {
        return (
            <BannerDiv>
                <div>
                    <BannerImg src="/images/EXORATH_TRANS.png" alt="Exorath"/>
                </div>
                <InfoDiv>
                    <PlayerCount players="363"/>
                    <a href="https://exorath.com/news" role="button">More
                        information</a>
                </InfoDiv>
            </BannerDiv>
        );
    }
}
module.exports = Banner;