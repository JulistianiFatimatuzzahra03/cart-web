import { createStore } from "vuex";
import auth from './DataModuls/auth'
import product from './DataModuls/product'
import brance from './DataModuls/brance'
import kategori from "./DataModuls/kategori";
import cart from "./DataModuls/cart";
import user from "./DataModuls/user";

const store = createStore({
      modules: {
          auth,
          product,
          brance,
          kategori,
          cart,
          user
      },
})
export default store