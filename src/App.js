import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Nav from './nav';
import Results from './results';
import instance from './axios';
import request from './requests'
function App() {
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function fetchShows() {

      const _result  = await instance.get(request.fetchTrendingMovies)
      console.log(_result)
      setMovies(_result.data.results)
      return _result;
    }

    fetchShows();
    console.log("assd")
  },[movies.id])
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Nav */}
      <Nav movieState = {setMovies}/>

      <Results movies= {movies}/>
    </div>
  );
}

export default App;
