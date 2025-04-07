import type { ApiResponse, Movie } from "~/types";

export default defineEventHandler(async (e) => {
  const query = getQuery(e);
  const { accessToken } = useRuntimeConfig();
  const searchMoviesUrl = "https://api.themoviedb.org/3/search/movie";
  const searchSeriesUrl = "https://api.themoviedb.org/3/search/tv";
  const movies = await $fetch<ApiResponse<Movie>>(searchMoviesUrl, {
    method: "get",
    params: {
      language: "en-US",
      query: query.search,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  const series = await $fetch<ApiResponse<Movie>>(searchSeriesUrl, {
    method: "get",
    params: {
      language: "en-US",
      query: query.search,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  return { movies, series };
});
