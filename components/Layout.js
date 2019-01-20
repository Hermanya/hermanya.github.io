import React from 'react'

export const Layout = ({ main, aside }) =>
  <React.Fragment>
    <div className='container min-height-full-screen py-5 z-index-3 position-relative'>
      <div className='row align-items-center h-100'>
        <section className='col-md-8 col-lg-7'>
          {main}
        </section>
      </div>
    </div>
    <div className='container fixed-top fixed-bottom z-index-1'>
      <div className='row align-items-center h-100'>
        <div className='offset-md-8 col-md-4 offset-lg-7 col-lg-5 d-none d-md-flex flex-column h-100 position-relative'>
          {aside}
        </div>
      </div>
    </div>
  </React.Fragment>
