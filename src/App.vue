

<template>
  <div>
   <HeaderWebsite v-if="showL"></HeaderWebsite>
   <router-view @user_LoggedIn="showLayout"></router-view>
   <FooterWesite v-if="showL"></FooterWesite>
  </div>
</template>
<script>
import HeaderWebsite from './components/Header.vue';
import FooterWesite from './components/Footer.vue';

export default {
  components: {
    HeaderWebsite,
    FooterWesite
  },
  data(){
    return{
      showL:false
    }
  },
  methods:{
    showLayout(){
      this.showL = true
    }
  }
}
</script>

<style>

</style>
