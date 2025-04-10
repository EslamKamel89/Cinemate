export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface ApiResponse<T> {
  dates?: Dates;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}
