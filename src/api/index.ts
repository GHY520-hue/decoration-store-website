const API_BASE = 'http://localhost:8080/api';

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
    if (error instanceof Error) {
      throw new Error(`API请求失败: ${error.message}`);
    }
    throw new Error('API请求失败');
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
