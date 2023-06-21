<template>  
  <div class="bk-header">
    <div class="container px-0">
  <div class="row mx-0 px-0 py-3">
      <div class="col-2">
        <img class="img-fluid m-auto" src="../assets/img/logo.png" />
      </div>
      <div class="col-7 ">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/" >Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us" >About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact-us">Contact US</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
        </ul>
      </div>
      <div class="col-3 d-flex justify-content-between">
  <input type="text" class="form-control" placeholder="search" >

  <button type="button" class="btn btn-primary ms-2 px-3 py-">Login</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
.nav-link{
  color: rgb(59, 60, 61) !important;
}
.nav-item{
  color: rgb(59, 60, 61) !important;
}
.bk-header{
    background-color: aliceblue;
}
.router-link-active{
  color: rgb(79, 77, 224) !important;
}
</style>
