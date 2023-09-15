import React from 'react'


function Tag( {name} : {name:string} ) {
  return (
    <div className='card-tag'>
      {name}
    </div>
  )
}

export default Tag
