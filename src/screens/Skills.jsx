import React from 'react';
// import styled from 'styled-components';
import Container from '../components/shared/Container';
import Grid from '../components/shared/Grid';
import Header from '../components/shared/Header';
import { languages } from '../data';

const Skills = () => (
  <Container>
    <Header title="Skills" />
    {/* Grid Component */}
    <Grid cardsArr={languages} />
  </Container>
);

export default Skills;
