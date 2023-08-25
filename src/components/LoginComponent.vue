<template>
    <section class="bg--100 dark:bg-gray-900">
        <div class="flex flex-col px-9 items-center justify-center">
            <br><br><br><br><br>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-4 space-y-4 md:space-y-6 sm:p-4">
                    <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Login 
                    </h1>
                    <form @submit.prevent="performLogin" class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" v-model="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="masukan nama" required="">
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" v-model="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                        </div>
                        <button style="background: rgb(0, 0, 255);" @click="$emit('isLogin', true)" type="submit" class="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>                           
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Belum Punya akun ?   <RouterLink to="/register">
                                <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a>
                            </RouterLink> 
                        </p>
                    </form>
                </div>
            </div>
        </div><br><br><br><br><br><br><br><br><br><br><br>
      </section>
      {{ slug }}
  </template>
  <script>
  import { mapActions, mapGetters, mapState } from "vuex";
  
  export default {
      props:['slug'],
      data(){
          return {
              email: '',
              password: ''
          }
      },
    //   mounted(){
    //     this.$store.dispatch("product/fetchProductById", this.slug)
    //   },
    mounted() {
    this.$store.dispatch("product/fetchProduct");
     },
      computed:{
          ...mapGetters('auth',['isAuthenticated']),
          ...mapState('product', ['getid']),
          ...mapGetters("product", ["getProduct"]),
      },
      methods: {
          ...mapActions('auth', ['login']),
          async performLogin(){
              const credentials = {
                  email: this.email,
                  password: this.password
              };
  
              const success = await this.login(credentials);
              if(success == true){
                    if(this.slug == undefined){
                        this.$router.push('/home');
                    }else{
                        this.$router.push('/product/detailproduct/' + this.slug);
                    }
              }
              else{
                  alert("Login failed")
              }
          }
      },
  }
  </script>