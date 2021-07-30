<template>
  <header class="header">
    <h1 class="title">What a joke!</h1>
    <ul>
      <li>
        <nuxt-link to='/'>Home</nuxt-link>
        <nuxt-link to='/jokes'>Jokes</nuxt-link>
        <nuxt-link to='/about'>About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}

.header ul {
  display: flex;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #666;
  padding: 0 0.5rem;
}

</style>
