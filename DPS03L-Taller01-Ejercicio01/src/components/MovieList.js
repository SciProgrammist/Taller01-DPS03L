import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onRemoveMovie, onQuantityChange }) => {
  return (
    <div className="list">
      <h2>Lista de Compra</h2>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          onRemoveMovie={onRemoveMovie}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
};

export default MovieList;


