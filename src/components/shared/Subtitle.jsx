/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.h2`
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
  `;
const Subtitle = (props) => {
  const { title } = props;
  return (
    <StyledSubtitle>{title}</StyledSubtitle>
  );
};
export default Subtitle;
