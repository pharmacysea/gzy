// personal info
export const name = '高正阳'
export const headline = '独立开发，AI爱好者，药学硕士'
export const introduction = '我是正阳，目前是上海药学硕士，同时也基于自身兴趣在接触并应用AI进行独立开发.'
export const email = 'nxnswdza@gmail.com'
export const githubUsername = 'pharmacysea'

// about page
export const aboutMeHeadline = "我是正阳，base上海，药学硕士在读"
export const aboutParagraphs = [
  "虽然我本硕都从事药学专业，理应继续从事药学，但随着我对AI的不断接触，让我产生了做最懂AI的药学生，最懂药的hacker的想法.",
  "我对于新鲜事物抱有探索之心，喜欢旅游，空闲时刻，约好友一同游历祖国山河；同时也喜欢读书，尤其是推理悬疑类小说；自己偶尔也写一点诗，虽然比较一般.",
  "我作为一名十年老二次元，目前最喜欢的Girls band cry，如有同好，请和我深入交流（bushi"
]


// projects
export const projectHeadLine = "产品经历"
export const projectIntro = "而今迈步从头越"


// blog
export const blogHeadLine = "简单聊聊"
export const blogIntro = "魏武扬鞭，东临碣石有遗篇"

// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = "Check out the latest changes to this site."


// friends
export const friendsHeadLine = "正阳的基友们"
export const friendsIntro = "Meet some interesting friends."

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href?: string,
  onClick?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/zhengyang7869?s=21'
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/76563918?spm_id_from=333.1007.0.0'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/pharmacysea'
  },
  {
    name: 'Wechat',
    icon: 'wechat'
  },
]


// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}



export const educationList: Array<EducationItemType> = [
  {
    school: '中国药科大学',
    major: '制药工程',
    logo: 'chinapu',
    start: '2019',
    end: '2023'
  },

  {
    school: '华东理工大学',
    major: '药学',
    logo: 'ecust',
    start: '2023',
    end: '2026'
  }
]

// export type human = {
//   name: String
//   gender: String
// }

// export const oneTeam: Array<human> = [
//   {
//     name: 'gzy',
//     gender: 'unknown'
//   },
//   {
//     name: 'lyh',
//     gender: '沃尔玛购物袋'
//   }
// ]

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

export const careerList: Array<CareerItemType> = [

]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'Dingdangdream',
    description:
      '基于AI的0基础游戏制造机',
    link: { href: 'dingdangdream.com', label: 'dingdangdream' },
    logo: '/images/icon/gamecraft.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI', '游戏创造']
  },
  {
    name: '实况喵',
    description:
      '定格瞬间，留住生动 —— 静态图一键转 Live Photo，让你的照片动起来。',
    link: { href: 'https://apps.apple.com/cn/app/%E5%AE%9E%E5%86%B5%E5%96%B5-%E9%9D%99%E6%80%81%E7%85%A7%E7%89%87%E7%94%9F%E6%88%90live%E5%9B%BE/id6739980277?utm_source=yansoul.com', label: '实况喵' },
    logo: '/images/livemiao.jpg',
    category: ['Website'],
    techStack: ['swift', 'iOS开发'],
    tags: ['LivePhoto', 'AI视频']
  },
  {
    name: 'elysia sudo',
    description:
      '数独游戏+爱莉希雅',
    link: { href: 'dingdangdream.com', label: '爱莉希雅的数独' },
    logo: '/images/icon/elysia.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['tts', '数独创造']
  },

]

export const githubProjects: Array<ProjectItemType> = [
  // {
  //   name: 'Devtoolset',
  //   description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
  //   link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
  //   gitStars: 146,
  //   gitForks: 47
  // },
]

// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2024-12-18',
    content: [
      {
        title: '🌿 Open source',
        description: 'Open source my portfolio website'
      },
    ]
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: '研硕',
    link: { href: 'https://yansoul.com' },
  },
]


