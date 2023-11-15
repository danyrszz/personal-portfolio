import React from 'react'

interface ButtonInterface {
  title : string,
  URL? : string | null,
}

function Button(props : ButtonInterface) {

  return (
    <div className='button'>
      {props.URL != null ? 
        <a href={props.URL} rel="noopener noreferrer" target="_blank">
          {props .title}
        </a>
      : 
        <>{props.title}</>
      }
    </div>
  )
}

export default Button
