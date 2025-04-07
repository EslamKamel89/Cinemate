import type { ApiResponse, Movie } from "~/types";

export default defineEventHandler(async () => {
  const { accessToken, apiKey } = useRuntimeConfig();
  const moviesUrl = "https://api.themoviedb.org/3/discover/movie";
  const seriesUrl = "https://api.themoviedb.org/3/discover/tv";
  const movies = await $fetch<ApiResponse<Movie>>(moviesUrl, {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    // immediate: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  const series = await $fetch<ApiResponse<Movie>>(seriesUrl, {
    params: {
      include_adult: false,
      include_null_first_air_dates: false,
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    // immediate: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  return { movies, series };
});
