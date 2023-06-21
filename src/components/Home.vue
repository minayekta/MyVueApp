<template>
    home page
    <button @click="goTocontact" class="bg-primary border-0 text-white px-2 py-2">Go to Contact</button>
</template>

<script>
import { useRouter} from 'vue-router'
export default {
    methods:{
     goTocontact(){
        console.log('hi')
        console.log(this.$route.params)
        this.$router.push('/contact-us')
    }
}
}
</script>