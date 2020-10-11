import React from 'react';
import styled from 'styled-components';
import { Primary, White } from '../../colors';

const StyledButton = styled.button`
    background: ${Primary};
    color: ${White};
    outline: none;
    padding: 10px 15px;
    font-weight: 800;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    margin: 30px auto;
    font-size: .9rem;
    display: block;
    border: 2px solid black;
    font-family: 'Montserrat', sans-serif;
    &:hover {
      color: ${Primary};
      background: ${White};
      transform: scale(1.1);
      transition: all 1s ease;
    }

`;

const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, onClick } = props;
  return (
    <StyledButton onClick={() => onClick()}>{title}</StyledButton>
  );
};

export default Button;
