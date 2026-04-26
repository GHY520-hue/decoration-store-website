<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- 产品详情 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- 返回按钮 -->
        <router-link to="/products" class="inline-flex items-center text-gray-600 hover:text-amber-600 mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回产品列表
        </router-link>
        
        <div class="flex flex-col md:flex-row gap-8">
          <!-- 产品图片 -->
          <div class="md:w-1/2">
            <div class="bg-white rounded-lg shadow-md p-4">
              <img :src="product?.image_url" alt="产品图片" class="w-full h-auto object-cover rounded" />
            </div>
          </div>
          
          <!-- 产品信息 -->
          <div class="md:w-1/2">
            <h1 class="text-3xl font-bold mb-4">{{ product?.name }}</h1>
            <div class="flex items-center mb-6">
              <span class="text-gray-600 mr-4">分类：{{ product?.category }}</span>
              <span class="text-amber-600 font-bold text-2xl">¥{{ product?.price }}</span>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 class="text-xl font-semibold mb-4">产品描述</h2>
              <p class="text-gray-700 leading-relaxed">{{ product?.description }}</p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white font-medium px-8 py-4 md:px-6 md:py-3 rounded-lg transition-colors flex-1 text-lg md:text-base active:scale-[0.98]">
                立即购买
              </button>
              <button class="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 active:bg-amber-100 font-medium px-8 py-4 md:px-6 md:py-3 rounded-lg transition-colors flex-1 text-lg md:text-base active:scale-[0.98]">
                加入购物车
              </button>
            </div>
          </div>
        </div>
        
        <!-- 相关产品 -->
        <div class="mt-16">
          <h2 class="text-2xl font-semibold mb-6">相关产品</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img :src="relatedProduct.image_url" alt="产品图片" class="w-full h-48 object-cover" />
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">{{ relatedProduct.name }}</h3>
                <div class="flex justify-between items-center gap-2">
                  <span class="text-amber-600 font-bold text-base">¥{{ relatedProduct.price }}</span>
                  <router-link :to="`/products/${relatedProduct.id}`" class="text-amber-600 hover:text-amber-800 active:bg-amber-50 font-medium px-3 py-2 -mr-3 rounded-lg transition-colors">
                    查看详情 →
                  </router-link>
                </div>
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
import { staticProducts } from '../data/products';

const route = useRoute();
const id = computed(() => route.params.id as string);

// 当前产品 - 从静态数据中查找
const product = computed(() => {
  return staticProducts.find(p => p.id === parseInt(id.value)) || staticProducts[0];
});
const allProducts = ref([...staticProducts]);

// 相关产品
const relatedProducts = computed(() => {
  return allProducts.value.filter((p: any) => p.id !== parseInt(id.value) && p.category === product.value?.category).slice(0, 4);
});

// 尝试从API加载数据
async function loadProduct() {
  try {
    const { productsApi } = await import('../api');
    const productData = await productsApi.getById(parseInt(id.value));
    if (productData) {
      // API返回时更新（静态数据作为fallback保持不变）
      const allData = await productsApi.getAll();
      if (allData && allData.length > 0) {
        allProducts.value = allData;
      }
    }
  } catch {
    // 使用静态数据
  }
}

onMounted(() => {
  loadProduct();
});
</script>