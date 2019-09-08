import React from "react";
import MoreFromTheBlog from "../components/blog/MoreFromTheBlog";
import ResponsiveReactApp, { TabBarLink } from "../responsive-page";

const BlogPage: React.FC<{
  postComponents: any;
  postPath: any;
}> = ({ postComponents, postPath }) => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          {postComponents.map((Part: any, index: number) => (
            <TabBarLink to={`${postPath}/part-${index}`} key={index}>
              Part {index + 1}
            </TabBarLink>
          ))}
          <TabBarLink to={postPath + "/other-posts"}>More</TabBarLink>
        </>
      }
      paths={[
        ...postComponents.map(
          (part: any, index: number) => `${postPath}/part-${index}`
        ),
        postPath + "/other-posts"
      ]}
    >
      {postComponents.map((Part: any, index: number) => (
        <Part key={index} />
      ))}
      <MoreFromTheBlog exceptForPath={postPath} />
    </ResponsiveReactApp>
  );
};
export default BlogPage;
