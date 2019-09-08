import React from "react";
import styled from "styled-components";
import { Title, Heading, Description } from "../typography";
import Container from "../Container";
import image1 from "../../images/screenshots/leananalytics-compressed.jpg";
import image2 from "../../images/screenshots/ui1-compressed.jpg";
import { ExternalLink } from "react-feather";
const Project = styled.div`
  line-height: 1.5;
  /* display: flex;
	flex-direction: column;
	align-items: flex-start; */

  display: grid;
  grid-template:
    "pic" auto
    "link" auto
    "desc" auto / 1fr;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Screenshot = styled.img`
  max-width: 100%;
  grid-area: pic;
`;

const Icon = styled(ExternalLink)`
  color: var(--gray);
  transform: scale(0.5);
  /* margin-left: 0.25ch; */
`;

const PetProjects = () => {
  return (
    <Container>
      <Title>Pet Projects</Title>
      <Project>
        <Screenshot src={image1} />
        <a href="https://leananalytics.io">
          <Heading>
            LeanAnalytics.io <Icon />
          </Heading>
        </a>
        <Description>A/B testing React apps made easy</Description>
      </Project>
      <Project>
        <Screenshot src={image2} />
        <a href="https://ui1.io">
          <Heading>
            UI1.io <Icon />
          </Heading>
        </a>
        <Description>UI Kit Generator (Bootstrap + Sketch export)</Description>
      </Project>
    </Container>
  );
};

export default PetProjects;
