import fetch from 'unfetch';

// j'ai ajoouter un proxy au package.json pour racourcir la requète

//get All Movies
export const getAllMovie = () => fetch('/api/v1/films');