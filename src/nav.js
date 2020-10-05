import React, { useEffect } from 'react';
import './nav.css';
import request from './requests';
import instance from './axios';

function Nav({movieState}) {

  const chnageMovie =async (name)=>{
    const trending = await instance.get(name);
    
    movieState(trending.data.results)

    
  }
  // fetchTopRated
  return (
    <div className="nav">
     <h2 onClick={()=>{
       chnageMovie(request.fetchTrendingMovies)
     }}>Treading</h2>

     <h2 onClick={()=>{
       chnageMovie(request.fetchTopRated)
     }}>Top Rated</h2>

     <h2 onClick={()=>{
       chnageMovie(request.fetchActionMovies)
     }}>Action</h2>

     <h2 onClick={()=>{
       chnageMovie(request.fetchComedyMovies)
     }}>Comedy</h2>

     <h2 onClick={()=>{
       chnageMovie(request.fetchHorrorMovies)
     }}>Horror</h2>

     <h2 onClick={()=>{
       chnageMovie(request.fetchRomananceMovies)
     }}>Romance</h2>
    </div>
  );

}

export default Nav;
