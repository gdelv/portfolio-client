import React from 'react';
import styled from 'styled-components';
import { Primary } from '../../colors';

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
        color: ${Primary};
        transition: color .5s ease;
    }
`;
const ConnectInfo = () => (
  <>
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
  </>
);

export default ConnectInfo;
