<template>
    <h2 style="color: black; padding-left: 100px;" class="text-2xl font-bold tracking-tight text-gray-900"> keranjang    </h2>

    <center>
    <div class="container">
         <br>
        <div v-for="carts in getcart.cart_items" :key="carts.cart_id">
            <div
              class="bg-white rounded-lg shadow-md p-6 mb-4"
              v-for="allcart in carts"
              :key="allcart.cart_id"
            >
              <table class="w-full">
                <thead>
                  <tr>
                    <th class="text-left font-semibold">produk</th>
                    <th class="text-left font-semibold">Harga</th>
                    <th class="text-left  font-semibold">Jumlah</th>
                    <th class="text-left font-semibold">stock</th>
                    <th class="text-left  font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-4">
                      <img
                        class="h-16 w-16 mr-4"
                        src="https://via.placeholder.com/150"
                        alt="Product image"
                      />
                      <br />
                      <span class="font-semibold mb-9">
                        {{ allcart.name }}
                      </span>
                    </td>
                    <td class="py-4">{{ allcart.regular_price }}</td>
                    <td class="py-4">
                      <div class="flex items-center">
                        &nbsp;
                        <button style="border: 1px solid orange;" 
                          class="border rounded-md py-2 px-4 mr-2"
                          v-on:click="editkuantiti({cart_id: allcart.cart_id , type:'minus'})"
                        >
                          -
                        </button>
                        <span vclass="text-center w-8" >{{
                           allcart.qty+counter
                        }}</span>
                        <button style="border: 1px solid orange;"
                          class="border rounded-md py-2 px-4 ml-2"
                          v-on:click="editkuantiti({cart_id: allcart.cart_id , type:'plus'})"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td class="py-4"> &nbsp; {{ allcart.stock }}</td>
                    <td class="py-4">
                      <button @click="deletecart(allcart.cart_id)"
                        style="background: orange; color: white"
                        class="bg-transparentfont-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
              style="background: orange; width: 100%; color: white;"
              class="bg-transparentfont-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded"
            >
              Beli Sekarang {{  allcart.regular_price*allcart.qty }}
            </button>
            </div>
          </div>
      </div>
 </center>

</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("cart", ["getcart"]),
  },
  data() {
    return {
      counter: 0,
      filter :[]
    };
  },
  methods: {
    ...mapActions('cart',['deletecart','editkuantiti']),
    tambah() {
        this.counter++
    },
    kurang() {
      if (this.counter > 1) {
        this.counter--;
      }
    },
  },
};
</script>