<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- Banner轮播图 -->
    <section class="relative h-[500px] md:h-[600px] overflow-hidden">
      <div class="relative w-full h-full">
        <div v-for="(banner, index) in banners" :key="index" class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentBanner === index, 'opacity-0': currentBanner !== index }">
          <img :src="banner.image" alt="Banner" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div class="container mx-auto px-4">
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ banner.title }}</h2>
              <p class="text-xl text-white mb-8 max-w-2xl">{{ banner.description }}</p>
              <router-link to="/products" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                浏览产品
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播指示器 -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button v-for="(banner, index) in banners" :key="index" class="w-3 h-3 rounded-full transition-colors" :class="{ 'bg-white': currentBanner === index, 'bg-white/50': currentBanner !== index }" @click="currentBanner = index"></button>
      </div>
    </section>
    
    <!-- 推荐案例 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">推荐案例</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img :src="project.image_urls[0]" alt="案例图片" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
              <router-link :to="`/projects/${project.id}`" class="text-amber-600 hover:text-amber-800 font-medium flex items-center">
                查看详情
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/projects" class="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-6 py-3 rounded-lg transition-colors inline-block">
            查看更多案例
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- 热销材料 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">热销材料</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="product in products" :key="product.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img :src="product.image_url" alt="产品图片" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-amber-600 font-bold">¥{{ product.price }}</span>
                <router-link :to="`/products/${product.id}`" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                  查看详情
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-12">
          <router-link to="/products" class="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium px-6 py-3 rounded-lg transition-colors inline-block">
            查看更多产品
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { banners as bannerData } from '../data/banners';
import { projectsApi, productsApi } from '../api';

// Banner数据
const banners = bannerData;

// 轮播状态
const currentBanner = ref(0);

// 数据
const projects = ref([]);
const products = ref([]);

// 加载数据
async function loadData() {
  try {
    const [projectsRes, productsRes] = await Promise.all([
      projectsApi.getAll(),
      productsApi.getAll(),
    ]);
    projects.value = projectsRes.slice(0, 3);
    products.value = productsRes.slice(0, 4);
  } catch (error) {
    console.error('加载数据失败:', error);
  }
}

// 自动轮播
onMounted(() => {
  loadData();
  setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.length;
  }, 5000);
});
</script>