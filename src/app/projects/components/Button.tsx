import React from 'react'

interface ButtonInterface {
  title : string,
  URL? : string | null,
}

function Button(props : ButtonInterface) {

  function click() : void{
    //on its way...
  }

  return (
    <div className='button'>
      {props.URL != null ? 
        <a href={props.URL}>
          {props .title}
        </a>
      : 
        <>{props.title}</>
      }
    </div>
  )
}

export default Button
