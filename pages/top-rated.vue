<script setup lang="ts">
import type { Movie } from "~/types";

const movies = useState<Movie[]>(() => []);
const series = useState<Movie[]>(() => []);
const { data, status, execute } = useFetch("/api/movies/toprated", {
  immediate: false,
  transform: (data) => {
    movies.value = data.movies.results;
    series.value = data.series.results;
  },
});

onMounted(() => {
  execute();
});
</script>
<template>
  <div class="max-w-2xl mx-auto">
    <section>
      <div class="mt-9 mb-2">
        <h1
          class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center"
        >
          <span class="text-blue-600 dark:text-blue-500 uppercase"
            >Cinema's Finest:
          </span>
          Top Rated Right Now
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
      <div class="mt-9 mb-2">
        <h1
          class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white text-center"
        >
          <span class="text-blue-600 dark:text-blue-500 uppercase"
            >Top-Rated
          </span>
          Shows Everyone's Talking About
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
  </div>
</template>
