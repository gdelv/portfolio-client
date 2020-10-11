import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 200px;
  border-radius: 5px;
  max-width: 100%;
  display: inline-block;
  margin: 0;
  vertical-align: top;
  border: 0;
  `;
const Image = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    src, alt, onClick,
  } = props;
  return (
    <StyledImage src={src} alt={alt} onClick={onClick} />
  );
};

export default Image;
