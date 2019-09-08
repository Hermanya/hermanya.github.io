---
path: "/reviews/atomic-layout-vs-styled-system"
created: "2019-04-21"
updated: "2019-05-05"
title: "Atomic-layout vs styled-system"
description: "In depth comparison of React CSS grid libraries."
discuss_on_github: "https://github.com/kettanaito/atomic-layout/issues/144"
previous_post: "/reviews/gatsby-blog-for-a-developer"
previous_post_title: "Gatsby Blog for a Developer"
next_post: "/reviews/theming-styled-components-in-2019"
next_post_title: "Theming Styled Components in 2019"
---

*This post was originally published [on GitHub](https://github.com/kettanaito/atomic-layout/issues/144).*

## Atomic-layout

I have recently refactored [my website](my-website) from Rebass `Flex`-based layouts to `atomic-layout` and then to `styled-system`. Why did I do it? I'm new to CSS grid, but I have heard [good things](css-grid-changes-everything) about it. And I've been following [Kettanaito](kettanaito) for a while now, he is working on `atomic-layout` for about a year. I always wanted to try building something with `atomic-layout`, but the opportunity did not present itself until I decided to rebuild my website.

Overall, I'm glad I started my CSS grid journey from `atomic-layout`. This library has great docs powered by Gitbook, another project I admire and have actually contributed to. The docs start with the motivation section, where Kettanaito outlines the core principals of composition and responsiveness in `atomic-layout`. And that makes sense, but in retrospective, I think the #1 motivation was different for me. 

CSS grid helps me to avoid adding margins all over the place. Just think about it, if you are a frontend developer, how often do you wonder if you should add a bottom margin to this component, or a top margin to the next one. What about the last component in the list, will it have a margin too? Or do you need to do the `index !== array.length - 1 && ...` dance.

My absolutely favorite thing about `atomic-layout` is that it does not render components that are not in the current template. When I say "current template", I refer to the responsive nature of `atomic-layout` and how you can have different templates for different viewport sizes. This is great. On my website I 3 main sections: my bio, my external links, and my pinned GitHub projects. All three sections fit very nicely onto a desktop size screen. However, on mobile, I decided to separate them into individual pages and separate layouts. With `atomic-layout` I can reuse the `children` function that renders all the components but uses different templates for different mobile pages that show subsets of those components. 

Now, regarding things that I don't quite like about `atomic-layout`. The number one would probably be the `children` function that `Composition` takes, which in turn takes an object of `grid-area` wrappers. I see why the author has done it this way because *render-props* are cool and this why you don't have to worry about `grid-area`. But I found myself in constant need to come up with names for these wrappers. And I know I'm not alone in that naming things is difficult.

Another thing that could be better about `atomic-layout` is the API. It seems too new for me. And I don't like that it does not map to the actual CSS property names. I'm sure every frontend developer who has worked with Bootstrap-type grids can figure out what a `gutter` is, but the CSS grid term for that is `grid-gap` and I think the CSS Working Group would like us to adopt the new terminology moving forward.

## Styled-system

When I was integrating `atomic-layout` onto my website I browsed the GitHub page of the project quite a lot. And found [this issue](styled-system-issue), which I found curious. I'm a big fan of `styled-system`. My website is built with it. And funny enough at first I was upset that `atomic-layout` does not automatically integrate with my breakpoints from `styled-system`. I never thought of `styled-system` as a competitor for `atomic-layout`. Mainly because I use `Rebass` and it does not have a grid component, so I assumed that the grid is out of `styled-systems`'s domain, but turns out it's not. It turns out I can implement my own grid component, very similar to `atomic-layout`, in just about 30 lines of code:

``` js
import styled from 'styled-components';
import {
    gridAutoColumns,
    gridAutoRows,
    gridGap,
    gridTemplateAreas,
    gridTemplateRows,
    gridTemplateColumns,
    space,
    gridArea,
    display
} from 'styled-system';

const Grid = styled.div`
    display: grid;
    ${gridTemplateAreas}
    ${gridGap}
    ${gridAutoRows}
    ${gridAutoColumns}
    ${gridTemplateRows}
    ${gridTemplateColumns}
    ${space}
    ${gridArea}
    ${display}
`;

export default Grid;
```

If you are not familiar with `styled-system`, what we have here is a bunch of "mixins" if you will, that expose certain react props relevant to the CSS grid APIs. Note that I added `space` for padding only, because who needs margins anymore? And `display` is for hiding elements that are not in the current template. This part I'm not quite happy about, but this is the best I could think of for now.

``` diff
- const repoTemplate = `
-       emoji title
-       emoji description
-       emoji links
-`;
```

The new `Grid` requires templates in a slightly different format: the double quotes are required. But on the flip side, the template is no longer space sensitive and can be inlined into props. 

``` diff
- <Composition 
-     template={repoTemplate} 
-     gutter={theme.space[4]} 
- >
-     {({Emoji, Title, Description, Links}) => (
-          <>
-              <Emoji as={Repo.Emoji}>
-                  {repo.description.substr(0, 2)}
-              </Emoji>
+  <Grid
+      gridTemplateAreas={`
+          "emoji title"
+          "emoji description"
+          "emoji links"
+      `}
+      gridGap={4}
+  >
+      <Emoji gridArea="emoji">
+          {repo.description.substr(0, 2)}
+      </Emoji>
```

As you can see here, that API is a little different, but not too much. The `template` became `gridTemplateAreas`, the `gutter` turned into `gridGap`. And there are no more wrapper components so I need to add `gridArea` from `styled-system` as you can see below, but on the other hand, I don't need to namespace the `Emoji` component anymore.

``` diff
- Repo.Emoji = styled.p`
+ const Emoji = styled.p`
+    ${gridArea}
```

And to give you another example, here is a dynamic grid of repos you can see on [my website](my-website-repos).

``` diff
- {({Repos, More, TotalStars, Bio}) => (
-     <Repos>
-         <Composition
-             autoRows
-             areas="area"
-             areasLg="area area"
-             areasXl="area area area"
-             gutter={theme.space[4]}
-             gutterLg={theme.space[5]}
-         >
-             {() => 
-             pinnedRepoTrail.map(({x, ...rest}, index) => {
+  <Grid
+      gridAutoRows
+      gridArea="repos"
+      gridTemplateAreas={[
+          '"area"',
+          '"area"',
+          '"area area"',
+          '"area area area"'
+      ]}
+      gridGap={{sm: 4, lg: 5}}
+  >
+      {pinnedRepoTrail.map(({x, ...rest}, index) => {
```

## Summary

This concludes my comparison. I think both approaches are very worthy, and the main difference between them is naming conventions that the two libraries adopt. Personally, I'm going to stick with `styled-system`, because its naming feels more standardized to me. And I like how all `styled-system` props are universally responsive.

Overall I'm very happy with the CSS grid, and I hope to use it more in the future.


[my-website](https://starikov.dev) 

[my-website-repos](https://starikov.dev/github/)

[css-grid-changes-everything](https://www.youtube.com/watch?v=txZq7Laz7_4)

[kettanaito](https://github.com/kettanaito)

[styled-system-issue](https://github.com/kettanaito/atomic-layout/issues/144)