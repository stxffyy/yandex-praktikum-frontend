<template>
    <div class="page page-3">
        <Video />
    </div>
</template>

<script>
import Video from "@/components/Video.vue";
export default {
    components: {
        Video
    }
}
</script>

<style>
.page {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
}

.page-3 {
    background-color: #AEA297;
}
</style>
