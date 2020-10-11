import React from 'react';
import styled from 'styled-components';
import Container from '../components/shared/Container';
import Header from '../components/shared/Header';
import Subtitle from '../components/shared/Subtitle';
import profile from '../images/Gheadshot.jpeg';

const splitText = () => {
  const text = 'Hi! I\'m Giusseppe. An NYC-based sofware engineer who enjoys taking on new challenges and creating user friendly apps. \n When I am not coding you can find me spending time with my twin girls or cooking up a new recipe in the kitchen.';
  return text.split('\n').map((value) => (
    <Subtitle title={value} key={value} />
  ));
};
const AboutContainer = styled.div`
  width: 80%;
`;

const AboutImage = styled.img`
display: block;
z-index: 9999;
height: 200px;
border-radius: 5px;
`;

const About = () => (
  <Container id="about">
    <Header title="About" />
    <AboutImage src={profile} alt="profile" />
    <AboutContainer>
      {splitText()}
    </AboutContainer>
  </Container>
);

export default About;
