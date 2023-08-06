import FeaturedMovies from '@/components/featured-movie'
import React from 'react'

const MovieContainer = ({movie}) => {
  return (
    <>
    <FeaturedMovies movie={movie} isCompact={false} />
    </>
  )
}

export default MovieContainer