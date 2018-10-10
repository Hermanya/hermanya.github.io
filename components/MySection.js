import React from 'react'

export const MySection = ({
  text, ctas, cta, children, ...props // eslint-disable-line react/prop-types
}) =>
  <section {...props}>
    <h2 className='h4 text-muted font-weight-light mt-4'>
      {text}
    </h2>
    {
      ctas
        ? ctas.map(props => <div key={props.cta}>
          <p>{props.cta}: {props.children}</p>
        </div>)
        : <React.Fragment>
          <p>{cta}: {children}</p>
        </React.Fragment>
    }
  </section>
