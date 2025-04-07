import type { ApiResponse, Movie } from "~/types";

export default defineEventHandler(async (e) => {
  const { accessToken } = useRuntimeConfig();
  const popularUrl = "https://api.themoviedb.org/3/movie/popular";
  const movies = await $fetch<ApiResponse<Movie>>(
    "https://api.themoviedb.org/3/movie/popular",
    {
      method: "get",
      params: {
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: "application/json",
      },
    }
  );
  const series = await $fetch<ApiResponse<Movie>>(
    "https://api.themoviedb.org/3/tv/popular",
    {
      method: "get",
      params: {
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: "application/json",
      },
    }
  );
  return { movies, series };
});
