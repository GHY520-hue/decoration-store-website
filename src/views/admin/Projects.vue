<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <Header />
    
    <!-- 页面标题 -->
    <section class="py-8 bg-amber-50 border-b">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl md:text-3xl font-bold">案例管理</h1>
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
        <!-- 添加案例按钮 -->
        <div class="mb-8">
          <button @click="showAddForm = true" class="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2 rounded-lg transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            添加案例
          </button>
        </div>
        
        <!-- 案例列表 -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-6">案例列表</h2>
          
          <div v-if="loading" class="flex justify-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
          </div>
          
          <div v-else-if="projects.length === 0" class="text-center py-12">
            <p class="text-gray-600">暂无案例</p>
          </div>
          
          <div v-else class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">创建时间</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="project in projects" :key="project.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ project.id }}</td>
                  <td class="px-6 py-4 text-sm font-medium text-gray-900">{{ project.title }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ formatDate(project.create_time) }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button @click="editProject(project)" class="text-blue-600 hover:text-blue-900 mr-3">编辑</button>
                    <button @click="deleteProject(project.id)" class="text-red-600 hover:text-red-900">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 添加/编辑案例模态框 -->
    <div v-if="showAddForm || showEditForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-semibold">{{ showEditForm ? '编辑案例' : '添加案例' }}</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">案例标题</label>
            <input type="text" id="title" v-model="formData.title" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
          </div>
          
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">描述</label>
            <textarea id="description" v-model="formData.description" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"></textarea>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">图片</label>
            <!-- 已上传图片预览 -->
            <div v-if="imageUrls.length > 0" class="mb-4 grid grid-cols-3 gap-4">
              <div v-for="(url, index) in imageUrls" :key="index" class="relative">
                <img :src="url" class="w-full h-24 object-cover rounded-md border border-gray-200" alt="案例图片">
                <button @click="removeImage(index)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <!-- 图片上传 -->
            <div class="mb-4">
              <label for="image_upload" class="flex items-center justify-center w-full h-16 border-2 border-dashed border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">
                <span class="text-sm text-gray-600">点击上传图片或拖拽文件到此处（可上传多张）</span>
                <input id="image_upload" type="file" accept="image/*" multiple class="hidden" @change="handleImageUpload">
              </label>
            </div>
            <!-- 手动输入URL（可选） -->
            <div>
              <label for="image_urls" class="block text-sm font-medium text-gray-700 mb-1">或输入图片URLs (JSON数组格式)</label>
              <input type="text" id="image_urls" v-model="formData.image_urls" placeholder='["url1", "url2"]' class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent">
            </div>
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
import { projectsApi } from '../../api';

// 状态
const projects = ref([]);
const loading = ref(true);
const showAddForm = ref(false);
const showEditForm = ref(false);
const formData = ref({
  id: 0,
  title: '',
  description: '',
  image_urls: '[]',
  create_time: ''
});

// 图片URLs数组
const imageUrls = ref([]);

// 加载案例列表
async function loadProjects() {
  try {
    loading.value = true;
    const data = await projectsApi.getAll();
    projects.value = data;
  } catch (error) {
    console.error('加载案例失败:', error);
  } finally {
    loading.value = false;
  }
}

// 处理图片上传
function handleImageUpload(event) {
  const files = event.target.files;
  if (files.length > 0) {
    Array.from(files).forEach(file => {
      // 检查文件类型
      if (file.type.startsWith('image/')) {
        // 创建FileReader来读取文件
        const reader = new FileReader();
        reader.onload = (e) => {
          // 将图片转换为base64格式添加到数组
          imageUrls.value.push(e.target.result);
          // 更新formData中的image_urls
          formData.value.image_urls = JSON.stringify(imageUrls.value);
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

// 移除图片
function removeImage(index) {
  imageUrls.value.splice(index, 1);
  // 更新formData中的image_urls
  formData.value.image_urls = JSON.stringify(imageUrls.value);
}

// 添加案例
async function submitForm() {
  try {
    // 表单验证
    if (!formData.value.title || !formData.value.description || (imageUrls.value.length === 0 && !formData.value.image_urls)) {
      alert('请填写所有必填字段');
      return;
    }
    
    // 确保image_urls是正确的JSON格式
    if (imageUrls.value.length > 0) {
      formData.value.image_urls = JSON.stringify(imageUrls.value);
    }
    
    if (showEditForm.value) {
      await projectsApi.update(formData.value.id, formData.value);
      alert('案例更新成功！');
    } else {
      await projectsApi.create(formData.value);
      alert('案例添加成功！');
    }
    await loadProjects();
    closeModal();
  } catch (error) {
    console.error('提交失败:', error);
    alert('操作失败：' + (error instanceof Error ? error.message : '未知错误'));
  }
}

// 编辑案例
function editProject(project) {
  formData.value = { ...project };
  // 解析image_urls为数组
  try {
    imageUrls.value = JSON.parse(project.image_urls || '[]');
  } catch (e) {
    imageUrls.value = [];
  }
  showEditForm.value = true;
  showAddForm.value = false;
}

// 删除案例
async function deleteProject(id) {
  if (confirm('确定要删除这个案例吗？')) {
    try {
      await projectsApi.delete(id);
      await loadProjects();
    } catch (error) {
      console.error('删除失败:', error);
    }
  }
}

// 关闭模态框
function closeModal() {
  showAddForm.value = false;
  showEditForm.value = false;
  formData.value = {
    id: 0,
    title: '',
    description: '',
    image_urls: '[]',
    create_time: ''
  };
  // 清空图片数组
  imageUrls.value = [];
}

// 格式化日期
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString('zh-CN');
}

// 初始化
onMounted(() => {
  loadProjects();
});
</script>
