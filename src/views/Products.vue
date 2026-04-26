<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-12 bg-amber-50">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-center">家具材料</h1>
        <p class="text-center text-gray-600 mt-4">浏览我们的产品，为您的家选择优质材料</p>
      </div>
    </section>
    
    <!-- 分类导航 -->
    <section class="py-8 bg-white border-b">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button @click="onCategoryChange('全部')" class="px-6 py-2 rounded-full transition-colors" :class="{ 'bg-amber-600 text-white': selectedCategory === '全部', 'bg-gray-100 text-gray-700 hover:bg-gray-200': selectedCategory !== '全部' }">
            全部
          </button>
          <button v-for="category in categories" :key="category" @click="onCategoryChange(category)" class="px-6 py-2 rounded-full transition-colors" :class="{ 'bg-amber-600 text-white': selectedCategory === category, 'bg-gray-100 text-gray-700 hover:bg-gray-200': selectedCategory !== category }">
            {{ category }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- 产品列表 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="product in filteredProducts" :key="product.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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
        
        <!-- 无产品提示 -->
        <div v-if="filteredProducts.length === 0" class="text-center py-16">
          <p class="text-gray-600">暂无相关产品</p>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { productsApi } from '../api';

// 分类列表
const categories = ['家具', '材料', '地板', '墙纸'];

// 选中的分类
const selectedCategory = ref('全部');

// 产品数据
const products = ref([]);
const filteredProducts = computed(() => products.value);

// 加载产品
async function loadProducts(category?: string) {
  try {
    const data = await productsApi.getAll(category && category !== '全部' ? category : undefined);
    products.value = data;
  } catch (error) {
    console.error('加载产品失败:', error);
  }
}

// 监听分类变化
function onCategoryChange(category: string) {
  selectedCategory.value = category;
  loadProducts(category);
}

onMounted(() => {
  loadProducts();
});
</script>