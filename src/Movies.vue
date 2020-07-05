<template>
  <ul class="movies">
    <Movie
      v-for="(movie, index) of movies"
      :key="index"
      :movie="movie" />
  </ul>
</template>

<script>
import Movie from './Movie.vue'
export default {
  components: {
    Movie,
  },
  data () {
    return {
      movies: [
        { title: 'Star Wars' },
        { title: 'Blade Runner' },
      ],
    }
  },
}
</script>