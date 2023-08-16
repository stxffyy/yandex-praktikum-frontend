<template>
  <div class="container">
    <div class="latest-selfie">
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    latestSelfie: {
      type: String
    }
  },
};
</script>

<style scoped>
.container {
  background-image: url("../assets/sky.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.text {
  font-size: 1rem;
  text-align: left;
}

.latest-selfie {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.latest-selfie_img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}
</style>
  