import React, { useEffect, useState } from 'react'
import './App.css'
import searchIcon from './search.svg'
import MovieCard from './movieCard'



const API_URL = 'http://omdbapi.com?apikey=a98589b4';
const App = ()=>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(()=>{
    searchMovies('batman');
  },[])

  return(
    <div className='app'>
      <h1>Tes Movie Land</h1>
      <div className='search'>
        <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} 
        placeholder='Search for Movie'/>
        <img src={searchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}}/>
      </div>
      
      {movies?.length > 0 ?
      (
        <div className='container'>
          {movies.map((movie)=>{
          return(
            <MovieCard movie={movie} />
          )})}
        </div>
      ) :
      (
        <div className='empty'>
          <h1>No Movies found</h1>
        </div>
      )}
    </div>
  )
}

export default App;