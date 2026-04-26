// 静态案例数据 - 作为fallback使用
export interface Project {
  id: number;
  title: string;
  description: string;
  image_urls: string[];
  create_time: string;
}

export const staticProjects: Project[] = [
  {
    id: 1,
    title: '现代简约三居室',
    description: '120平米现代简约风格装修，采用开放式厨房设计，大面积落地窗引入自然光线，整体色调以白、灰、木色为主，营造温馨舒适的居家环境。全屋使用环保材料，注重实用性与美观性的完美结合。',
    image_urls: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop'
    ],
    create_time: '2025-12-15'
  },
  {
    id: 2,
    title: '北欧风两居室改造',
    description: '85平米老旧小区改造项目，从拆改到完工历时45天。北欧风格设计，大量使用原木元素和棉麻软装，打造清新自然的居住空间。特别定制了整墙书柜和隐藏式收纳空间。',
    image_urls: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop'
    ],
    create_time: '2025-11-20'
  },
  {
    id: 3,
    title: '新中式别墅客厅',
    description: '300平独栋别墅一层公共区域装修，新中式风格融合现代元素。精选红木家具搭配大理石地面，山水背景墙与吊顶造型相呼应，彰显东方美学与现代生活的和谐统一。',
    image_urls: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop'
    ],
    create_time: '2025-10-08'
  },
  {
    id: 4,
    title: '轻奢风格复式楼',
    description: '150平米复式住宅，轻奢装修风格。金色线条点缀，丝绒材质沙发，水晶吊灯，大理石纹瓷砖。楼梯下方巧妙利用为吧台区域，每一处细节都体现主人对品质生活的追求。',
    image_urls: [
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop'
    ],
    create_time: '2025-09-18'
  },
  {
    id: 5,
    title: '日式原木风小户型',
    description: '65平米日式MUJI风格装修，障子门、榻榻米、原木家具。通过巧妙的收纳设计和灯光布局，让小户型也能拥有宽敞舒适的居住体验。',
    image_urls: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop'
    ],
    create_time: '2025-08-25'
  },
  {
    id: 6,
    title: '工业风LOFT公寓',
    description: '100平米LOFT公寓工业风改造，裸露水泥墙面配暖色灯光，铁艺楼梯，复古皮质沙发，开放式工作区与生活区融合，充满艺术气息的年轻化空间。',
    image_urls: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop'
    ],
    create_time: '2025-07-12'
  }
];
