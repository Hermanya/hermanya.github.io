---
path: "/reviews/theming-styled-components-in-2019"
created: "2019-06-14"
updated: "2019-06-21"
title: "Theming Styled Components in 2019"
description: "What are the options to make your styled-components more flexible"
discuss_on_github: "https://github.com/Hermanya/hermanya.github.io/issues/3"
discuss_on_spectrum: "https://spectrum.chat/styled-components/general/theming-styled-components-in-2019~7daabb53-dcb6-4255-b68d-02e920011e45"
discuss_on_reddit: "https://www.reddit.com/r/reactjs/comments/c3jqyj/theming_styled_components_in_2019/"
previous_post: "/reviews/atomic-layout-vs-styled-system"
previous_post_title: "Atomic-layout vs styled-system"
---

[CSS-in-JS is on the rise][npm-trends]! So far [Styled Components] is leading this movement. This CSS-in-JS library lets you use the best bits of ES6 and CSS to style your apps. I have been using styled-components on various projects at 2 different jobs for about a year now. In this post, I will go over the theming approaches I have seen, and new libraries that came out as recently as June 2019. I will go over what styled-components are and 5 different ways to make them more re-usable and customizable.

## Styled Components basics

In Styled Components there are 2 ways to apply CSS to HTML elements:

```js
// Either
const BrandLink = styled.a`
  color: palevioletred;
`
// Or
const BrandLink = styled('a')`
  color: palevioletred;
`
```

This is a `BrandLink` React component which renders an `<a>` tag with pale violet-red text.

If I want to have another component that has the underline removed I can do this:

```js
const NavLink = styled(BrandLink)`
  text-decoration: none;
`
```

And that's pretty much all you need to know to get started with styled-components.

## Styled Components theming

[The recommended theming approach](sc-theming) is pretty simple. There is a `ThemeProvider` component that takes any javascript object and injects it as a prop into all styled components.

```jsx
import { ThemeProvider } from 'styled-components'

const theme = { 
  primary: "mediumseagreen" 
}

<ThemeProvider theme={theme}>
  <BrandLink href="#">
    Themed
  </BrandLink>
</ThemeProvider>
```

Now you can get `mediumseagreen` by accessing `props.theme.primary` like so:

```js

const BrandLink = styled.a`
  color: ${props => props.theme.primary};
`;
```

<!-- However, you probably want to style all states of the anchor tag, and in this case, styling may be a bit repetitive:

```js
const BrandLink = styled.a`
  color: ${props => props.theme.primary};
  :link {
    color: ${props => props.theme.primary2}
  }
  :visited {
    color: ${props => props.theme.primary3}
  }
  :hover {
    color: ${props => props.theme.primary4}
  }
  :active {
    color: ${props => props.theme.primary5}
  }
`;
``` -->

If you want your component to work without a `ThemeProvider`, you need to provide a default theme in React's `defaultProps`:

```js
BrandLink.defaultProps = {
  theme: {
    primary: "palevioletred"
  }
}
```

Alternatively, you can avoid using `ThemeProvider` altogether:

```js
import theme from 'theme';

const BrandLink = styled.a`
  color: ${theme.primary};
`;
```

This is easier to write because it's shorter and the chances are that autocomplete for theme properties is better. But then changing this theme in runtime becomes a challenge. You can, however, start with this and do a global replace for `theme.` to `props => props.theme.` later 😉 when you actually need a dynamic theme.

## Styled System

[Styled System] solves 3 problems I faced in styled-components.

1. Writing `${props => props.theme.primary}` all the time is kind of a drag
2. Lack of conventions around theme object struction (take a look at [System UI])
3. Exposing styling-related props


```js
import styled from 'styled-components'
import {color} from 'styled-system'

const BrandLink = styled.a`
  ${color}
`;

BrandLink.defaultProps = {
  color: 'primary'
}
```

The `${color}` part adds 2 props to `BrandLink` 

1. `color` same as the CSS property, but it maps to `theme.colors`
2. `bg` which is short for `background` and it also maps to `theme.colors`

To consume this component wrap your app into a regular `ThemeProvider` and pass it a _theme that has a `colors` property_.

```jsx
import { ThemeProvider } from 'styled-components'

const theme = { 
  colors: {
    primary: "mediumseagreen", 
    external: "blue" 
  }
}

<ThemeProvider theme={theme}>
  <BrandLink>Themed</BrandLink>
  <BrandLink color="external">
    Link of another color
  </BrandLink>
</ThemeProvider>
```

Truth be told, after using styled-system for awhile, I no longer like to mix style-related props with other props. But this does speed up development significantly.

In addition to that Styled Components v4 made it difficult to extend `defaultProps`. So `const NavLink = styled(BrandLink)...` may not actually work as you think should.


## Xstyled

[Xstyled] solves the `${props => props.theme.primary}` verbosity problem in a different way:

```js
import styled from '@xstyled/styled-components'

const BrandLink = styled.a`
  color: primary;
`;
```


Where `primary` automatically resolves to `theme.colors.primary`. Nice! 

While this project has got a lot of positive feedback, it's very new and there is a lot of room for improvement. In particular, there is one [Pull Request][$xstyled] that proposes to use a `$` character as an indicator for variables, SASS style. This would come in useful in ambiguous situations such as `margin: 2;`, where it's not clear whether this is going to resolve to `2px` or `theme.space.2`.

It's interesting that Xstyled started out as a [PR to Styled System](https://github.com/styled-system/styled-system/pull/479), but it grew into something more.


## Theme UI

Not very long after Xstyled came out, Brent Jackson showed the world Theme UI.

It's a theming solution for React apps built with MDX + Emotion + Styled System + Typography.js. Keep in mind that Styled Components are very similar to Emotion, which is why I'm including Theme UI in this post.

```jsx
import { ThemeProvider, Styled } from 'theme-ui'

const theme = {
  colors: {
    primary: "palevioletred"
  },
  styles: {
    a: {
      color: 'primary'
    }
  }
}

const BrandLink = Styled.a

export default props =>
  <ThemeProvider theme={theme}>
    <BrandLink href="#">Hello</BrandLink>
  </ThemeProvider>
```


The Key differentiation to me is the integration with MDX, a markdown flavor with support for `jsx`. This is great! I've considered using MDX on my blog, and at the time I thought it might be an overkill. But now I need global CSS to style links in my posts. With Theme UI _my content_ would automatically pick up styling from the theme.

## CSS variables

Last but not least, you can always use CSS variables. People like to make fun of the #useThePlatform movement, but I think in this case it's a very reasonable option. The browser support is very much here. This is the most truly dynamic theming approach. You can change variables using media queries, including `prefers-color-scheme`. Meaning, supporting dark mode is super easy, no js required.

Anyway, here is the same example of a `BrandLink`:

```css
:root {
  --primary-color: palevioletred;
}
```

Note, that for CSS variables you don't need a `ThemeProvider`, the theme can be scoped using HTML/CSS scoping mechanisms.

```js
import styled from 'styled-components'

const BrandLink = styled.a`
  color: var(--primary-color);
`;
```

I would love to see an initiative similar to [System UI] but based on CSS variables. How amazing would it be, if there was [Stylish] but based on CSS variables? Super amazing 🤔

## Summary

I hope you found this review useful and maybe even learned a thing or two. Let me know if there is a theming approach for styled components that escaped my radar. I'm very excited about the future of frontend, and I'm looking forward to CSS-in-JS taking over the world and whatever comes next.


[npm-trends]: https://www.npmtrends.com/styled-components-vs-emotion-vs-radium-vs-glamorous-vs-jss
[Styled Components]: https://www.styled-components.com
[sc-theming]: https://www.styled-components.com/docs/advanced#theming
[Styled System]: https://styled-system.com
[Xstyled]: https://github.com/smooth-code/xstyled
[$xstyled]: https://github.com/smooth-code/xstyled/issues/6
[System UI]: https://system-ui.com/theme
[Stylish]: https://userstyles.org/
