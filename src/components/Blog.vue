<template>
  <div class="container px-0">
    <div class="row mx-0">
      <h1>
        Blogs
      </h1>
      <div class="col-4 card">
        <img class="img-fluid" src="" />
        <p>
        
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            "userId": 1,
            "id": 1,
            "title": "test",
            "body" : ""
        }
    },
  mounted() {
    this.getAllposts()
  },
  methods: {
 
    getAllposts() {
        this.posts = []
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            this.posts = res.data;
            console.log('posts',this.posts.$slots)
        })
       
    },
  },
}
</script>
