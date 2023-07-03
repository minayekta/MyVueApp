<template>
    <div class="row mx-0 loginpage">
        <div class="col-4 px-0 right-box m-auto">
        <p>Hi Welcome :)</p>
        </div>
        <div class="col-8 px-0 left-box">
            <form>
            <h3 class="title">Login</h3>
            <div class="username">
              <input
                placeholder="username"
                type="text"
                v-model="username"
              />
            </div>

            <div class="password ">
              <input
                placeholder="password "
                type= 'password'
                v-model="password"
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
            login_status:false,
            username: '',
            password: ''
        }
    },
    methods:{
        login(){
            this.login_status = true;
            this.$emit('user_LoggedIn');
            let formdata = {
              'username' : this.username,
              'password' : this.password
            }
            console.log(formdata)
            this.$router.push({path:'/'} );
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
background-color: #4D44B5;
height: 100vh; 
margin: auto;
text-align: center;
color: #fff;
}
.left-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.left-box>form{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: var(--color-purple, #4D44B5);
  border-radius: 12px;
  padding: 40px;
  width: 30%;
  color: #5E5E5E;
}
.left-box button{
  border: none;
  padding: 10px;
  border-radius: 12px;
  outline: none;
}
.left-box h3{
  color: #fff;
  margin-bottom: 32px;
}
.left-box input{
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 12px;
  margin-bottom: 8px;
  outline: none;
}
</style>