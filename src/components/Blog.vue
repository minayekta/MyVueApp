<template>
  <div class="container px-0">
    <div v-if="!loading">
      <div class="row mx-0">
        <h1>
          Blogs
        </h1>
        <div v-for="post in posts" class="col-5 card mb-3 me-3">
          <img class="img-fluid" src="" />
          <h4>
          {{ post.title }}
          </h4>
          <p>
           {{ post.body }}
          </p>
        </div>
      </div>
    </div>
    <div v-else="">Loading ...</div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'underscore'
export default {
  data() {
    return {
      posts: null,
      loading: false,
    }
  },
  created() {
    this.loading = true;
    this.getAllposts()
  },
  methods: {
    getAllposts() {
      this.posts = []
      axios
        .get('https://jsonplaceholder.typicode.com/posts?_page=10_limit=9')
        .then((res) => {
            this.loading = false
          this.posts = res.data
          console.log('posts', this.posts)
          console.log('posts', _.chunk(res.data,2))
        })
        .catch((err) => alert(err))
    },
  },
}
</script>
<style scoped>
.card{
    padding: 8px;
}
</style>