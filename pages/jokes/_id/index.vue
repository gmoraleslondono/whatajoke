<template>
  <div>
    <nuxt-link to="/jokes">Back to Jokes</nuxt-link>
    <h2>{{ joke }}</h2>
    <hr />
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      // joke: {},
    }
  },
  head() {
    return {
      title: this.joke,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place to find funny jokes.',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['joke']),
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['getSingleJoke']),
    init() {
      this.getSingleJoke(this.$route.params.id)
    },
  },
}
</script>

<style></style>
