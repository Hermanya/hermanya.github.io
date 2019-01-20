import React from 'react'
import Head from 'next/head'
export const MyHead = () => <Head>
  <title>Herman Starikov</title>
  <meta property='og:image' content='/static/images/full-shot.jpg' />
  <meta name='description' content='Herman Starikov personal internet page' />
  <link rel='shortcut icon' href='/static/images/head-shot.png' />
  <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css' />
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.3.1/css/all.css' />
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css' />
  <style>{`
  html, body {
    height: 100%;
  }
  .min-height-full-screen {
    min-height: 100vh;
  }
  .z-index-1 {
    z-index: 1;
  }
  .z-index-2 {
    z-index: 2;
  }
  .z-index-3 {
    z-index: 3;
  }

  .delay-1 {
    animation-delay: 0.1s;
  }
  .delay-2 {
    animation-delay: 0.2s;
  }
  .delay-3 {
    animation-delay: 0.3s;
  }
  .delay-4 {
    animation-delay: 0.4s;
  }

  @keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(calc(-100% + 100vh)); }
  }

  html {
    font-size: 16px;
  }
  @media screen and (min-width: 320px) {
    html {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
  }
  @media screen and (min-width: 1000px) {
    html {
      font-size: 20px;
    }
  }
  `}
  </style>
</Head>
