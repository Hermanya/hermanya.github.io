import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'
export default () => (
  <div>
    <Head />
    <p>This is the portfolio page</p>
    <Link href='/'><a>Go home</a></Link>
  </div>
)
