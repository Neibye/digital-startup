<template>
  <div class="home">
    <img src="../assets/me1.png" id="mig">
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>
<style>
  #mig {
    width: 10%;
    position: absolute;
    top: 25px;
    left: 25px;
  }
</style>