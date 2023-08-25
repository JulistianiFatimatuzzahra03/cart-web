import axios from "axios";
export default {
    namespaced: true,
    state: {
        brance: [],
    },
    getters: {
        getbrance: state => state.brance
    },
    actions: {
        async fetchbrance({ commit }) {
            try {
                const databrance = await axios.get("https://ecommerce.olipiskandar.com/api/v1/all-brands")
                commit('SET_BRANCE', databrance.data.data.slice(0,20))
            } catch (error) {
                alert("Ada error");
                console.log(error);
            }
        },
    },
    mutations: {
        SET_BRANCE(state, brance) {
            state.brance = brance
        },
    }
}