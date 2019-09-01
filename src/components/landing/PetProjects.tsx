import React from "react";
import styled from "styled-components";
import { Title, Heading, Description } from "../typography";
import Container from "../Container";

const Project = styled.div`
  line-height: 1.5;
  /* display: flex;
	flex-direction: column;
	align-items: flex-start; */

  display: grid;
  grid-template:
    "pic link" auto
    "pic desc" auto
    "pic ." 1fr / auto 1fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
`;

const Screenshot = styled.img`
  max-width: 100%;
  grid-area: pic;
`;

const PetProjects = () => {
  return (
    <Container>
      <Title>Pet Projects</Title>
      <Project>
        <Screenshot src="https://placeimg.com/64/64/any" />
        <a href="https://leananalytics.io">
          <Heading>LeanAnalytics.io</Heading>
        </a>
        <Description>A/B testing React apps made easy</Description>
      </Project>
      <Project>
        <Screenshot src={"https://placeimg.com/64/64/any"} />
        <a href="https://ui1.io">
          <Heading>ui1.io</Heading>
        </a>
        <Description>UI Kit Generator (Bootstrap + Sketch export)</Description>
      </Project>
    </Container>
  );
};

export default PetProjects;
