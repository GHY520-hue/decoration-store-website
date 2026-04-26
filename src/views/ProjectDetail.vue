<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- 案例详情 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- 返回按钮 -->
        <router-link to="/projects" class="inline-flex items-center text-gray-600 hover:text-amber-600 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回案例列表
        </router-link>
        
        <!-- 案例标题 -->
        <h1 class="text-3xl md:text-4xl font-bold mb-8">{{ project?.title }}</h1>
        
        <!-- 图片轮播 -->
        <div class="relative h-[400px] md:h-[500px] mb-12 overflow-hidden rounded-lg">
          <div class="relative w-full h-full">
            <div v-for="(image, index) in project?.image_urls" :key="index" class="absolute inset-0 transition-opacity duration-1000" :class="{ 'opacity-100': currentImage === index, 'opacity-0': currentImage !== index }">
              <img :src="image" alt="案例图片" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- 轮播控制 -->
          <button @click="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <!-- 轮播指示器 -->
          <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button v-for="(image, index) in project?.image_urls" :key="index" class="w-3 h-3 rounded-full transition-colors" :class="{ 'bg-white': currentImage === index, 'bg-white/50': currentImage !== index }" @click="currentImage = index"></button>
          </div>
        </div>
        
        <!-- 案例描述 -->
        <div class="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-4">案例详情</h2>
          <p class="text-gray-700 leading-relaxed">{{ project?.description }}</p>
        </div>
        
        <!-- 相关案例 -->
        <div class="mb-8">
          <h2 class="text-2xl font-semibold mb-6">相关案例</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="relatedProject in relatedProjects" :key="relatedProject.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img :src="relatedProject.image_urls[0]" alt="案例图片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ relatedProject.title }}</h3>
                <router-link :to="`/projects/${relatedProject.id}`" class="text-amber-600 hover:text-amber-800 font-medium text-sm">
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
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { projectsApi } from '../api';

const route = useRoute();
const id = computed(() => route.params.id as string);

// 轮播状态
const currentImage = ref(0);

// 当前案例
const project = ref(null);
const allProjects = ref([]);

// 相关案例
const relatedProjects = computed(() => {
  return allProjects.value.filter(p => p.id !== parseInt(id.value)).slice(0, 3);
});

// 加载数据
async function loadProject() {
  try {
    const projectData = await projectsApi.getById(parseInt(id.value));
    project.value = {
      ...projectData,
      image_urls: JSON.parse(projectData.image_urls || '[]')
    };
    const allData = await projectsApi.getAll();
    allProjects.value = allData;
  } catch (error) {
    console.error('加载案例失败:', error);
  }
}

// 轮播控制
const prevImage = () => {
  const imageUrls = project.value?.image_urls || [];
  currentImage.value = (currentImage.value - 1 + imageUrls.length) % imageUrls.length;
};

const nextImage = () => {
  const imageUrls = project.value?.image_urls || [];
  currentImage.value = (currentImage.value + 1) % imageUrls.length;
};

// 重置轮播图片索引
onMounted(() => {
  currentImage.value = 0;
  loadProject();
});
</script>