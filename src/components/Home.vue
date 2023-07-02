<template>
    <!-- <pulse-loader :loading="loading" :color="blue" :size="size"></pulse-loader> -->
    home page
    <button @click="goTocontact" class="bg-primary border-0 text-white px-2 py-2">Go to Contact</button>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
    components:{
        PulseLoader
    },
    methods:{
     goTocontact(){
        console.log('hi')
        console.log(this.$route.params)
        this.$router.push('/contact-us')
    }
}
}
</script>