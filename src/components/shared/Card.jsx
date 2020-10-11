/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const CardTitle = styled.h1`
font-size: 1.2rem;
font-family: 'Montserrat', sans-serif;
`;

const Card = (props) => {
  const { logo, name, image } = props.card;
  const CardContainer = styled.div`
        text-align: center;
        padding-top: 10px;
        &:hover {
            border: 1px solid gray;
            box-shadow: 4px 4px 5px gray;
            transform: scale(1.1);
            cursor: url(${image}), auto;    
        }
    `;
  return (
    <CardContainer>
      {logo}
      <CardTitle>
        {name}
      </CardTitle>
    </CardContainer>
  );
};

export default Card;
