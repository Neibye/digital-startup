<template>
<div>
    <h2>Min ønskeseddel 2020</h2>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h3> {{ post.description }} </h3>
      <p>Link: <a v-bind:href="post.link" target="_blank">{{ post.butik }}</a></p>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button class="example_a">Opdater</button>
      </router-link>
      <button v-on:click="deletePost(post)" class="example_a">Slet</button>
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
    row-gap: 100px;
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
.example_a {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background: lightblue;
padding: 15px;
border-radius: 5px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
margin: 1%;
}

.example_a:hover {
background: #434343;
letter-spacing: 1px;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
h2 {
  font-size: 2em;
}
img {
  height: 300px;
}
</style>
