

<template>
  <div>
   <HeaderWebsite></HeaderWebsite>
   <router-view></router-view>
   <FooterWesite></FooterWesite>
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
}
</script>

<style>

</style>
