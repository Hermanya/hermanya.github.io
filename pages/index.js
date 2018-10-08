import React from 'react'
import Link from 'next/link'
import Head from '../components/Head'

const makeLink = (props) =>
  <a {...props}
    key={props.href}
    className='ml-3'
    style={{
      fontSize: '1.5em'
    }}
  />

const makeSection = (props) =>
  <section>
    <h2 className='h4 text-muted font-weight-light mt-4'>
      {props.text}
    </h2>
    {
      props.ctas
        ? props.ctas.map(props => <div key={props.cta}>
          <span className='text-body'>{props.cta}:</span>
          {props.children}
        </div>)
        : <React.Fragment>
          <span className='text-body'>{props.cta}:</span>
          {props.children}
        </React.Fragment>
    }

  </section>

const NewLabel = () => <span className='position-absolute badge badge-secondary' style={{
  fontSize: '0.5rem',
  bottom: '-1.5em',
  left: 0
}}>new</span>

export default () => (
  <div className='container min-height-full-screen py-5'>
    <Head />
    <div className='row align-items-center h-100'>
      <section className='col'>
        <div className='d-flex flex-column justify-content-center h-100'>
          <h1 className='display-4 mb-3'>
            <span className='mr-3 d-inline-block animated rotateInUpLeft'>👋</span> I'm <strong>Herman</strong>,<br /> I make internet apps
            <br /><span className='text-muted'>and stuff</span>
          </h1>
          <p>
          Nice to meet you! I'm a 👨🏼‍💻 Software Developer at <a href='https://rangle.io'>Rangle.io</a> by day
          and a 👨🏿‍💻 Digital Maker by night. My latest pet project is a UI kit builder: <a href='https://ui1.io'>UI1.io</a>
          </p>
          <p>
          I am not super active on social, but when I make interesting stuff, I post it.
          I cross-post on all major platforms, so if you are into cool internet apps, or just want to know what
          Toronto Software Developer's life is like, follow me on your favorite platform.
          </p>

          {makeSection({
            text: 'Have a question or simply want to say hi? ',

            cta: 'Message me',
            children: [
              {children: <i className='fas fa-at' title='email' />, href: 'mailto:herman.starikov@gmail.com'},
              {children: <i className='fab fa-facebook-messenger' title='Messenger' />, href: 'https://m.me/hermanhasawish'},
              {children: <i className='fab fa-telegram' title='Telegram' />, href: 'http://t.me/hermanya'}
            ].map(makeLink)

          })}

          {makeSection({
            text: 'Wanna know what I do in my spare time? ',

            ctas: [{
              cta: 'Review my code',
              children: [
                {children: <i className='fab fa-github' title='GitHub' />, href: 'https://github.com/hermanya'},
                {children: <i className='fab fa-codepen' title='CodePen' />, href: 'https://codepen.io/Hermanya'},
                {children: <i className='fab fa-stack-overflow' title='StackOverflow' />, href: 'https://stackoverflow.com/users/7228427/herman-starikov'}
              ].map(makeLink)
            }, {
              cta: 'Read my writing',
              children: [
                {children: <i className='fab fa-medium' title='Medium' />, href: 'https://medium.com/@hermanhasawish'},
                {children: <i className='fab fa-twitter' title='twitter' />, href: 'https://twitter.com/hermanhasawish'}

              ].map(makeLink)
            // }, {
            //   cta: 'Press L on my design',
            //   children: [
            //     {children: <i className='fab fa-dribbble' title='Dribbble' />, href: 'https://dribbble.com/hermanya'}
            //   ].map(makeLink)
            // }, {
            //   cta: 'Use my apps',
            //   children: [
            //     {children: <i className='fab fa-product-hunt' title='product hunt' />, href: 'https://www.producthunt.com/@hermanhasawish/made'}
            //   ].map(makeLink)
            }, {
              cta: 'Other things',
              children: [
                {children: <span className='position-relative'>
                  <i className='fab fa-dribbble' title='Dribbble' />
                  <NewLabel />
                </span>,
                href: 'https://dribbble.com/hermanya'},
                {children: <i className='fab fa-product-hunt' title='product hunt' />, href: 'https://www.producthunt.com/@hermanhasawish/made'}
              ].map(makeLink)
            }]
          })}

          {makeSection({
            text: 'Looking to hire a Software Developer? ',
            cta: 'Check my work experience',
            children: [
              {children: <i className='fab fa-linkedin' title='linkedin' />, href: 'https://linkedin.com/herman-starikov'},
              {children: <i className='fab fa-angellist' title='linkedin' />, href: 'https://angel.co/hermanya'}
            ].map(makeLink)
          })}

          {makeSection({
            text: 'Want to connect with me?',
            cta: 'See my daily life',
            children: [
              {children: <i className='fab fa-facebook' title='facebook' />, href: 'https://facebook.com/hermanhasawish'},
              {children: <i className='fab fa-instagram' title='instagram' />, href: 'https://instagram.com/hermanya'}
            ].map(makeLink)
          })}
        </div>
      </section>
      <div className='col-md-4 col-lg-6 d-none d-md-block position-relative'>
        <img src='/static/images/half-size-herman.png'
          className='d-block m-auto align-self-end mw-100'
          alt='half-size photo of Herman Starikov'
          style={{
            'WebkitMaskImage': '-webkit-gradient(linear, center top, center bottom, color-stop(0.70, rgba(0,0,0,1)), color-stop(1.00, rgba(0,0,0,0)))',
            filter: 'drop-shadow(0px 16px 10px rgba(0,0,0,0.25))'
          }} />
      </div>

    </div>

  </div>
)
