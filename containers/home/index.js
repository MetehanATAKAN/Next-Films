import React from 'react';
import FeaturedMovies from '@/components/featured-movie';
import Movies from '@/mock/movies.json';
import Categories from '@/components/categories';
import Genres from '@/mock/genres.json';
import MoviesSection from '@/components/movies-section';

const HomeContainers = () => {
  return (
    <>
    <FeaturedMovies movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0,5)}/>
    <MoviesSection title='Popular Films' movies={Movies.results.slice(1,7)}/>
    <MoviesSection title='Favorites Films' movies={Movies.results.slice(7,13)}/>
    </>
  )
}

export default HomeContainers