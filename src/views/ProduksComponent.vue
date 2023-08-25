<template>
  <SlideComponent></SlideComponent>
  <div v-if="getProduct.products == undefined">
    <center>
      <br /><br /><br /><br />
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </center>
  </div>
  <div v-else>

    <div class="bg-white">
      <div class="mx-auto max-w-1xl px-4 py-2 lg:max-w-7xl lg:px-7">
        <div 
          class="mt-1 grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-5"
        >
          <div
            class="card shadow-xl group relative"
            v-for="product in getProduct.products.data"
            :key="product.id"
          >
            <router-link :to="'/product/detailproduct/' + product.slug">
              <div
                card
                shadow
                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
              >
                <img
                  v-if="product.thumbnail_image == ''"
                  src="https://dynamic.zacdn.com/Vk9lsk2qfXXThxBvlvuKgrJKtKY=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/executive-3075-5173714-2.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <img
                  v-else
                  src="https://dynamic.zacdn.com/Vk9lsk2qfXXThxBvlvuKgrJKtKY=/filters:quality(70):format(webp)/https://static-id.zacdn.com/p/executive-3075-5173714-2.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700 pl-2 font-mono text-xl">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {{ product.name }}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500 pl-2">
                    stok : {{ product.stock }}
                  </p>
                  <!-- <p>stok varians {{product.variations[0].stock}}</p> -->
                </div>
                <p style="padding-left: 30px"></p>
                <center>
                  <div
                    style="padding-left: 30px"
                    data-te-chip-init
                    data-te-ripple-init
                    class="[word-wrap: break-word] my-[8px] mr-4 flex h-[30px] cursor-pointer items-center justify-between rounded-[16px] border border-[#22acf6] bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#dc4c64] hover:!shadow-none dark:text-neutral-200"
                    data-te-ripple-color="dark"
                  >
                    <p class="text-sm font-medium text-gray-900">
                      {{ product.base_price }}
                    </p>
                    <span
                      data-te-chip-close
                      class="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b] dark:text-neutral-400 dark:hover:text-neutral-100"
                    >
                    </span>
                  </div>
                </center>
                &nbsp;
              </div>
              <center>
                <br />
                <button
                  type="button"
                  style="background: blue"
                  class="inline-block rounded px-12 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Beli
                </button>
              </center>
            </router-link>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import SlideComponent from "../components/SlideComponent.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    SlideComponent,
  },
  computed: {
    ...mapGetters("product", ["getProduct"]),
    
  },
  mounted() {
    this.$store.dispatch("product/fetchProduct");
  },
};
</script>
