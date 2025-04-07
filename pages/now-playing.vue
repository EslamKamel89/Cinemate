<script setup lang="ts">
import type { Movie } from "~/types";

const movies = useState<Movie[]>(() => []);
const { data, status } = useFetch("/api/movies/nowplaying", {
  transform(data) {
    movies.value = data.movies.results;
  },
});
</script>
<template>
  <div class="max-w-2xl mx-auto">
    <section>
      <div class="mt-9 mb-2">
        <h1
          class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center"
        >
          Discover Cinema's
          <span class="text-blue-600 dark:text-blue-500 uppercase"
            >Current Gems
          </span>
          on the Screen
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
  </div>
</template>
