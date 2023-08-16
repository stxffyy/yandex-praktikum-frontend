<template>
  <div class="page page-1">
    <HalfLeft />
    <HalfRight :latestSelfie="latestSelfie" />
  </div>
</template>
  
<script>
import HalfLeft from "../components/HalfLeft.vue";
import HalfRight from "../components/HalfRight.vue";

export default {
  components: {
    HalfLeft, HalfRight,
  },
  data() {
    return {
      latestSelfie: require("@/assets/IMG_7825.jpeg"),
    };
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

.page-1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}
</style>
  