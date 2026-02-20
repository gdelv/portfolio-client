/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/gIcon.png';
import Hamburger from './Hamburger';
import { Primary } from '../../colors';
import Button from './Button';

const StyledNav = styled.nav`
    max-width: 100%;
    min-height: 10vh;
    background: ${Primary};
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`;
const LogoImg = styled.img`
    width: 80px;
    position: relative;
    top: 2vh;
    height: 6vh;
`;

const StyledModal = styled.div`
  min-height: 90vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  background: black;
  opacity: .93;
  color: white;
  z-index: 9999;
  overflow: hidden;
  border-top: .1px solid darkgray;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  &:hover {
    color: ${Primary};
    transition: color .25s ease;
  }
`;
const NavBar = (props) => {
  console.log(props);
  const [buttonClassName, setButtonClassName] = useState('circle icon');
  const [modal, setModal] = useState(false);
  const {
    aboutRef, skillsRef, projectsRef, contactRef,
  } = props;
  const changeClassName = () => (buttonClassName === 'circle icon' ? setButtonClassName('circle icon close') : setButtonClassName('circle icon'));
  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const handleHamburger = () => {
    changeClassName();
    setModal(!modal);
  };
  const handleModal = (ref) => {
    changeClassName();
    setModal(!modal);
    scrollTo(ref);
  };

  const renderMainLinks = () => (
    <StyledNav>
      <a href="#home">
        <LogoImg src={logo} />
      </a>
      <Hamburger
        buttonClassName={buttonClassName}
        handleHamburger={handleHamburger}
      />
    </StyledNav>
  );
  // eslint-disable-next-line consistent-return
  const renderModal = () => {
    if (modal) {
      return (
        <StyledModal>
          <Button title="About" onClick={() => handleModal(aboutRef)} />
          <Button title="Skills" onClick={() => handleModal(skillsRef)} />
          <Button title="Projects" onClick={() => handleModal(projectsRef)} />
          <Button title="Contact" onClick={() => handleModal(contactRef)} />

          {/* <StyledLink href="#about" onClick={handleModal}>About</StyledLink>
          <StyledLink href="#skills" onClick={handleModal}>Skills</StyledLink>
          <StyledLink href="#projects" onClick={handleModal}>Projects</StyledLink>
          <StyledLink href="#contact" onClick={handleModal}>Contact</StyledLink> */}
        </StyledModal>
      );
    }
  };
  return (
    <>
      { renderMainLinks() }
      { renderModal() }
    </>
  );
};

export default NavBar;
