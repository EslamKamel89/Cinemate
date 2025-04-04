<script setup lang="ts">
import type { Movie } from "~/types";

defineProps<{
  movie: Movie;
}>();

const imageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};
const { movie: choosenMovie, chooseMovie } = useChoosenMovie();
</script>
<template>
  <div />
</template>
