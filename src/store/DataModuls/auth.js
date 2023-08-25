import axios from "axios";
const auth = {
    namespaced: true,
    state: {
        token: localStorage.getItem('token') || '',
        userdata : [],
    },
    getters: {
        isAuthenticated: state => (!!state.token && state.token != 'undefined'),
    },
    actions: {
        async login({commit}, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/login",
                     credentials
                );
                const token = response.data.access_token;
                if(token == undefined){
                    this.$router.push('/login');
                }
                localStorage.setItem("token", token);
                commit("SET_TOKEN", token);
                return true
            } catch (error) {
                return error;
            }
        },
        async register({commit}, credentials) {
            try {
                const response = await axios.post(
                    "https://ecommerce.olipiskandar.com/api/v1/auth/signup",
                     credentials
                );
                console.log(response)
                const token = response.data.access_token;
                localStorage.setItem("token", token);
                commit("SET_TOKEN", token);
                return true
            } catch (error) {
                return error;
            }
        },
        async getusertoken({commit}, token) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/user/info',
                 {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                commit('SET_TOKEN_user', response.data);
            } catch (error) {
                return error;
            }
        },
        logout({commit}){
            const token = localStorage.getItem('token');
            localStorage.removeItem('token');
            commit("SET_TOKEN", token)
        }
    },  
    mutations: {
        SET_TOKEN(state, token){
            state.token = token;
        },
        SET_TOKEN_user(state, token){
            state.userdata = token;
        }
    }
}

export default auth;