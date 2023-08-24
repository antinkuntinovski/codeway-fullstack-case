<template>
    <main class="login">
      <img src="../../public/icon.png" alt="" height="239" width="375">
      <p class="title">Please Sign In</p>
      <section class="forms">
        <form class="login" @submit.prevent="login">
          <input
            type="email"
            placeholder="Email address"
            v-model="login_form.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />
          <div class="submit">
            <input class="login-input" type="submit" value="Sign In" />
          </div>
        </form>
        <p class="copyright">Codeway © 2021</p>
      </section>
    </main>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const login_form = ref({});
      const store = useStore();
  
      const login = async () => {
        try {
          await store.dispatch('login', login_form.value);
        } catch (error) {
          console.log(error);
        }
      };
  
      return {
        login_form,
        login,
      };
    },
  };
  </script>

<style>
    form{
        max-width: 420px;
        margin: auto auto;
        background: none;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }

    input[type='email']{
        border: 1px solid rgb(80, 80, 80) !important;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        display: inline-block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        color: #ffffff;
        border: #aaa;
        margin-bottom: 2px;
        background: none;

    }
    input[type='password']{
        border: 1px solid rgb(80, 80, 80) !important;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: inline-block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        color: #ffffff;
        border: #aaa;
        margin-bottom: 2px;
        background: none;
    }
    input:focus{
        outline: none;
        border-color: crimson !important;
    }
    input::placeholder{
        font-family: Arial, Helvetica, sans-serif;
        color: #ddd;
        font-size: 16px;
    }
    .submit {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        margin-top: 10px;
        height: 30px;
    }
    .title {
        font-size: 32px;
        font-weight: bold;
        color: #5d507d;
        left: auto;
        top: auto;
    }
    .copyright {
        font-size: 12px;
        font-weight: bold;
        color: #5d507d;
        left: auto;
        top: auto;
        text-align: center;
    }   
    .login-input{
        display: inline-block;
        margin-left: auto;
        width: 100%;
        height: 100%;
        font-size: 16px;
        background: #421fce;
        border: 1px solid #421fce;
        border-radius: 10px;
        color: white;
    }
    .login-input:focus{
        border: 1px solid crimson;
    }
</style>