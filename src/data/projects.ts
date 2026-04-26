// 案例数据 - 在这里管理所有完工案例
export interface Project {
  id: number;
  title: string;
  description: string;
  image_urls: string[];
  create_time: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '现代简约客厅',
    description: '采用现代简约风格装修的客厅，明亮通透，家具搭配合理，营造温馨舒适的居住环境。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20simple%20living%20room%2C%20bright%2C%20spacious%2C%20natural%20light%2C%20high%20quality%20photography&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20living%20room%20detail%2C%20furniture%20arrangement%2C%20decorative%20elements%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-06-15'
  },
  {
    id: 2,
    title: '北欧风格卧室',
    description: '北欧风格卧室，简洁大方，色彩柔和，给人宁静放松的感觉。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nordic%20style%20bedroom%2C%20clean%2C%20soft%20colors%2C%20comfortable%2C%20high%20quality%20photography&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=nordic%20bedroom%20detail%2C%20bedding%2C%20decorations%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-05-20'
  },
  {
    id: 3,
    title: '现代厨房',
    description: '现代风格厨房，功能齐全，设计合理，为烹饪提供便利。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20design%2C%20bright%2C%20functional%2C%20high%20quality%20materials%2C%20clean%20lines&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20kitchen%20detail%2C%20appliances%2C%20countertops%2C%20storage%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-04-10'
  },
  {
    id: 4,
    title: '日式风格书房',
    description: '日式风格书房，简约实用，营造安静的学习环境。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20style%20study%20room%2C%20minimalist%2C%20functional%2C%20calm%20environment%2C%20high%20quality%20photography&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=japanese%20study%20room%20detail%2C%20desk%2C%20bookshelves%2C%20decorations%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-03-05'
  },
  {
    id: 5,
    title: '现代浴室',
    description: '现代风格浴室，干净整洁，功能齐全，提供舒适的洗浴体验。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20bathroom%20design%2C%20clean%2C%20functional%2C%20high%20quality%20materials%2C%20bright%20lighting&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20bathroom%20detail%2C%20shower%2C%20sink%2C%20toilet%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-02-18'
  },
  {
    id: 6,
    title: '美式风格餐厅',
    description: '美式风格餐厅，温馨舒适，适合家庭聚餐和朋友聚会。',
    image_urls: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20style%20dining%20room%2C%20warm%2C%20comfortable%2C%20family%20friendly%2C%20high%20quality%20photography&image_size=landscape_16_9',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=american%20dining%20room%20detail%2C%20dining%20table%2C%20chairs%2C%20decorations%2C%20high%20quality%20photography&image_size=landscape_16_9'
    ],
    create_time: '2023-01-22'
  }
];

// 如何添加新的案例：
// 1. 复制上面的案例对象格式
// 2. 替换id为新的数字（不重复即可）
// 3. 替换image_urls为你的图片链接数组（可以有多张图片）
// 4. 修改其他字段
// 示例：
// {
//   id: 7,
//   title: '你的案例标题',
//   description: '你的案例描述',
//   image_urls: [
//     '/images/project1-1.jpg',
//     '/images/project1-2.jpg'
//   ],
//   create_time: '2023-07-01'
// }