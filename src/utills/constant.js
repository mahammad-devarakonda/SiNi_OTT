export const BG_IMG = "https://img.clipart-library.com/2/clip-film-backgrounds/clip-film-backgrounds-19.jpg";
export const PROFILE_PIC = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const LOGO = "https://fontmeme.com/permalink/240803/412ec2ad5c5dcbff431be4c6f6d21b78.png";

export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:`Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
};

export const MOVIE_IMG_CDN_URL = "https://image.tmdb.org/t/p/original/";
export const Now_Playing_Movies ="https://api.themoviedb.org/3/movie/now_playing?page=1"
export const Popular_Movies ="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
export const Discover_Movies ='https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-te&page=1&sort_by=popularity.desc'
export const Upcoming_Movies ='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
export const AiringToday='https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1'
export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "marati", name: "Marathi" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "bengali", name: "Bengali" },
  { identifier: "punjabi", name: "Punjabi" },
  { identifier: "gujarati", name: "Gujarati" },
  { identifier: "kannada", name: "Kannada" },
  { identifier: "odia", name: "Odia" },
  { identifier: "urdu", name: "Urdu" },
  { identifier: "sinhala", name: "Sinhala" },
  { identifier: "nepali", name: "Nepali" },
  { identifier: "thai", name: "Thai" }
]

export const geminiAIKey  =process.env.REACT_APP_GPT_KEY;



