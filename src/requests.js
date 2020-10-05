const API_KEY = "f09415dea3131868242aaf385e7b6105"
const request  = {
fetchTrendingMovies:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
fetchRomananceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10759`,
actionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
actionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
actionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,

}
export default  request;