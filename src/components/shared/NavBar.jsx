import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { merge, tada, flip } from 'react-animations';
import logo from '../../images/gIcon.png';
import Hamburger from './Hamburger';
import Title from './Title';
import { Primary } from '../../colors';

const tadaFlip = merge(flip, tada);

const bounceModal = keyframes`${tadaFlip}`;

const StyledNav = styled.nav`
    max-width: 100%;
    min-height: 10vh;
    background: ${Primary};
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
`;
const LogoImg = styled.img`
    width: 100px;
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
  animation: ${bounceModal} 1.5s linear .3s 1 forwards;
`;
const NavBar = () => {
  const [buttonClassName, setButtonClassName] = useState('circle icon');
  const [modal, setModal] = useState(false);
  const changeClassName = () => (buttonClassName === 'circle icon' ? setButtonClassName('circle icon close') : setButtonClassName('circle icon'));
  const handleModal = () => {
    changeClassName();
    setModal(!modal);
  };

  const renderMainLinks = () => (
    <StyledNav>
      <div>
        <LogoImg src={logo} />
      </div>
      <Hamburger
        buttonClassName={buttonClassName}
        handleModal={handleModal}
      />
    </StyledNav>
  );
  // eslint-disable-next-line consistent-return
  const renderModal = () => {
    if (modal) {
      return (
        <StyledModal>
          <Title title="About" />
          <Title title="Skills" />
          <Title title="Projects" />
          <Title title="Contact" />
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
