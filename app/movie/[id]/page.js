"use client"

import MovieContainer from '@/containers/movie';
import React, { useState, useEffect } from 'react';
import Movies from '@/mock/movies.json';
import { notFound } from 'next/navigation';

const delay = async (ms) => {
    await new Promise ((resolve) => setTimeout(resolve,ms));
}

const MoviePage =  ({params}) => {
    
   useEffect(() => {
     delay(3000)
   }, [])
   
    const movieId = Number(params.id);
    
    useEffect( () => {
        const movie = Movies.results.find(data => data.id === movieId);
            
        if(!movie) notFound();
        else {
          setState({
              ...state,movieDetails:movie
            })
        }
    }, [])

  
    

    const initialState = {movieDetails:null} ;
    const [state, setState] = useState(initialState);

  return (
    <>
    {
        state.movieDetails && <MovieContainer movie={state.movieDetails} />
    }
    </>
  )
}

export default MoviePage