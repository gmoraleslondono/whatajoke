import axios from 'axios'

const DAD_JOKE_URL = 'https://icanhazdadjoke.com'

// state --> function
export const state = () => ({
  jokes: [],
  joke: {},
})

// getters --> object
export const getters = {
  jokes: (state) => {
    return state.jokes
  },
  joke: (state) => {
    return state.joke
  },
}

// actions --> object
// get data from API (asynchronous because wait for the API response)
export const actions = {
  async getJokes({ commit }) {
    // hit API to get jokes

    // API needs headers
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get(`${DAD_JOKE_URL}/search`, config)

      commit('AddJokes', res.data.results)
    } catch (error) {
      console.log(error)
    }
  },
  async getSearchedJokes({ commit }, text) {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get(`${DAD_JOKE_URL}/search?term=${text}`, config)

      commit('AddJokes', res.data.results)
    } catch (error) {
      console.log(error)
    }
  },
  async getSingleJoke({ commit }, id) {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get(`${DAD_JOKE_URL}/j/${id}`, config)

      commit('AddJoke', res.data.joke)
    } catch (error) {
      console.log(error)
    }
  },
}

// mutations --> object
// after the actions with the data from the API, it update the state (synchronous because response immediately)
export const mutations = {
  AddJokes(state, jokes) {
    state.jokes = jokes
  },
  AddJoke(state, joke) {
    state.joke = joke
  },
}
