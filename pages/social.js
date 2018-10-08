import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

const makeLink = (props, index, all) =>
    <a {...props}
    key={props.href}
    className='p-3 m-3'
    style={{
      fontSize: '4em'
    }}
  />

const links = [ {children: <i className='fab fa-medium' title='Medium' />, href: 'https://medium.com/@hermanhasawish'},
  {children: <i className='fab fa-github' title='GitHub' />, href: 'https://github.com/hermanya'},
  {children: <i className='fab fa-codepen' title='CodePen' />, href: 'https://codepen.io/Hermanya'},
  {children: <i className='fab fa-stack-overflow' title='StackOverflow' />, href: 'https://stackoverflow.com/users/7228427/herman-starikov'},
  {children: <i className='fab fa-reddit' title='Reddit' />, href: 'https://reddit.com/u/hermanya'},
  {children: <i className='fab fa-product-hunt' title='product hunt' />, href: 'https://www.producthunt.com/@hermanhasawish'},
  {children: <i className='fab fa-linkedin' title='linkedin' />, href: 'https://linkedin.com/herman-starikov'},
  {children: <i className='fab fa-twitter' title='twitter' />, href: 'https://twitter.com/hermanhasawish'},
  // {children: <i class="fas fa-at" title="fritter"></i>, href: 'dat://fritter.hashbase.io/user/dat://5df1a286cd406a2234c89f8c37148b0fa2e397ca55eda919ca5c550d44841005'},
  {children: <i className='fab fa-facebook' title='facebook' />, href: 'https://facebook.com/hermanhasawish'},
  {children: <i className='fab fa-instagram' title='instagram' />, href: 'https://instagram.com/hermanya'}
]
export default () => (
  <div>
    <Head />
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Get in touch</h1>
          <p>I am available through all major internet platforms. Don't hesitate to message me.</p>
          <nav className='mt-4'>
            <div className='d-flex flex-column justify-content-center h-100'>
              <Link href='/portfolio'><a>🌝 Stuff I make by day</a></Link>
              <Link href='/portfolio'><a>🌚 Stuff I make by night</a></Link>
            </div>
          </nav>
        </div>
        <div className='col-md-6' />

      </div>
    </div>
  </div>
)
