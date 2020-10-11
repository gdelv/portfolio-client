/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Image from './Image';

const CardTitle = styled.h1`
font-size: 1rem;
font-family: 'Montserrat', sans-serif;
`;
const CardDescription = styled.p`
    font-size: .8rem;
    margin: 0;
    padding: .5em;
`;

const CardContainer = styled.div`
      text-align: center;
      padding-top: 10px;
      width: 100%;
      &:hover {
          border: 1px solid gray;
          box-shadow: 4px 4px 5px gray;
          transform: scale(1.1);
          cursor: pointer;    
      }
      overflow: hidden;
      max-height: 240px;
      margin: 1em 0;
`;
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 0;
`;

const Card = (props) => {
  const [height, setHeight] = useState(0);
  const {
    title, description, img, webLink, repoLink,
  } = props.card;
  const handleHover = () => {
    setHeight(-160);
  };
  const resetHover = () => {
    setHeight(0);
  };
  const InfoContainer = styled.div`
      width: 90%;
      height: 100%;
      display: flex;
      margin: 0 auto;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      top: ${height}px;
      left: 0;
      z-index: 2;
      background:white;
      transition: all 10s ease;
  `;
  return (
    <CardContainer onMouseEnter={handleHover} onMouseLeave={resetHover}>
      <Image src={img} alt="project" />
      <InfoContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ButtonContainer>
          <Button title="Repo Link" target="_blank" onClick={() => window.open(`${repoLink}`, '_blank')} />
          <Button title="Web Link" target="_blank" onClick={() => window.open(`${webLink}`, '_blank')} />
        </ButtonContainer>
      </InfoContainer>
    </CardContainer>

  );
};

export default Card;
