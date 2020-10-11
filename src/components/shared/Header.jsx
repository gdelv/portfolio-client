import React from 'react';
import styled from 'styled-components';
import { Primary } from '../../colors';

const StyledHeader = styled.div`
    width: 100%;
    height: 150px;
    text-align:center;
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin: 0;
`;

// eslint-disable-next-line react/prop-types
const Header = ({ title }) => (
  <StyledHeader>
    <p>
      {title}
    </p>
    <span style={{
      display: 'inline-block',
      position: 'relative',
      top: '-1.4em',
      color: Primary,
      opacity: 0.6,
      fontSize: '100px',
      zIndex: '-1',
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
    }}
    >
      {title[0]}
    </span>
  </StyledHeader>
);

export default Header;
