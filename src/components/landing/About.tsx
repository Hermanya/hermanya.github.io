import React from "react";
import styled from "styled-components";
import { Title } from "../typography";
import Container from "../Container";

const ReactHighlight = styled.strong`
  color: #76c5f5;
`;

const NameHighlight = styled.em`
  color: #888888;
  font-style: normal;
`;

const CanadaHighlight = styled.em`
  color: #ec4d3d;
  font-style: normal;
`;

const JavascriptHighlight = styled.em`
  color: #f8cc46;
  font-style: normal;
`;

const About = () => {
  return (
    <Container>
      <Title as="h1">
        Hi, I'm <NameHighlight>Herman Starikov</NameHighlight>, a{" "}
        <ReactHighlight>React</ReactHighlight> Dev in Toronto,{" "}
        <CanadaHighlight>Canada</CanadaHighlight>. If you are into React,{" "}
        <JavascriptHighlight>Javascript</JavascriptHighlight>, Web, Programming,
        or just want to know what life is like in Toronto, follow me.
      </Title>
    </Container>
  );
};

export default About;
