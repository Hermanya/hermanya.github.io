import React from "react";
import { Feather, Info } from "react-feather";
import MoreFromTheBlog from "../components/blog/MoreFromTheBlog";
import ResponsiveReactApp, { TabBarLink } from "../responsive-page";

const BlogPage: React.FC<{
  postPath: any;
  postComponent: any;
}> = ({ postComponent: Post, postPath }) => {
  return (
    <ResponsiveReactApp
      tabs={
        <>
          <TabBarLink to={postPath}>
            <Info />
            Post
          </TabBarLink>
          <TabBarLink to={postPath + "/other-posts"}>
            <Feather />
            More
          </TabBarLink>
        </>
      }
      paths={[postPath, postPath + "/other-posts"]}
    >
      <Post />
      <MoreFromTheBlog exceptForPath={postPath} />
    </ResponsiveReactApp>
  );
};
export default BlogPage;
