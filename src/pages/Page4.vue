<template>
    <div class="page page-4">
        <div class="container">
            <FeedbackForm />
            <div class="bottom-section">
                <h4>Ссылки на исходники приложения:</h4>
                <h4> <a class="link" href="https://github.com/stxffyy/yandex-praktikum-frontend" target="_blank">Фронтенд</a></h4>
                <h4> <a class="link" href="https://github.com/stxffyy/yandex-praktikum-backend" target="_blank">Бэкенд</a>
                </h4>
            </div>
        </div>

    </div>
</template>
  
<script>
import FeedbackForm from '@/components/FeedbackForm.vue';
export default {
    components: {
        FeedbackForm
    }
}
</script>
  
<style scoped>
.page {
    width: 100%;
    height: 100vh;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.page-4 {
    background-image: url('../assets/sand.jpeg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.bottom-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    margin-top: auto;
    margin-bottom: 3rem;
}

.link {
    margin-bottom: 1rem;
    color: black;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>
  