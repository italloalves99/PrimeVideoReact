import React, { useState, useEffect } from "react";

function Main() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=506fadb0256c13349acc05dabebf9604&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovieData(data.results.slice(0, 50));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id="main" className="main">
      <div className="center">
        {movieData && movieData.length > 0 && (
          <div 
            className="banner-principal" 
            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movieData[0].backdrop_path}')` }}
          ></div>
        )}
        {movieData && movieData.map((movie, index) => (
          <div key={index} className="card-movie">
            {index === 1 }
            <img src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Movie Poster ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
