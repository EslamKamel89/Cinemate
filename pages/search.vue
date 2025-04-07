<script setup lang="ts">
import type { Movie } from "~/types";

const search = useState<string>(() => "");
const movies = useState<Movie[]>(() => []);
const series = useState<Movie[]>(() => []);
const { status } = await useFetch("/api/movies/search", {
  params: { search },
  transform(data) {
    movies.value = data.movies.results;
    series.value = data.series.results;
  },
});
</script>
<template>
  <div class="max-w-2xl mx-auto mt-5">
    <section>
      <form class="">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            id="default-search"
            v-model="search"
            type="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Movies, Tv Series..."
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </section>
    <section>
      <div v-if="movies.length" class="mt-9 mb-2">
        <h1
          class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center"
        >
          <span class="text-blue-600 dark:text-blue-500 uppercase"
            >Movies
          </span>
          That Match Your Search
        </h1>
        <p
          class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        ></p>
      </div>
      <div class="w-full flex items-center justify-center">
        <div v-if="status == 'pending'">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-3 h-full"
          >
            <div v-for="i in 20" :key="i">
              <LoadingCard />
            </div>
          </div>
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-3 self-stretch h-full"
        >
          <div v-for="movie in movies" :key="movie.id" class="">
            <MovieCard :movie />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div v-if="series.length" class="mt-9 mb-2">
        <h1
          class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center"
        >
          <span class="text-blue-600 dark:text-blue-500 uppercase"
            >Top Matches
          </span>
          for TV Series
        </h1>
        <p
          class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        ></p>
      </div>
      <div class="w-full flex items-center justify-center">
        <div v-if="status == 'pending'">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-3 self-stretch h-full"
          >
            <div v-for="i in 20" :key="i">
              <LoadingCard />
            </div>
          </div>
        </div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-3 self-stretch h-full"
        >
          <div v-for="movie in series" :key="movie.id" class="">
            <SeriesCard :movie />
          </div>
        </div>
      </div>
    </section>
    <section v-if="!movies.length && !series.length">
      <div
        class="flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 mt-5"
        role="alert"
      >
        <svg
          class="shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div v-if="search">
          <span class="font-bold text-red-500">Sorry No Data Found!!</span>
          Please try changing the search and try again
        </div>
        <div v-else>
          <span class="font-bold text-blue-500">Start typing!!</span> to find
          the movies you like
        </div>
      </div>
    </section>
  </div>
</template>
