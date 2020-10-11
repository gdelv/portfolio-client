import React from 'react';
import styled from 'styled-components';
import Container from '../components/shared/Container';
import Header from '../components/shared/Header';
import ProjectCard from '../components/shared/ProjectCard';
import { projects } from '../data';

const ProjectsContainer = styled.div`
    grid-template-rows: auto;
    display: grid;
    width: 80%;
    grid-template-columns: auto auto auto auto;
    @media (max-width: 1700px) {
        grid-template-columns: auto auto auto;
    }
    @media (max-width: 1300px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 660px) {
        grid-template-columns: auto;
    }
    grid-gap: 10px;
    padding: 10px;
    margin-top: 3em;
`;

const Projects = () => (
  <Container id="projects">
    <Header title="Projects" />
    <ProjectsContainer>
      {projects.map((card) => <ProjectCard card={card} key={card.id} />)}
    </ProjectsContainer>
  </Container>
);

export default Projects;
