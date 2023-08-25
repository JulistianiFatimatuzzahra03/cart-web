<template>
  <section class="bg-gray-100 dark:bg-gray-900">
    <div class="flex flex-col px-9 items-center justify-center">
      <br /><br /><br /><br /><br />
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4 space-y-4 md:space-y-6 sm:p-4">
          <h1
            class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Register
          </h1>
          <form
            @submit.prevent="performregister"
            class="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                > name</label
              >
              <input
                type="text"
                v-model="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="masukan nama"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                > email</label
              >
              <input
                type="text"
                v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="masukan email"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                > telepon</label
              >
              <input
                type="number"
                v-model="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="masukan nomor telepon"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm Password</label
              >
              <input
                type="password"
                v-model="confirm_password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              style="background: rgb(0, 0, 255)"
              @click="$emit('isLogin', true)"
              type="submit"
              class="w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Sudah Punya Akun ?
              <RouterLink to="/login">
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Login</a
                >
              </RouterLink>
            </p>
          </form>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["register"]),
    async performregister() {
      const credentials = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        password: this.password,
        confirm_password: this.confirm_password,
      };

      const success = await this.register(credentials);
      if (success == true) {
        this.$router.push("/");
      } else {
        alert("Login failed");
      }
    },
  },
};
</script>
