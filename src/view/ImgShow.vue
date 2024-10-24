<template>
<div class="waterfall-container">
  <button @click="getMenu" />
    <Waterfall :list="imageList" :gutter="10" :lazyLoad="true" :debounce="200">
        <template #default="{ item }">
            <div class="image-item">
                <img :src="item.image" :data-src="item.url" class="lazyload" />
            </div>
        </template>
    </Waterfall>
</div>
</template>

<script setup>
import { getMenuList } from '@/api/Menu';
import { ref } from 'vue';
import { Waterfall } from 'vue-waterfall-plugin-next';

// 图片数据
// const imageList = ref([
//     { url: 'https://via.placeholder.com/600x400?text=1' },
//     { url: 'https://via.placeholder.com/400x600?text=2' },
//     { url: 'https://via.placeholder.com/300x300?text=3' },
// ]);

const imageList = ref([{
            image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.v1jIyXQmBQ_B8YEEeGFu3QHaNH?w=187&h=332&c=7&r=0&o=5&pid=1.7'
        },
        {
            image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.z34uJPz2bm7fqakIckHVnAHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7'
        },
        {
            image: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.2zd6VjunSEhgIOVfmMFXZAHaNK?pid=ImgDet&rs=1'
        },
        {
            image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.BD8Gun2dXm_3Zuue4HVmJAHaKX?w=197&h=275&c=7&r=0&o=5&pid=1.7'
        },
        {
            image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.v1jIyXQmBQ_B8YEEeGFu3QHaNH?w=187&h=332&c=7&r=0&o=5&pid=1.7'
        },
        {
            image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.z34uJPz2bm7fqakIckHVnAHaLH?w=197&h=296&c=7&r=0&o=5&pid=1.7'
        },
        {
            image: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.2zd6VjunSEhgIOVfmMFXZAHaNK?pid=ImgDet&rs=1'
        },
        {
            image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.BD8Gun2dXm_3Zuue4HVmJAHaKX?w=197&h=275&c=7&r=0&o=5&pid=1.7'
        },
    ]);

function getMenu() {
    getMenuList()
}

</script>

<style scoped>
.waterfall-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

.image-item {
    margin-bottom: 10px;
    background: #f0f0f0;
}

.image-item img {
    width: 100%;
    display: block;
    transition: opacity 0.3s ease;
}

.lazyload {
    opacity: 0;
}

.lazyload.loaded {
    opacity: 1;
}
</style>