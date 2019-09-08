import React from "react";
import styled from "styled-components";
import { Title, Description, PageTitle } from "../typography";
import me from "../../images/me-looking-right.png";
import Container from "../Container";

const mePreview =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='349' viewBox='0 0 400 349' version='1'%3e%3cpath d='M210 12l-8 1a111 111 0 0 0-33 11c-9 3-18 11-25 20-11 15-12 18-12 45-1 33 0 48 3 53 1 3 2 3 2 1 0-4 2-4 2-1l3 3c2 0 3 2 3 4 1 3 2 4 4 1 2-1 2-1 5 3l2 5v5l2 4v4c1 3 1 3-2 3h-4c-4-2-4-1 2 7l4 9 4 5 8 9 4 6 2 3 2 1 2 2c1 2 1 3 2 2l7 5 5 4 3 3 4 2 2 1 2 1 4 1c6 5 38 5 38 0l2-1 2-1c1-3 8-4 9-2v5l-1 5c-1 5-16 18-30 26l-15 9c-3 1-3 1-7-1l-11-6c-10-5-18-10-25-17l-5-5-1-15-1-15c-3 0-5 5-11 18l-4 12c-1 1-2 3-4 3l-15 7-57 25c-16 6-40 18-44 22a116 116 0 0 0-24 45 25943 25943 0 0 0 393-2c0-3-9-28-12-33s-9-10-23-20c-9-7-16-11-42-21a8944 8944 0 0 1-46-19c-5-1-5-2-7-13l-3-12c-4-7-3-18 3-27 4-8 9-18 10-23 0-3 0-2-2 2-3 9-9 17-12 17l-3 1h-2c-1-1-1 0-3 4l-3 5-1 2-3 3-4 3c-1 4-9 7-14 7l-3 1h-1l-4-1-12-3c0-2-3-4-4-3h-2c0-3-5-7-7-6-2 0-2 0-1-1 2-3 1-3-2 0-3 2-4 2-5 1l-4-4-3-4-1-2c-2 1-5-2-5-4l-1-2-2-1-2-4-3-5-1-3-1-1-1-7-2-7-2-4c-2-4-2-7-1-9l1-2 1-1 2 10c-1 1 0 3 1 4 1 2 1 2 1-5 0-8-2-14-4-15l-1-3-1-2c-1 0-1-11 1-14l5-17c0-2 1-4 3-5l6-6a81 81 0 0 1 24-24l5-2h1c-2 2-2 5 0 5l7-5 7-5 2-1 2-1v2c-2 2 0 1 3-1l3-2 2-1 2-2 3-4 2-4v3c0 4-4 16-8 19v3l16-16c3-3 5-3 3 0-1 3 1 6 3 5 1-1 2-1 4 1s2 3 2 8v4c4-3 8 4 5 7-1 1 1 5 5 11l3 5c1 2 1 2-2 2-2-1-7 0-12 1-8 2-9 2-15 9-7 8-8 11-3 19l3 10 1 17c1-1 2-8 1-10v-6c0-4 0-6-2-9-4-6-4-8-1-13 2-3 4-4 4-2l3-1c3-2 13-4 14-2 1 1 0 1-2 1-4 0-6 2-4 3 2 0 2 1 1 2-2 2 1 4 7 3 5 0 6 0 3 3-2 3 0 2 3 0s3-3 3-5c-1-2 0-3 1-4 2 0 2 0 5 8 4 14 2 31-6 34-3 1-5 5-5 13-1 8 0 8 1 0 1-4 5-10 7-10l2 3c1 2 1 2 1-2l2-9 2-8 2-6c3-7 5-36 3-51v-7l-1-2-1-4-3-7-3-9c1-2-4-8-12-16-6-4-8-7-8-8 1-3-5-10-10-11l-6-4c-1-1-2-2-3-1-2 0-11-5-16-9-3-3-13-4-16-3m-5 100l-7 1-5 2c-2 1-2 1-2-1 0-1-6 0-10 2-5 3-8 8-3 7l3-1 4-1 4-1c1-1 17 0 22 1 2 0 5 1 7 3 5 5 8 3 3-2l-2-4c1-1-5-6-8-6h-6m-11 11a192 192 0 0 0-11 2c-2 0-1 3 1 3l-1 1c-1 2-1 2 5 2l6-1 2-2c2-2 3-2 5 1 2 2 7 3 8 0h2c2 2 4 1 4-1 0-6-8-8-21-5m54 31l1 4c1 2-1 5-3 5l-4 3c-2 2-3 2-7 2-6-1-13-2-18-5-3-1-3-1-3 1 1 2 17 9 23 9 9 0 18-8 15-13l-1-3-1-3c-2-2-2-2-2 0m-5 26h-21c-16 0-20 0-21 2-1 1-1 1 1 1l6 3c5 3 13 6 13 4l-1-1-1-1 8-1 11 1c2 0 2 0 0 2l-7 1c-6-1-7 1-2 2 8 1 19-3 23-7l3-3v-2c-1-2-11-3-12-1' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e";

const Intro = styled.p`
  margin: 0;
  font-size: 22px;
  line-height: 1.45455;
  font-weight: 300;
  letter-spacing: 0.016em;
`;

const ReactHighlight = styled.span`
  background: var(--cyan);
  border-radius: 2px;
`;

const CanadaHighlight = styled.em`
  /* color: var(--red); */
`;

const JavascriptHighlight = styled.span`
  background: var(--yellow);
  border-radius: 2px;
`;

const TypescriptHighlight = styled.span`
  background: var(--blue);
  color: var(--background);
  border-radius: 2px;
`;

const Me = styled.div`
  width: 250px;
  height: 250px;
  align-self: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 125px;
  overflow: hidden;

  margin-bottom: 2rem;

  background-color: var(--gray);
  background-image: linear-gradient(62deg, var(--purple) 0%, var(--pink) 100%);

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const AboutContainer = styled(Container)`
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(to right, var(--gray5), var(--background));
  height: 100%;
`;

const About = () => {
  return (
    <AboutContainer>
      <Me>
        <img
          src={mePreview}
          alt=""
          style={{
            width: 250,
            height: 218,
            position: "absolute",
            fill: "var(--gray)",
            zIndex: 0
          }}
        ></img>
        <img
          src={me}
          width={250}
          style={{ zIndex: 1, position: "relative" }}
        ></img>
      </Me>
      <PageTitle as="h1">Herman Starikov</PageTitle>
      <Intro>
        I'm a Software Developer in Toronto,{" "}
        <CanadaHighlight>Canada</CanadaHighlight>. If you are into React,
        JavaScript, TypeScript, Web, or Programming in general, check out stuff
        I made.
      </Intro>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2">
        <path
          fill="var(--green)"
          fill-opacity="1"
          d="M 0,0   C 0,0, 1,2, 2,0   L 2,2   C 2,2, 1,0, 0,2    L0,0 Z"
        ></path>
      </svg> */}
    </AboutContainer>
  );
};

export default About;
