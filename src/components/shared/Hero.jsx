import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Button from './Button';
import Subtitle from './Subtitle';
import { Secondary } from '../../colors';
import ConnectInfo from './ConnectInfo';

const StyledHero = styled.section`
    font-weight: 600;
    width: 100%;
    height: 60%;
    font-size: 72px;
    color: black;
    background: ${Secondary};
`;
const StyledHeroContent = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 0 50px;
`;

const Hero = () => (
  <StyledHero id="home">
    <StyledHeroContent>
      <Title title="Hi, I'm Giusseppe." />
      <Subtitle title="I'm a software engineer with a passion for solving problems, learning new skills, and improving existing ones." />
      <Title title="Let's Connect!" />
      <ConnectInfo />
      <Button title="View Resume" target="_blank" onClick={() => window.open('https://drive.google.com/file/d/10QnAWpwkyFLujv9Wm74F-8ll6H8P0PUc/view', '_blank')} />
    </StyledHeroContent>
  </StyledHero>
);
export default Hero;
