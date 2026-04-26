<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">钰学装潢材料店</h3>
          <p class="text-gray-400">提供高品质的装修材料和专业的装修服务，让您的家更加温馨舒适。</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-400 hover:text-white">首页</router-link></li>
            <li><router-link to="/projects" class="text-gray-400 hover:text-white">完工展示</router-link></li>
            <li><router-link to="/products" class="text-gray-400 hover:text-white">家具材料</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white">联系我们</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">联系方式</h4>
          <ul class="space-y-2 text-gray-400">
            <li>地址：青岛市崂山区王哥庄街道商业街红绿灯北200米</li>
            <li>电话：15054277628</li>
            <li>邮箱：info@钰学装潢材料店.com</li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">营业时间</h4>
          <ul class="space-y-2 text-gray-400">
            <li>周一至周五：9:00 - 18:00</li>
            <li>周六：9:00 - 16:00</li>
            <li>周日：休息</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} 钰学装潢材料店. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>