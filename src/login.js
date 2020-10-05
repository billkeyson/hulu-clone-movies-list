import React, { useEffect } from 'react';
import './login.css';

function Login() {
    useEffect(()=>{
        console.log("Runring")
        
    })
  return (
    <div className="login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1200px-Spotify_logo_horizontal_black.jpg" />
     <a href="">Login With Spotify</a>
    </div>
  );
}

export default Login;
