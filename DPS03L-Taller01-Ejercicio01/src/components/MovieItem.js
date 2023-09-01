import React from 'react';

const MovieItem = ({ movie, onRemoveMovie, onQuantityChange }) => {
  return (
    <div className="item">
      <span>{movie.nombre}</span>
      <input
        type="number"
        min="1"
        value={movie.cantidad}
        onChange={(e) => onQuantityChange(movie, e.target.value)}
      />
      <span>${(movie.precio * movie.cantidad).toFixed(2)}</span>
      <button onClick={() => onRemoveMovie(movie)}>Eliminar</button>
    </div>
  );
};

export default MovieItem;

