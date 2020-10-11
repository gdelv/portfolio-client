import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
`;

const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  return (
    <StyledTitle>{title}</StyledTitle>
  );
};

export default Title;
