// 产品数据 - 在这里管理所有产品
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: '现代简约沙发',
    category: '家具',
    description: '舒适透气的现代简约风格沙发，适合各种装修风格',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20simple%20sofa%20in%20living%20room%2C%20clean%20design%2C%20comfortable%2C%20high%20quality%20photography&image_size=square',
    price: 2999.00
  },
  {
    id: 2,
    name: '实木地板',
    category: '地板',
    description: '天然实木地板，环保健康，脚感舒适',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=solid%20wood%20floor%2C%20natural%20grain%2C%20high%20quality%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 299.00
  },
  {
    id: 3,
    name: '墙纸',
    category: '墙纸',
    description: '环保墙纸，多种花色可选，易清洁',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wallpaper%20samples%2C%20various%20patterns%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 99.00
  },
  {
    id: 4,
    name: '餐桌',
    category: '家具',
    description: '现代风格餐桌，坚固耐用，适合家庭使用',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20dining%20table%2C%20clean%20design%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 1599.00
  },
  {
    id: 5,
    name: '瓷砖',
    category: '材料',
    description: '防滑耐磨瓷砖，适合客厅、厨房和浴室',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20tiles%2C%20various%20patterns%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 199.00
  },
  {
    id: 6,
    name: '衣柜',
    category: '家具',
    description: '现代风格衣柜，收纳空间大，设计合理',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20wardrobe%2C%20clean%20design%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 3999.00
  },
  {
    id: 7,
    name: '复合地板',
    category: '地板',
    description: '高性价比复合地板，耐磨防潮',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laminate%20floor%20samples%2C%20various%20colors%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 199.00
  },
  {
    id: 8,
    name: '油漆',
    category: '材料',
    description: '环保油漆，无异味，色彩丰富',
    image_url: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=paint%20cans%2C%20various%20colors%2C%20white%20background%2C%20product%20photography&image_size=square',
    price: 149.00
  }
];

// 产品分类列表
export const categories = ['家具', '材料', '地板', '墙纸'];

// 如何添加新的产品：
// 1. 复制上面的产品对象格式
// 2. 替换id为新的数字（不重复即可）
// 3. 替换image_url为你的图片链接
// 4. 修改其他字段
// 示例：
// {
//   id: 9,
//   name: '你的产品名称',
//   category: '家具', // 或 '材料', '地板', '墙纸'
//   description: '你的产品描述',
//   image_url: '/images/your-product.jpg', // 本地图片放在public/images文件夹
//   price: 999.00
// }