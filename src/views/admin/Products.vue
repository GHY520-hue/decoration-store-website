<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-8 bg-amber-50 border-b">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-bold">产品管理</h1>
          <router-link to="/admin" class="text-amber-600 hover:text-amber-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回管理首页
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- 管理内容 -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <!-- 添加产品按钮 -->
        <div class="mb-8">
          <button @click="showAddForm = true" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-lg transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            添加产品
          </button>
        </div>
        
        <!-- 产品列表 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-6">产品列表</h2>
          
          <div v-if="loading" class="flex justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
          
          <div v-else-if="products.length === 0" class="text-center py-12">
            <p class="text-gray-600">暂无产品</p>
          </div>
          
          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名称</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">分类</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">价格</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="product in products" :key="product.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ product.id }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ product.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.category }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">¥{{ product.price.toFixed(2) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button @click="editProduct(product)" class="text-blue-600 hover:text-blue-900 mr-3">编辑</button>
                    <button @click="deleteProduct(product.id)" class="text-red-600 hover:text-red-900">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 添加/编辑产品模态框 -->
    <div v-if="showAddForm || showEditForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">{{ showEditForm ? '编辑产品' : '添加产品' }}</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">产品名称</label>
            <input type="text" id="name" v-model="formData.name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
          </div>
          
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">分类</label>
            <select id="category" v-model="formData.category" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
              <option value="">选择分类</option>
              <option value="家具">家具</option>
              <option value="材料">材料</option>
              <option value="地板">地板</option>
              <option value="墙纸">墙纸</option>
            </select>
          </div>
          
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700 mb-1">价格</label>
            <input type="number" id="price" v-model.number="formData.price" step="0.01" min="0" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">图片</label>
            <!-- 图片预览 -->
            <div v-if="formData.image_url" class="mb-4">
              <img :src="formData.image_url" class="w-32 h-32 object-cover rounded-md border border-gray-200" alt="预览图">
            </div>
            <!-- 本地文件上传 -->
            <div class="mb-4">
              <label for="image_upload" class="flex items-center justify-center w-full h-12 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                <span class="text-sm text-gray-600">点击上传图片或拖拽文件到此处</span>
                <input id="image_upload" type="file" accept="image/*" class="hidden" @change="handleImageUpload">
              </label>
            </div>
            <!-- 手动输入URL（可选） -->
            <div>
              <label for="image_url" class="block text-sm font-medium text-gray-700 mb-1">或输入图片URL</label>
              <input type="text" id="image_url" v-model="formData.image_url" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="例如：/images/sofa.jpg 或 https://example.com/image.jpg">
            </div>
          </div>
          
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">描述</label>
            <textarea id="description" v-model="formData.description" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"></textarea>
          </div>
          
          <div class="flex justify-end space-x-4">
            <button type="button" @click="closeModal" class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              取消
            </button>
            <button type="submit" class="px-4 py-2 bg-amber-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              {{ showEditForm ? '更新' : '添加' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import { productsApi } from '../../api';

// 状态
const products = ref([]);
const loading = ref(true);
const showAddForm = ref(false);
const showEditForm = ref(false);
const formData = ref({
  id: 0,
  name: '',
  category: '',
  price: 0,
  image_url: '',
  description: ''
});

// 加载产品列表
async function loadProducts() {
  try {
    loading.value = true;
    const data = await productsApi.getAll();
    products.value = data;
  } catch (error) {
    console.error('加载产品失败:', error);
  } finally {
    loading.value = false;
  }
}

// 添加产品
async function submitForm() {
  try {
    // 表单验证
    if (!formData.value.name || !formData.value.category || !formData.value.price || !formData.value.image_url) {
      alert('请填写所有必填字段');
      return;
    }
    
    if (showEditForm.value) {
      await productsApi.update(formData.value.id, formData.value);
      alert('产品更新成功！');
    } else {
      await productsApi.create(formData.value);
      alert('产品添加成功！');
    }
    await loadProducts();
    closeModal();
  } catch (error) {
    console.error('提交失败:', error);
    alert('操作失败：' + (error instanceof Error ? error.message : '未知错误'));
  }
}

// 编辑产品
function editProduct(product) {
  formData.value = { ...product };
  showEditForm.value = true;
  showAddForm.value = false;
}

// 删除产品
async function deleteProduct(id) {
  if (confirm('确定要删除这个产品吗？')) {
    try {
      await productsApi.delete(id);
      await loadProducts();
    } catch (error) {
      console.error('删除失败:', error);
    }
  }
}

// 处理图片上传
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    // 检查文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件');
      return;
    }
    
    // 创建FileReader来读取文件
    const reader = new FileReader();
    reader.onload = (e) => {
      // 将图片转换为base64格式显示
      formData.value.image_url = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// 关闭模态框
function closeModal() {
  showAddForm.value = false;
  showEditForm.value = false;
  formData.value = {
    id: 0,
    name: '',
    category: '',
    price: 0,
    image_url: '',
    description: ''
  };
}

// 初始化
onMounted(() => {
  loadProducts();
});
</script>
