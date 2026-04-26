// Banner数据 - 在这里修改首页的Banner内容
export const banners = [
  {
    id: 1,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20interior%20design%20living%20room%2C%20bright%20and%20spacious%2C%20clean%20furniture%2C%20high%20quality%20rendering%2C%20warm%20atmosphere&image_size=landscape_16_9',
    title: '打造温馨舒适的家',
    description: '提供高品质的装修材料和专业的装修服务，让您的家更加温馨舒适。'
  },
  {
    id: 2,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20design%2C%20bright%20lighting%2C%20clean%20lines%2C%20high%20quality%20materials%2C%20warm%20colors&image_size=landscape_16_9',
    title: '现代厨房解决方案',
    description: '精选优质厨房材料，打造时尚实用的烹饪空间。'
  },
  {
    id: 3,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20bedroom%20design%2C%20comfortable%20bed%2C%20soft%20lighting%2C%20warm%20colors%2C%20high%20quality%20materials&image_size=landscape_16_9',
    title: '舒适卧室设计',
    description: '为您打造宁静舒适的睡眠环境，让每一天都充满活力。'
  }
];

// 如何添加新的Banner：
// 1. 复制上面的对象格式
// 2. 替换id为新的数字（不重复即可）
// 3. 替换image为你的图片链接
// 4. 修改title和description
// 示例：
// {
//   id: 4,
//   image: '/images/your-image.jpg', // 本地图片放在public/images文件夹
//   title: '你的标题',
//   description: '你的描述'
// }