import type { ApiResponse, Movie } from "~/types";

export default defineEventHandler(async (e) => {
  const { accessToken } = useRuntimeConfig();
  const topRatedMoivesUrl = "https://api.themoviedb.org/3/movie/top_rated";
  const topRatedSeriesUrl = "https://api.themoviedb.org/3/tv/top_rated";
  const movies = await $fetch<ApiResponse<Movie>>(topRatedMoivesUrl, {
    method: "get",
    params: {
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  const series = await $fetch<ApiResponse<Movie>>(topRatedSeriesUrl, {
    method: "get",
    params: {
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
      accept: "application/json",
    },
  });
  return { movies, series };
});
