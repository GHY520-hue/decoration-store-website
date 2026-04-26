<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-12 bg-amber-50">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-center">完工展示</h1>
        <p class="text-center text-gray-600 mt-4">查看我们的装修案例，获取装修灵感</p>
      </div>
    </section>
    
    <!-- 案例列表 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img :src="project.image_urls[0]" alt="案例图片" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-gray-500 text-sm">{{ project.create_time }}</span>
                <router-link :to="`/projects/${project.id}`" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm">
                  查看详情
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { projectsApi } from '../api';

// 案例数据
const projects = ref([]);

// 加载数据
async function loadProjects() {
  try {
    const data = await projectsApi.getAll();
    projects.value = data;
  } catch (error) {
    console.error('加载案例失败:', error);
  }
}

onMounted(() => {
  loadProjects();
});
</script>