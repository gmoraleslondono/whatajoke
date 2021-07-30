<template>
  <form @submit.prevent="onSubmit">
    <input v-model="text" type="text" placeholder="Search jokes..." />
    <input type="submit" value="Search Jokes" />
  </form>
</template>

<script>
export default {
  name: 'SearchJokes',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text)
      this.text = ''
    },
  },
}
</script>

<style></style>
