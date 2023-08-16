<template>
  <div class="video-container">
    <div class="title">
      <h1>Фишка СSS</h1>
      <h4>CSS-переменные</h4>
    </div>
    <video controls class="video">
      <source :src="videoUrl" type="video/mp4">
      <!-- Ваш браузер не поддерживает видео. -->
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return { videoUrl: 'http://46.17.104.99:8888/video' }
  }
};
</script>

<style scoped>
.video {
  width: 500px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
