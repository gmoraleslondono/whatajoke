<template>
  <div>
    <SearchJokes @search-text="searchText" />
    <Joke
      v-for="joke in jokes"
      :id="joke.id"
      :key="joke.id"
      :joke="joke.joke"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Joke from '../../components/Joke'
import SearchJokes from '../../components/SearchJokes'

export default {
  components: {
    Joke,
    SearchJokes,
  },
  data() {
    return {
      // jokes: [],
    }
  },
  head() {
    return {
      title: 'What a Joke!',
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
    ...mapGetters(['jokes']),
  },
  mounted() {
    this.getJokesList()
  },
  methods: {
    ...mapActions(['getJokes', 'getSearchedJokes']),
    getJokesList() {
      this.getJokes()
    },
    searchText(text) {
      this.getSearchedJokes(text)
    },
  },
}
</script>

<style></style>
