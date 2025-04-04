<script setup lang="ts">
const config = useRuntimeConfig();

pr(config.public.accessToken, "accessToken");
pr(config.public.apiKey, "apiKey");
</script>
<template>
  <div>Main Page</div>
</template>
