// 静态产品数据 - 作为fallback使用
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  price: number;
}

export const staticProducts: Product[] = [
  {
    id: 1,
    name: '环保乳胶漆',
    category: '涂料',
    description: '采用环保配方，无甲醛无异味，色彩持久亮丽，适合室内墙面装饰。',
    image_url: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop',
    price: 580
  },
  {
    id: 2,
    name: '实木复合地板',
    category: '地板',
    description: '优质实木表层，E0级环保基材，耐磨防潮，脚感舒适温暖。',
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82d?w=400&h=300&fit=crop',
    price: 268
  },
  {
    id: 3,
    name: '欧式吊灯',
    category: '灯具',
    description: '精致欧式设计，三色可调光，营造温馨浪漫的居家氛围。',
    image_url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop',
    price: 1280
  },
  {
    id: 4,
    name: '瓷砖背景墙',
    category: '瓷砖',
    description: '微晶石材质，3D喷墨工艺，防水防污，客厅装修首选。',
    image_url: 'https://images.unsplash.com/photo-1502005229766-528357c34640?w=400&h=300&fit=crop',
    price: 368
  },
  {
    id: 5,
    name: '全铝橱柜',
    category: '橱柜',
    description: '航空铝合金材质，防潮防虫易清洁，现代简约风格，终身质保。',
    image_url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop',
    price: 4680
  },
  {
    id: 6,
    name: '智能马桶盖',
    category: '卫浴',
    description: '即热式恒温清洗，暖风烘干，座圈加热，提升生活品质。',
    image_url: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=400&h=300&fit=crop',
    price: 2380
  },
  {
    id: 7,
    name: '断桥铝门窗',
    category: '门窗',
    description: '双层中空钢化玻璃，隔音隔热防盗，多色可选，免费测量安装。',
    image_url: 'https://images.unsplash.com/photo-1563779780530-94a16aefdcd6?w=400&h=300&fit=crop',
    price: 1280
  },
  {
    id: 8,
    name: '硅藻泥墙衣',
    category: '涂料',
    description: '天然硅藻土制成，吸湿调防火阻燃，纹理丰富艺术感强。',
    image_url: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&h=300&fit=crop',
    price: 380
  }
];
