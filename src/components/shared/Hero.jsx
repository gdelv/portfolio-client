import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';
import { Secondary } from '../../colors';

const StyledHero = styled.section`
    font-weight: 600;
    width: 100%;
    height: 60%;
    font-size: 72px;
    color: #fff;
    background: ${Secondary};
`;
const StyledHeroContent = styled.div`
    width: 80%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px 0 50px;
`;
const StyledHeroSocial = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;
const StyledLink = styled.a`
    color: black;
    font-size: 50px;
    :hover{
        color:white;
        opacity: .5;
    }
`;

const Hero = () => (
  <StyledHero style={{ color: 'black' }}>
    <StyledHeroContent>
      <Title title="Hi, I'm Giusseppe." />
      <Subtitle title="I'm a software engineer with a passion for solving problems, learning new skills, and improving existing ones." />
      <Title title="Let's Connect!" />
      <StyledHeroSocial>
        <StyledLink href="https://www.linkedin.com/in/giusseppe-del-vecchio/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" />
        </StyledLink>
        <StyledLink href="https://github.com/gdelv" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />

        </StyledLink>
        <StyledLink
          href="mailto:giudelvecchio@gmail.com?subject=Let's Connect!&body=Shoot me an email and I will respond ASAP."
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="far fa-envelope" />
        </StyledLink>
        <StyledLink href="tel:+15168643657">
          <i className="fas fa-phone" />
        </StyledLink>
      </StyledHeroSocial>
      <Button title="View Resume" target="_blank" onClick={() => window.open('https://drive.google.com/file/d/10QnAWpwkyFLujv9Wm74F-8ll6H8P0PUc/view', '_blank')} />
    </StyledHeroContent>
  </StyledHero>
);
export default Hero;
