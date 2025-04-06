<script setup lang="ts">
import type { Movie } from "~/types";

const props = defineProps<{
  movie: Movie;
}>();

const imageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
const { movie: choosenMovie, chooseMovie } = useChoosenMovie();
</script>
<template>
  <div
    class="max-w-sm bg-white border h-full border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <NuxtLink
      :to="{
        path: `/item/${movie.title}`,
      }"
      @click="chooseMovie(movie)"
    >
      <img
        class="rounded-t-lg"
        :src="imageUrl(movie.poster_path)"
        :alt="`${movie.title} Image`"
      />
    </NuxtLink>
    <div class="p-5">
      <div>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie.title }}
        </h5>
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ movie.overview ?? "Overview Not Available" }}
      </p>
      <div
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ movie.release_date }}
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
