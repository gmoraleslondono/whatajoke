<template>
<div class="container">
  <AppHeader />
  <nuxt/>
</div>
</template>

<script>
import AppHeader from '../components/AppHeader';

export default {
  components: {
    AppHeader,
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 1rem;
  line-height: 1.5;
  background: #DCFFFD;
  color: #121212;
}

.container {
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: #fff;
}

</style>
