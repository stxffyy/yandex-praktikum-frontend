<template>
  <div class="app">
    <div class="container">
    <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import Page1 from "@/pages/Page1.vue";
import Page2 from "@/pages/Page2.vue";
import Registration from "@/pages/Registration.vue";

export default {
  components: {
    Page1,
    Page2,
    Registration
  },
  data() {
    return {
      latestSelfie: require("@/assets/IMG_7825.jpeg"),
      highschoolPhoto: require("@/assets/IMG_8123.jpeg"),
      programmingStory: "Программирование стало для меня любимым занятием...",
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital@1&family=Tektur&display=swap');

:root{
  --primary-color: #928E93;
  --font-size: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tektur', cursive;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>

