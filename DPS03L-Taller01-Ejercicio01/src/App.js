import React, { useState, useEffect } from 'react';
import './App.css';
import MoviePicker from './components/MoviePicker';
import MovieList from './components/MovieList';

const movieData = [
  { nombre: 'Super Mario Bros. La película', precio: 19.98 },
  {nombre: 'The Batman', precio: 12.10 },
  {nombre: 'Scarface: the world is yours', precio: 19.99 },
  {nombre: 'Star Wars Epi.III- La Venganza de los Sith', precio: 11.38 },
  {nombre: 'Resident Evil', precio: 9.99 },
  {nombre: 'Star Wars The Clone Wars (Movie)', precio: 6.50 },
  {nombre: 'Halloween(1978)', precio: 6.99 },
  {nombre: 'Halloween Kills:La noche aun no Termina', precio: 20.00},
  {nombre: 'pulp fiction (Tiempos Violentos)', precio: 29.99 },
  { nombre: 'Otra película', precio: 15.5 },
  
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    
  }, []);

  const handleSelectMovie = (movieName) => {
    setSelectedMovie(movieName);
  };

  const handleAddMovie = () => {
    const selectedMovieData = movieData.find((movie) => movie.nombre === selectedMovie);
    if (selectedMovieData) {
      setSelectedMovies([...selectedMovies, { ...selectedMovieData, cantidad: 1 }]);
    }
  };

  const handleRemoveMovie = (movie) => {
    setSelectedMovies(selectedMovies.filter((m) => m !== movie));
  };

  const handleQuantityChange = (movie, newQuantity) => {
    setSelectedMovies(
      selectedMovies.map((m) =>
        m === movie ? { ...m, cantidad: parseInt(newQuantity, 10) } : m
      )
    );
  };

  const totalAmount = selectedMovies.reduce(
    (total, movie) => total + movie.precio * movie.cantidad,
    0
  );

  return (
    <div className="App">
      <h1>Lista de Compra de Películas</h1>
      <MoviePicker
        movies={movieData}
        selectedMovie={selectedMovie}
        onSelectMovie={handleSelectMovie}
        onAddMovie={handleAddMovie} 
      />
      <MovieList
        movies={selectedMovies}
        onRemoveMovie={handleRemoveMovie}
        onQuantityChange={handleQuantityChange}
      />
      <div className="total">Total a pagar: ${totalAmount.toFixed(2)}</div>
    </div>
  );
}

export default App;
