import React from "react";
import ResponsiveReactApp, { TabBarLink } from "../responsive-page";
import About from "../components/landing/About";
import PetProjects from "../components/landing/PetProjects";
import Links from "../components/landing/Links";
import { Info, Trello, Feather } from "react-feather";
import Blog from "../components/landing/Blog";
const LandingPage = ({ match }: { match: any }) => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          <TabBarLink to={`${match.path}/me`}>
            <Info />
            About
          </TabBarLink>
          <TabBarLink to={`${match.path}/projects`}>
            <Trello />
            Pet Projects
          </TabBarLink>
          <TabBarLink to={`${match.path}/blog`}>
            <Feather />
            Blog
          </TabBarLink>
          <TabBarLink to={`${match.path}/links`}>
            <Info />
            Links
          </TabBarLink>
        </>
      }
      paths={[
        match.path + "/me",
        match.path + "/projects",
        match.path + "/blog",
        match.path + "/links"
      ]}
    >
      <About />
      <PetProjects />
      <Blog />
      <Links />
    </ResponsiveReactApp>
  );
};

export default LandingPage;
