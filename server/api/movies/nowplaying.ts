import type { ApiResponse, Movie } from "~/types";

export default defineEventHandler(async (e) => {
  const { accessToken } = useRuntimeConfig();
  const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing";
  const movies = await $fetch<ApiResponse<Movie>>(nowPlayingUrl, {
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
  return { movies };
});
