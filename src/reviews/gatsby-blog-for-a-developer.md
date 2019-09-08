---
path: "/reviews/gatsby-blog-for-a-developer"
created: "2019-05-31"
title: "Gatsby Blog for a Developer"
description: "What gatsby plugins I used for my blog."
discuss_on_github: "https://github.com/Hermanya/hermanya.github.io/issues/2"
discuss_on_reddit: "https://www.reddit.com/r/gatsbyjs/comments/bvgfv0/review_of_the_plugins_i_used_to_build_my_blog/"
discuss_on_spectrum: "https://spectrum.chat/gatsby-js/i-made-this/review-of-the-plugins-i-used-to-build-my-dev-blog~48d45e5d-9df0-48a9-8e08-44454122eb2d"
next_post: "/reviews/atomic-layout-vs-styled-system"
next_post_title: "Atomic-layout vs styled-system"
---

So long [Medium](https://medium.com/@hermanhasawish).

I'm starting a new blog. [My first post](/reviews/atomic-layout-vs-styled-system) is a comparison of [atomic-layout](https://github.com/kettanaito/atomic-layout) and [styled-system](https://styled-system.com/)'s CSS grid. Initially, I posted this review in an issue on GitHub but then I realized that I enjoy reviewing and comparing libraries, so I set up this blog as a dedicated space for such reviews. In this post, I will go over some of the Gatsby plugins that I used to build this page.

## Text plugins

I started by using [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) and [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/). This is [the recommended way](https://www.gatsbyjs.org/docs/adding-markdown-pages/) to set up a markdown blog. Initially, I was considering not going this way, and try to either use [MDX](https://github.com/ChristopherBiscardi/gatsby-mdx) or maybe even write posts in raw javascript. But markdown is nice and now that I think about it the flexibility that I would get by going these alternative routes would probably not pay off.

One thing that I was looking for was a way to show code diffs. I knew that markdown can have syntax highlighting with a language name after the 3 backticks and [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/), but one thing I did not know is that it can also render diffs. Just use `diff` instead of the language name and starts lines with a `+` for new lines and `-` for removed lines. It's this easy. The new lines will be green and the removed ones will be red. Or any other color, depending on your prism theme. For this blog, I made a custom theme. It uses the same colors as the rest of the website.

To make my code snippets a little nicer I set up [gatsby-remark-prettier](https://www.gatsbyjs.org/packages/gatsby-remark-prettier/). [Prettier](https://prettier.io/) has a configuration parameter that sets the maximum length of each line. Not only this helps prevent horizontal scrolling on mobile but also makes the code fit in the columns of text that you can see if you are browsing this page on desktop.

And I'm using a couple more pretty standard markdown plugins. [gatsby-remark-autolink-headers](https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/) for that link icon that shows up when you hover over a subheading. And [gatsby-remark-smartypants](https://www.gatsbyjs.org/packages/gatsby-remark-smartypants/) to get fancier typographic characters.

## Other handy plugins

Other markdown plugins I use [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/) and [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/) to generate cool previews for static images. Basically, it takes my jpegs, makes SVG tracings of them and injects the tracings into my build-time rendered HTML, so that you can see the silhouette of an image before it's even downloaded.

And that's all the cool plugins I use. I have not mentioned [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/), [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/), [gatsby-plugin-robots-txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/), and [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/). But only because they are pretty self-explanatory and I'm not sure why Gatsby does not provide this functionality out of the box.

## Summary

You can see [my full gatsby configuration](https://github.com/Hermanya/hermanya.github.io/blob/a749bbde8380db9d9dd4206a7fd2d5264f084bed/gatsby-config.js) on GitHub.

I hope you found this brief review useful. If you don't have a Gatsby blog I highly recommend it. The development experience is nice. And if you have a Gatsby blog let me know what plugins you use for your blog, and how I can improve my setup :)

![gatsby gif](https://media.giphy.com/media/14cDsqOkks6O8U/giphy.gif)