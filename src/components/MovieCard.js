import React from 'react'
import { IMG_CDN_URL } from 'src/utils/const'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48'>
        <img className='rounded-lg' alt='movie' src={IMG_CDN_URL+ posterPath}/>
    </div>
  )
}

export default MovieCard