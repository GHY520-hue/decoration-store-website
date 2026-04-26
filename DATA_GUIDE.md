# 如何添加图片和数据

## 目录结构

```
src/
├── data/
│   ├── banners.ts      # Banner数据
│   ├── products.ts     # 产品数据
│   └── projects.ts     # 案例数据
└── views/
    └── ...
public/
└── images/            # 存放你的本地图片
```

## 一、添加图片

### 方式1：使用本地图片

1. 将你的图片文件放入 `public/images/` 文件夹
2. 在数据文件中引用时，使用 `/images/文件名.jpg` 格式

**示例：**
```typescript
image_url: '/images/sofa.jpg',
```

### 方式2：使用网络图片

直接使用图片的完整URL：

```typescript
image_url: 'https://example.com/images/sofa.jpg',
```

## 二、添加Banner

编辑文件：[src/data/banners.ts](src/data/banners.ts)

```typescript
export const banners = [
  // 已有的banner...
  {
    id: 4,           // 新的唯一ID
    image: '/images/banner4.jpg',
    title: '你的Banner标题',
    description: '你的Banner描述'
  }
];
```

## 三、添加产品

编辑文件：[src/data/products.ts](src/data/products.ts)

```typescript
export const products = [
  // 已有的产品...
  {
    id: 9,                    // 新的唯一ID
    name: '产品名称',
    category: '家具',        // 可选：家具、材料、地板、墙纸
    description: '产品描述',
    image_url: '/images/product9.jpg',
    price: 1999.00           // 价格
  }
];
```

**注意**：如果要添加新的产品分类，需要同时更新文件底部的 `categories` 数组。

## 四、添加案例

编辑文件：[src/data/projects.ts](src/data/projects.ts)

```typescript
export const projects = [
  // 已有的案例...
  {
    id: 7,                      // 新的唯一ID
    title: '案例标题',
    description: '案例描述',
    image_urls: [             // 可以有多张图片
      '/images/project7-1.jpg',
      '/images/project7-2.jpg'
    ],
    create_time: '2023-07-01'  // 创建时间
  }
];
```

## 五、开发服务器

确保你的开发服务器正在运行：

```bash
npm run dev
```

修改数据文件后，页面会自动热更新，无需手动刷新。

## 六、注意事项

1. **ID唯一性**：确保每个产品/案例的ID都是唯一的
2. **图片格式**：推荐使用 JPG、PNG 或 WebP 格式
3. **图片大小**：建议Banner图片宽度在1920px以上，产品/案例图片在800px以上
4. **路径格式**：本地图片使用 `/images/` 开头，不要包含 `public/`
```