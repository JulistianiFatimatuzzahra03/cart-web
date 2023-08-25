<template>
  
  <header class="bg-white-500 shadow" style="width: 100% ">
    <div class="container mx-auto px-4 py-8 flex items-center">
      <!-- logo -->
      <div class="mr-auto md:w-48 flex-shrink-0">
        <img
          class="h-8 md:h-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX////z8/NbW1s7OzvS0tKJiYmGhobOzs78/PwAAAD4+Pjl5eXu7u719fXCwsJhYWHY2NiwsLB+fn6ZmZnf39/IyMi3t7dkZGSxsbFxcXHc3NxERESOjo4jIyMzMzM/Pz9sbGynp6dLS0uhoaEWFhZ5eXkvLy8fHx9TU1Poo35UAAADiklEQVR4nO3aCZOiOhSG4YiMBsImiCvdio4z/v9fODlg49JTdt/b7QLzPlVjydJT56sgISRKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4IxuPq6d0Gpa6Wvk+KNL/Bqtei/9K1b9lx+PrvGrevH140n7EzrXjw9J+PT+xYT25ql9d3vYsglbfjd9l9BfOdN9fzk4bEobauVn/r0L+zbvEuo8Soxu+vqqDXuv+7sX9m0+8zs03vw+xdzE9YRaEg690b2quYUP27AovaTVN5uPEibepnefSm7l/Z1GGfe4FazSu5ZzA4eEzWVoBxSbiXrbl3iT4CFlfaOmDQO3zqLXXnNZ2p9gMvjbX7XJIWG47q/jhf3ix2lz3abLsDNPbf7L4cr0V5OoUNUV6jup7s5z6XSmVGZs3/7iqnmiJGHwWh76w5arEpq+UmMvUPmrUdoJZX/g5VVLdiRhnqqk3w9Kxz5fm7XsXvw09fGOJNSxs1ksNvIDVCN7wSp39dZJdCWhMnWHaD93Y9sNLgPbMVZ7upLw8N5UBk2O3G+C09FTy10+tZmdvcmcPMd0L2EZqf7Jc2kHE+7CdHv6Mr97CZfJ5my7cwnH2XJ8tqNzCcvdxViicwnnvy7Gg51L+PtySN+BhHv3KBl7o8Q9U7Y+oZ8NjrLJz2JwIXp0hV+jL14T7rLH1HE/r8mjK7gx86vNr34/Y7h+dAW3VrR6guIz4vHH57Savw8fXcKNBR/M0rRf3vnesBy2eqLwE/zLRxwA+F90szD47UV3M4TSpyed7/jLf/C0bHXhxK1jubN6Ii04foZRlFQLa2eunDKOchkBm2rNl5kZORTaE83D6v+MZBplqZT6I4tiGQ+WueyOqsF8lOZje8itz1GmnMpBmTxVszRKZV4q8bRKn7oZ57bhcmkHWZM3tTtmVcK8Tlj6UvzONlres9/G1YzbVhpPFhM70vKDVA2eOaFOq9+RVkOZupeGGp20YR4XC9v1N2/cjgmNfJPk7naUF0+c0F5httzMtmEwr/+p0VAO5NWsdlSvWJBzisBuLwrZa69Srfb11JtyM7XbPXNC3YuL6UTacTItnJ79MtnJ6tF8vg2kDTNpyyAu4kl1q6nasEpoNoUj61FsQrN/4oSiWRF0eL8dVrdUv1etMQn983NOtH55FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6bP30zI3bVguYzAAAAAElFTkSuQmCC"
          alt=""
        />
      </div>
      <!-- phone number -->

      <!-- buttons -->
      <nav class="contents">
        
        <ul  class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          
          <li>
              <a href="/"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
            </li>
          <li>
              <a href="/product"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
            </li>
            <li>
              <a href="/kategori"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Category</a>
            </li>
            <li>
              <a href="/brans"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Brands</a>
            </li>
            <li>
              <a href="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            <li>
              <a href="/profil"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</a>
            </li>
          <li class="ml-2 lg:ml-4 relative inline-block"  v-if="isAuthenticated">
           <router-link to="/cart" v-if="cart.cart_items != undefined">
              <div  style="background: blue;"
                class="absolute -top-1 text-white right-0 z-10 text-xs font-bold px-1 py-0.5 rounded-sm"
              >
              {{ cart.cart_items.data.length }}
              </div>
              <svg
                class="h-9 lg:h-10 p-2 text-gray-500"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                ></path>
              </svg>
            </router-link>
          </li>
          <li   v-if="isAuthenticated != true"
             style="background: blue;" class="ml-2 lg:ml-4 relative inline-block text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             v-on:click="login" >
              Login
          </li>
          <li class="ml-2 lg:ml-4 relative inline-block">
            <router-link
              to="/register"
              v-if="isAuthenticated != true"  style="background: blue;"
              class="text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </router-link>
          </li>

   
          <li class="ml-2 lg:ml-4 relative inline-block">
            <button
              v-on:click="_logout()"
              v-if="isAuthenticated"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>
          </li>
          
        </ul>

      </nav>
    </div>

    <hr />
  </header>       
           <div v-if="cart.shops != undefined">
               <div v-for="y in cart.shops.data" :key="y.id">
                {{ y.name }}
               </div>
           </div>
</template>
<script>
import { mapActions, mapGetters,mapState } from "vuex";
export default {
  props:['slug'],
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
    ...mapState('auth',['userdata']),
    ...mapState('cart',['cart'])
  },
  mounted(){
    this.$store.dispatch("cart/getcartdata");
  },
  methods: {
    ...mapActions('auth',['getusertoken']),
    ...mapActions("auth", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("/login");  
    },
    login() {
      this.$router.push("/login");
    },
  },
  created() {
       this.getusertoken(localStorage.token)
  },
};
</script>