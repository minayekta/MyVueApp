<template>
    <div class="row mx-0 loginpage">
        <div class="col-4 px-0 right-box">
        Hi Welcome :)
        </div>
        <div class="col-8 px-0 left-box">
            <form>
            <h3 class="title">Login</h3>
            <div class="username">
              <input
                placeholder=" username"
                type="text"
              />
            </div>

            <div class="password ">
              <input
                placeholder="password "
                type= 'password'
              />

            </div>
            <button
              class="loginButton"
              @click.prevent="login"
            >submit</button>
          </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            login_status:false
        }
    },
    methods:{
        login(){
            this.login_status = true;
            this.$emit('user_LoggedIn');
        }
    },
    emits:[
        "user_LoggedIn"
    ]

}
</script>
<style scoped>
.loginpage{
    height: 100vh;
}
.right-box{
background-color: blue;
}
.left-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>