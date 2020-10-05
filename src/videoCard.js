import React from 'react';
import './videoCard.css';
import TextTruncate from 'react-text-truncate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoCard({movie}) {
const imageURL= 'https://image.tmdb.org/t/p/original';
  return (
    <div className="videoCard">
     <img src={`${imageURL}`+movie.backdrop_path||movie.poster_path} alt={movie.title} />
     <h2>{movie.title || movie.original_title||movie.name}</h2>
     <TextTruncate
          line={2}
          element="p"
          truncateText="…"
          text={movie.overview}
          textTruncateChild={<a href="#">Read on</a>}
      />
    <div className="video_icons" ><FavoriteBorderIcon className="video_icon" /> <span>{movie.vote_count}</span></div>
    </div>
  );

}

export default VideoCard;
