<script setup lang="ts">
const { state: choosenMovieState, chooseMovie } = useChoosenMovie();
</script>
<template>
  <div class="w-full flex items-center justify-center mt-4">
    <template v-if="choosenMovieState.movie">
      <MovieCard
        v-if="!choosenMovieState.isSeries"
        :movie="choosenMovieState.movie"
      />
      <SeriesCard
        v-if="choosenMovieState.isSeries"
        :movie="choosenMovieState.movie"
      />
    </template>
  </div>
</template>
