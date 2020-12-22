import axios from 'axios';

// j'ai ajoouter un proxy au package.json pour racourcir la requète
//get All Movies
export const fetchAllMovie = () => axios.get('/api/v1/films');