// Banner数据 - 在这里修改首页的Banner内容
export const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=600&fit=crop',
    title: '打造温馨舒适的家',
    description: '提供高品质的装修材料和专业的装修服务，让您的家更加温馨舒适。'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop',
    title: '现代厨房解决方案',
    description: '精选优质厨房材料，打造时尚实用的烹饪空间。'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=600&fit=crop',
    title: '舒适卧室设计',
    description: '为您打造宁静舒适的睡眠环境，让每一天都充满活力。'
  }
];

// 如何添加新的Banner：
// 1. 复制上面的对象格式
// 2. 替换id为新的数字（不重复即可）
// 3. 替换image为你的图片链接（建议用 picsum.photos 或 Unsplash 等稳定图床）
// 4. 修改title和description
// 示例：
// {
//   id: 4,
//   image: '/images/your-image.jpg', // 本地图片放在public/images文件夹
//   title: '你的标题',
//   description: '你的描述'
// }