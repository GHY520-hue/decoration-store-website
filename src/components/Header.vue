<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-amber-800">钰学装潢材料店</h1>
        </div>
        
        <!-- 桌面导航 -->
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-amber-800 font-medium">首页</router-link>
          <router-link to="/projects" class="text-gray-700 hover:text-amber-800 font-medium">完工展示</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-amber-800 font-medium">家具材料</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-amber-800 font-medium">联系我们</router-link>
        </nav>
        
        <!-- 移动端菜单按钮 -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- 移动端导航菜单 -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 py-4 border-t">
        <nav class="flex flex-col space-y-4">
          <router-link to="/" class="text-gray-700 hover:text-amber-800 font-medium" @click="isMenuOpen = false">首页</router-link>
          <router-link to="/projects" class="text-gray-700 hover:text-amber-800 font-medium" @click="isMenuOpen = false">完工展示</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-amber-800 font-medium" @click="isMenuOpen = false">家具材料</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-amber-800 font-medium" @click="isMenuOpen = false">联系我们</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>