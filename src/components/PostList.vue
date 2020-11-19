<template>
<div>
    <h2>Ønskeseddel</h2>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h3> {{ post.description }} </h3>
      <p>Link: <a v-bind:href="post.link">{{ post.butik }}</a></p><br>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button>Opdater</button>
      </router-link>
      <button v-on:click="deletePost(post)">slet</button>
    </article>
  </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: []
    };
  },
  firestore: {
    posts: postRef
  },
  methods: {
    deletePost(post) {
      postRef.doc(post.id).delete()
      console.log(post)
    }
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.grid-container article {
  text-align: center;
  padding: 10px;
}

.grid-container img {
  max-width: 300px;
  width: 100%;
}

.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}
</style>
