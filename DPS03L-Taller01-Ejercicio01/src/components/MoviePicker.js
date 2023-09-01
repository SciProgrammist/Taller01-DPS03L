import React from 'react';

const MoviePicker = ({ movies, selectedMovie, onSelectMovie, onAddMovie }) => {
  return (
    <div className="picker">
      <h2></h2>
      <select value={selectedMovie} onChange={(e) => onSelectMovie(e.target.value)}>
        <option value="">Agregar Elemento</option>
        {movies.map((movie, index) => (
          <option key={index} value={movie.nombre}>
            {movie.nombre}
          </option>
        ))}
      </select>
      <button onClick={onAddMovie}>Agregar</button>
    </div>
  );
};

export default MoviePicker;
