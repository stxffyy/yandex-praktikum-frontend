<template>
  <div class="container2">
    <div class="block block-1">
      <img :src="highschoolPhoto" alt="Фото из старшей школы" class="highschool_photo_img">
    </div>
    <div class="block block-2">
      <p class="text">Программирование стало для меня не только профессией, но и источником бесконечного вдохновения и радости. Весь этот путь начался благодаря моему преподавателю по веб-разработке, который смог пробудить во мне страсть к созданию и творчеству.</p>
    </div>
    <div class="block block-3">
      <p class="text">С первых же уроков он демонстрировал, как мир веб-технологий открывает неиссякаемые возможности. Его энтузиазм и глубокие знания вдохновляли меня. Он делился своими профессиональными историями, успехами и неудачами, показывая, что в программировании есть место для творчества и самовыражения.
      </p>
    </div>
    <div class="block block-4">
      <img :src="latestSelfie" alt="Последнее селфи" class="latest_selfie_img">
    </div>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      highschoolPhoto: require("../assets/IMG_8123.jpeg"),
      latestSelfie: require("../assets/IMG_7825.jpeg"),
    };
  },
};
</script>
  
<style scoped>
.container2 {
  display: grid;
  grid-template-columns: repeat(2, 450px);
  grid-template-rows: repeat(2, 300px);
  grid-gap: 20px;
}

.text {
  text-align: justify;
  text-align-last: center;
  margin: 1rem;
  font-weight: 100;
}

.highschool_photo_img,
.latest_selfie_img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

.block {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
}

.block-1,
.block-4 {
  background-color: #7395AE;
}

.block-2,
.block-3 {
  background-color: #557A95;
}
</style>