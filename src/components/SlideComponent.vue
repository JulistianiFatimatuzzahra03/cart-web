<template>
    <!-- <div id="app">
        <br>    
  <center>
    <div class="relative slide">
        <div class="carousel-inner relative overflow-hidden ">
          <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
            <img  style="width: 90%;  border-radius: 20px;" class="block w-full" :src="img" alt="First slide" />
          </div>
        </div>
      </div>
  </center>
</div>
<br> -->
<br>
</template>
<script>
export default {
    data: () => ({
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPA9OGxi2leUs6NsQo_8KbdGVb7wZdqYsVVg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzrPm4IRzxW3oKhPnktjkyxzgQXdeAboTQg&usqp=CAU",
    ],
    active: 0
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 3000);
  }
}
</script>
<style>
.left-full {
    left: -100%;
  }
  
  .carousel-item {
    float: left;
    position: relative;
    display: block;
    width: 100%;
    margin-right: -100%;
    backface-visibility: hidden;
  }
  
  .carousel-item.active {
    left: 0;
  }
</style>