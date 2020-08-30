if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const TMDB_API_KEY = process.env.REACT_APP_API_KEY;

// {"genres":[
//     {"id":28,"name":"Action"},
//     {"id":12,"name":"Adventure"},
//     {"id":16,"name":"Animation"},
//     {"id":35,"name":"Comedy"},
//     {"id":80,"name":"Crime"},
//     {"id":99,"name":"Documentary"},
//     {"id":18,"name":"Drama"},
//     {"id":10751,"name":"Family"},
//     {"id":14,"name":"Fantasy"},
//     {"id":10769,"name":"Foreign"},
//     {"id":36,"name":"History"},
//     {"id":27,"name":"Horror"},
//     {"id":10402,"name":"Music"},
//     {"id":9648,"name":"Mystery"},
//     {"id":10749,"name":"Romance"},
//     {"id":878,"name":"Science Fiction"},
//     {"id":10770,"name":"TV Movie"},
//     {"id":53,"name":"Thriller"},
//     {"id":10752,"name":"War"},
//     {"id":37,"name":"Western"}
// ]}

export default {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchMysteryMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=9648`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=878`,
  fetchWesternMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=37`,
  fetchAnimationMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16`,
  fetchTVMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10770`,
};
