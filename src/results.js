import React, { useEffect, useState } from 'react';
import './result.css';
import VideoCard from './videoCard';
import instance from './axios';
import request from './requests'
function Results({movies}) {


  return (
    <div className="results">
      {
        movies.map((movie)=>{
          return <VideoCard key={movie.id} movie={movie} />
        })
      }
    
    </div>
  );

}

export default Results;
