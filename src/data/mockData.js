// 模拟数据管理
export const companyInfo = {
  name: 'Honwell',
  founded: '2010',
  employees: '500+',
  locations: ['北京', '上海', '深圳', '杭州'],
  description: '我们是一家致力于创新技术解决方案的现代化企业，成立于2010年。多年来，我们专注于为客户提供高质量的产品和服务，在行业内建立了良好的声誉。'
}

export const products = [
  {
    id: 1,
    name: '智能终端设备 Pro',
    category: '智能硬件',
    price: 2999,
    status: 'new',
    description: '高性能智能终端，支持多种协议接入，适用于工业物联网场景',
    image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Terminal+Pro',
    features: ['支持5G网络', '工业级防护', '超长续航'],
    specs: {
      '处理器': 'ARM Cortex-A72',
      '内存': '4GB LPDDR4',
      '存储': '64GB eMMC',
      '操作温度': '-20°C ~ +70°C'
    }
  },
  {
    id: 2,
    name: '数据管理平台',
    category: '软件解决方案',
    status: 'hot',
    description: '一站式数据管理解决方案，支持海量数据存储、分析和可视化',
    image: 'https://via.placeholder.com/600x400/667eea/ffffff?text=Data+Platform',
    features: ['实时数据处理', '智能分析', '可视化报表'],
    specs: {
      '数据容量': '≥100TB',
      '并发用户': '≥10000',
      '响应时间': '≤100ms',
      '可用性': '99.9%'
    }
  }
]

export const news = [
  {
    id: 1,
    title: '公司成功获得ISO 9001质量管理体系认证',
    summary: '经过严格的审核流程，我们正式获得ISO 9001:2015质量管理体系认证，标志着公司在质量管理方面达到国际标准。',
    category: '公司新闻',
    publishDate: '2024-01-15',
    views: 1203,
    likes: 45,
    isTop: true,
    image: 'https://via.placeholder.com/600x300/667eea/ffffff?text=ISO+Certification'
  },
  {
    id: 2,
    title: '智能制造行业迎来新的发展机遇',
    summary: '随着数字化转型的深入推进，智能制造行业正迎来前所未有的发展机遇，预计未来三年市场规模将翻倍增长。',
    category: '行业动态',
    publishDate: '2024-01-12',
    views: 892,
    likes: 32,
    isTop: false,
    image: 'https://via.placeholder.com/600x300/667eea/ffffff?text=Smart+Manufacturing'
  }
]

export const jobs = [
  {
    id: 1,
    title: '高级前端工程师',
    department: '技术部',
    location: '北京',
    type: '全职',
    salary: '20K-35K',
    description: '负责公司核心产品的前端开发，与产品、设计团队紧密合作，打造优秀的用户体验',
    requirements: [
      '3年以上前端开发经验',
      '精通Vue.js/React等主流框架',
      '熟悉TypeScript、ES6+',
      '有移动端开发经验优先'
    ],
    postedDate: '2024-01-10',
    tags: ['Vue.js', 'TypeScript', '移动端']
  },
  {
    id: 2,
    title: '产品经理',
    department: '产品部',
    location: '上海',
    type: '全职',
    salary: '25K-40K',
    description: '负责产品规划和需求分析，协调各部门资源，推动产品从概念到上线的全流程管理',
    requirements: [
      '3年以上产品管理经验',
      '有B端或SaaS产品经验',
      '优秀的沟通和协调能力',
      '熟练使用Axure、Figma等工具'
    ],
    postedDate: '2024-01-08',
    tags: ['B端产品', 'SaaS', '产品规划']
  }
]

export const teamMembers = [
  {
    id: 1,
    name: '张伟',
    position: '创始人 & CEO',
    bio: '拥有15年行业经验，致力于推动公司战略发展',
    avatar: 'https://via.placeholder.com/200x200/007aff/ffffff?text=CEO'
  },
  {
    id: 2,
    name: '李明',
    position: '技术总监',
    bio: '资深技术专家，专注于技术架构和团队建设',
    avatar: 'https://via.placeholder.com/200x200/007aff/ffffff?text=CTO'
  },
  {
    id: 3,
    name: '王芳',
    position: '市场总监',
    bio: '市场营销专家，负责品牌推广和市场拓展',
    avatar: 'https://via.placeholder.com/200x200/007aff/ffffff?text=CMO'
  },
  {
    id: 4,
    name: '刘强',
    position: '产品总监',
    bio: '产品设计专家，专注于用户体验和产品创新',
    avatar: 'https://via.placeholder.com/200x200/007aff/ffffff?text=CPO'
  }
]

// 工具函数
export const utils = {
  formatDate(dateString) {
    const date = new Date(dateString)
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  },

  formatNumber(num) {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}k+`
    }
    return num.toString()
  },

  getStatusText(status) {
    const statusMap = {
      'new': '新品',
      'hot': '热门',
      'recommended': '推荐'
    }
    return statusMap[status] || '推荐'
  }
}