<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-12 bg-amber-50">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-center">后台管理</h1>
        <p class="text-center text-gray-600 mt-4">管理产品、案例和订单</p>
      </div>
    </section>
    
    <!-- 管理内容 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 产品管理 -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-6">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">产品管理</h2>
            </div>
            <p class="text-gray-600 mb-6">添加、编辑和删除产品</p>
            <router-link to="/admin/products" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors inline-block">
              进入管理
            </router-link>
          </div>
          
          <!-- 案例管理 -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-6">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">案例管理</h2>
            </div>
            <p class="text-gray-600 mb-6">添加、编辑和删除案例</p>
            <router-link to="/admin/projects" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors inline-block">
              进入管理
            </router-link>
          </div>
          
          <!-- 订单管理 -->
          <div class="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-6">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 class="text-xl font-semibold">订单管理</h2>
            </div>
            <p class="text-gray-600 mb-6">查看和处理订单</p>
            <router-link to="/admin/orders" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors inline-block">
              进入管理
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
</script>