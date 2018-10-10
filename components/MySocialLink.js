import React from 'react'

export const MySocialLink = (props) =>
  <a {...props}
    key={props.href}
    className='ml-3'
    style={{
      fontSize: '1.5em',
      color: props.color
    }}
  />
