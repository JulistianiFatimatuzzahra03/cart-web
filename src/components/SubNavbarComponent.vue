<template>
   
       {{ status }}
</template>
<script>
  import { mapActions, mapGetters, mapState } from "vuex";
export default {
    methods:{
      produk(){
        this.$router.push('/product');
      },
      kategori(){
        this.$router.push('/kategori');
      },
      brans(){
        this.$router.push('/brans');
      }
    },
    computed:{
      ...mapState('auth', ['status']),
      ...mapState('brance', ['status']),
      ...mapState('product', ['status']),
      ...mapState('kategori', ['status']),
    }
}
</script>
<style>
.y {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding-left:20% ;
}

li {
  float: left;
}
.ip{
  float: right;
  padding-right:75px ;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */

</style>