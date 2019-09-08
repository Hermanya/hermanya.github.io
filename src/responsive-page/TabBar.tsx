import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const TabBarLink = styled(Link)`
  width: 64px;
  font-size: 0.7rem;
  letter-spacing: -0.022em;
  text-decoration: none;
  text-align: center;
  svg {
    display: block;
    height: 32px;
    margin: 0 auto;
  }
`;

export const TabBarContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  right: 50vw;
  transform: translateX(50%);
  z-index: 3;
  min-height: 3.5rem;
  padding-bottom: env(safe-area-inset-bottom);
  backdrop-filter: saturate(180%) blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.7);
  }
  border-radius: 0;
  width: 100vw;
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 2}px) {
    border-radius: 6px 6px 0 0;
    width: 50vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 3}px) {
    width: 33.333333vw;
  }
  @media screen and (min-width: ${props => props.theme.minimumTabSize * 4}px) {
    width: 25vw;
  }
`;

export const Active = styled.div`
  display: flex;
  a,
  a:hover {
    color: var(--gray);
  }
`;

const TabBar: React.FC<{
  children: any[];
  compnentsPerScreen: number;
  paths: string[];
  pathname: string;
}> = ({ children, compnentsPerScreen, paths, pathname }) => {
  const kids = children.flat();
  const index = Math.min(
    paths.indexOf(pathname),
    kids.length - compnentsPerScreen
  );
  return (
    <TabBarContainer>
      {kids.slice(0, index)}
      {kids.slice(index, index + compnentsPerScreen).map((child, index) => (
        <Active key={`sublist-${index}`}>{child}</Active>
      ))}
      {kids.slice(index + compnentsPerScreen)}
    </TabBarContainer>
  );
};

export default TabBar;
