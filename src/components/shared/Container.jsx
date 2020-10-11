/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { White } from '../../colors';

const MainContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${White};
`;
const Container = ({ children, id }) => (
  <MainContainer id={id}>{children}</MainContainer>
);

export default Container;
