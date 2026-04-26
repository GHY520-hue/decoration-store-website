<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-amber-800">钰学装潢材料店</h1>
        </div>
        
        <!-- 桌面导航 -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-amber-800 font-medium px-2 py-2">首页</router-link>
          <router-link to="/projects" class="text-gray-700 hover:text-amber-800 font-medium px-2 py-2">完工展示</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-amber-800 font-medium px-2 py-2">家具材料</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-amber-800 font-medium px-2 py-2">联系我们</router-link>
        </nav>
        
        <!-- 移动端菜单按钮 - 增大触摸区域 -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="text-gray-700 p-3 -m-3 active:bg-amber-100 active:rounded-full transition-colors"
            aria-label="打开菜单"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 移动端导航菜单 - 增大链接触控区域 -->
      <transition name="slide-down">
        <div v-if="isMenuOpen" class="md:hidden mt-2 py-4 border-t">
          <nav class="flex flex-col space-y-1">
            <router-link to="/" class="text-gray-700 hover:text-amber-800 hover:bg-amber-50 font-medium text-lg px-4 py-3 rounded-lg transition-colors" @click="isMenuOpen = false">🏠 首页</router-link>
            <router-link to="/projects" class="text-gray-700 hover:text-amber-800 hover:bg-amber-50 font-medium text-lg px-4 py-3 rounded-lg transition-colors" @click="isMenuOpen = false">📸 完工展示</router-link>
            <router-link to="/products" class="text-gray-700 hover:text-amber-800 hover:bg-amber-50 font-medium text-lg px-4 py-3 rounded-lg transition-colors" @click="isMenuOpen = false">🪵 家具材料</router-link>
            <router-link to="/contact" class="text-gray-700 hover:text-amber-800 hover:bg-amber-50 font-medium text-lg px-4 py-3 rounded-lg transition-colors" @click="isMenuOpen = false">📞 联系我们</router-link>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.25s ease-out;
}
.slide-down-leave-active {
  transition: all 0.15s ease-in;
}
.slide-down-enter-from {
  transform: translateY(-8px);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}
</style>
