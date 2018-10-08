import React from 'react'
import Head from 'next/head'
export default () => <Head>
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
  `}
  </style>
</Head>
