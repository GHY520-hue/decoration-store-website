<template>
  <div class="min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-12 bg-amber-50">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold text-center">联系我们</h1>
        <p class="text-center text-gray-600 mt-4">如有任何疑问，欢迎随时联系我们</p>
      </div>
    </section>
    
    <!-- 联系信息 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 公司信息 -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold mb-6">公司信息</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-2">地址</h3>
                  <p class="text-gray-600">青岛市崂山区王哥庄街道钰学装潢材料店</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-2">电话</h3>
                  <p class="text-gray-600">15054277628</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-2">邮箱</h3>
                  <p class="text-gray-600">info@钰学装潢材料店.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-medium mb-2">营业时间</h3>
                  <p class="text-gray-600">周一至周五：9:00 - 18:00</p>
                  <p class="text-gray-600">周六：9:00 - 16:00</p>
                  <p class="text-gray-600">周日：休息</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 地图 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-96 w-full">
              <!-- Google Maps 嵌入 - 青岛市崂山区王哥庄街道钰学装潢材料店 -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.789!2d120.526!3d36.244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5YyX5Lqs5biD55CG5Luj6YCa55Sw5bGx6Le1!5e0!3m2!1szh-CN!2scn!4v1684586320000!5m2!1szh-CN!2scn"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 联系表单 -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-semibold text-center mb-8">发送消息</h2>
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-gray-700 mb-2">姓名</label>
                <input type="text" id="name" class="w-full px-4 py-3 md:py-2 text-base md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="请输入您的姓名" />
              </div>
              <div>
                <label for="phone" class="block text-gray-700 mb-2">电话</label>
                <input type="tel" id="phone" class="w-full px-4 py-3 md:py-2 text-base md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="请输入您的电话" />
              </div>
            </div>
            <div class="mb-6">
              <label for="email" class="block text-gray-700 mb-2">邮箱</label>
              <input type="email" id="email" class="w-full px-4 py-3 md:py-2 text-base md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="请输入您的邮箱" />
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-700 mb-2">消息</label>
              <textarea id="message" rows="5" class="w-full px-4 py-3 md:py-2 text-base md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="请输入您的消息"></textarea>
            </div>
            <button type="submit" class="w-full bg-amber-600 hover:bg-amber-700 active:bg-amber-800 active:scale-[0.98] text-white font-medium px-8 py-4 md:px-6 md:py-3 rounded-lg transition-all text-lg md:text-base">
              发送消息
            </button>
          </form>
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