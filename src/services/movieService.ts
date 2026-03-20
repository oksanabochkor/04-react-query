import axios from 'axios';
import type { MoviesResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';

const token = import.meta.env.VITE_TMDB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesResponse> => {
  const response = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });

  return response.data;
};




