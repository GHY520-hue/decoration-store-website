// API 基础地址 - 根据环境自动切换
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  price: number;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image_urls: string;
  create_time: string;
}

// ========== Mock 数据（当后端不可用时使用） ==========
const mockProducts: Product[] = [
  { id: 1, name: '环保乳胶漆', category: '涂料', description: '采用环保配方，无毒无味，适合家庭装修使用，覆盖力强，耐擦洗。', image_url: 'https://picsum.photos/seed/paint/400/300', price: 580 },
  { id: 2, name: '实木地板', category: '地板', description: '优质橡木材质，纹理自然美观，耐磨耐用，脚感舒适。', image_url: 'https://picsum.photos/seed/floor/400/300', price: 268 },
  { id: 3, name: '瓷砖800x800', category: '瓷砖', description: '全抛釉瓷砖，防滑耐磨，适用于客厅、卧室等多种空间。', image_url: 'https://picsum.photos/seed/tile/400/300', price: 88 },
  { id: 4, name: '集成吊顶', category: '吊顶', description: '铝扣板集成吊顶，防火防潮，安装简便，美观大方。', image_url: 'https://picsum.photos/seed/ceiling/400/300', price: 168 },
  { id: 5, name: 'PPR水管', category: '水电材料', description: '高品质PPR管材，耐高压，不生锈，使用寿命长。', image_url: 'https://picsum.photos/seed/pipe/400/300', price: 28 },
  { id: 6, name: '开关插座面板', category: '电工材料', description: '国际电工品牌，安全可靠，外观时尚，多种颜色可选。', image_url: 'https://picsum.photos/seed/switch/400/300', price: 35 },
];

const mockProjects: Project[] = [
  { id: 1, title: '现代简约三居室装修', description: '120平米现代简约风格，整体色调以白色和木色为主，营造温馨舒适的居家环境。', image_urls: '["https://picsum.photos/seed/proj1/600/400"]', create_time: '2026-04-15' },
  { id: 2, title: '北欧风格两居室改造', description: '85平米北欧风格，大量使用原木元素和白色调，打造明亮通透的居住空间。', image_urls: '["https://picsum.photos/seed/proj2/600/400"]', create_time: '2026-03-20' },
  { id: 3, title: '新中式别墅设计施工', description: '280平米独栋别墅，融合传统中式与现代元素，彰显东方雅致韵味。', image_urls: '["https://picsum.photos/seed/proj3/600/400"]', create_time: '2026-02-10' },
  { id: 4, title: '工业风LOFT公寓', description: '65平米LOFT户型，保留原始混凝土质感，搭配金属和木质家具。', image_urls: '["https://picsum.photos/seed/proj4/600/400"]', create_time: '2026-01-25' },
  { id: 5, title: '日式原木风小户型', description: '55平米一居室，以原木色和米白色为主，强调自然与简约的生活方式。', image_urls: '["https://picsum.photos/seed/proj5/600/400"]', create_time: '2025-12-18' },
];

async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    const response = await fetch(`${API_BASE}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`网络错误: ${response.status}`);
    }
    
    const result: ApiResponse<T> = await response.json();
    if (result.code !== 200) {
      throw new Error(result.message);
    }
    return result.data;
  } catch (error) {
    // API 请求失败时返回 Mock 数据
    console.warn('API 请求失败，使用本地数据:', error instanceof Error ? error.message : error);
    
    if (url.includes('/products')) {
      if (url.match(/\/products\/\d+/)) {
        const id = parseInt(url.split('/').pop() || '0');
        const product = mockProducts.find(p => p.id === id);
        if (product) return product as T;
      }
      return mockProducts as T;
    }
    if (url.includes('/projects')) {
      if (url.match(/\/projects\/\d+/)) {
        const id = parseInt(url.split('/').pop() || '0');
        const project = mockProjects.find(p => p.id === id);
        if (project) return project as T;
      }
      return mockProjects as T;
    }
    
    throw new Error(`API请求失败: ${error instanceof Error ? error.message : '未知错误'}`);
  }
}

// Products API
export const productsApi = {
  getAll: (category?: string) => request<Product[]>(`/products${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  getById: (id: number) => request<Product>(`/products/${id}`),
  create: (data: Omit<Product, 'id'>) => request<Product>('/products', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: number, data: Partial<Product>) => request<void>(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: number) => request<void>(`/products/${id}`, {
    method: 'DELETE',
  }),
};

// Projects API
export const projectsApi = {
  getAll: () => request<Project[]>('/projects'),
  getById: (id: number) => request<Project>(`/projects/${id}`),
  create: (data: Omit<Project, 'id'>) => request<Project>('/projects', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: number, data: Partial<Project>) => request<void>(`/projects/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: number) => request<void>(`/projects/${id}`, {
    method: 'DELETE',
  }),
};
