<template>
  <div class="page page-2">
    <PhotosAndText />
  </div>
</template>
  
<script>
import PhotosAndText from "../components/PhotosAndText.vue";

export default {
  components: {
    PhotosAndText,
  },
};
</script>

<style scoped>
.page {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
}

.page-2 {
  background-color: var(--primary-color);
}
</style>
  