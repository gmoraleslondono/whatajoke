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
import axios from 'axios'
import Joke from '../../components/Joke'
import SearchJokes from '../../components/SearchJokes'

export default {
  components: {
    Joke,
    SearchJokes,
  },
  data() {
    return {
      jokes: [],
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
  // load data when starting
  async created() {
    // request API using axios

    // API needs headers
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config)

      console.log('this is the data', res.data)
      this.jokes = res.data.results
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }

      try {
        const res = await axios.get(
          `https://icanhazdadjoke.com/search?term=${text}`,
          config
        )

        this.jokes = res.data.results
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
