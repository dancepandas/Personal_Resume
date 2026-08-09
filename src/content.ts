// 内容数据源 - 整合简历 + GitHub 仓库信息

export const profile = {
  name: '程帅',
  nameEn: 'Cheng Shuai',
  title: 'AI Engineer',
  tagline: '水文水资源 × 深度学习 × AI Agent',
  location: '武汉',
  email: 'chs9710@163.com',
  github: 'dancepandas',
  avatar: './avatar.jpg',
  summary:
    '水文与水资源科班，深度学习方向。从物理机理出发，构建可解释、可部署、可演进的 AI 系统：智慧时序模型、AI Agent Runtime、边缘端量化部署。当前主要面向洪水预报、防洪调度、水资源优化等场景。',
}

export const highlights = [
  {
    icon: 'Brain',
    title: '智慧时序建模',
    desc: 'PINN · Transformer · SSM · Chronos 等时序大模型零样本泛化',
  },
  {
    icon: 'Bot',
    title: 'AI Agent 工程',
    desc: 'AI Agent Runtime，支持 DAG / 工具循环 / 三级权限',
  },
  {
    icon: 'Layers',
    title: '机理 × AI 耦合',
    desc: 'ONNX 量化实现边缘端部署，推动测报一体化落地',
  },
  {
    icon: 'BookOpen',
    title: '研究成果',
    desc: '3 项授权发明专利 + 2 项受理中，3 篇中文核心期刊',
  },
] as const

export const skills = {
  'AI / 时序建模': [
    'PINNs / 物理约束 DL',
    'Transformer · LSTM · GRU · SSM',
    'Chronos · 时序大模型',
    'HydroModel 洪水预报',
    'YOLOv8-seg + SAM 视觉识别',
  ],
  'AI Agent': [
    'AI Agent Runtime',
    'MCP 协议（stdio / SSE）',
    'RAG · Skill · 多级权限闸门',
    'Tauri 2 + React 19 桌面端',
  ],
  '水文专业': [
    '新安江 · 马斯京根 · 圣维南方程',
    'MIKE 模型',
    '多目标进化算法（MOEA/D · NSGA-III · SMPSO）',
    'TOPSIS 决策 · Pareto 解集',
  ],
  '工程 / 部署': [
    'Python · FastAPI · Flask',
    'Docker · Linux · Git',
    'ONNX · 模型量化',
    'Rust (Tauri) · TypeScript',
    'TensorFlow · PyTorch',
  ],
} as const

export const experience = [
  {
    company: '武汉大水云科技有限公司',
    role: '模型算法工程师',
    period: '2025.10 - 至今',
    location: '武汉',
    summary: '聚焦"机理 × AI"耦合的水文智能系统研发与项目交付',
    achievements: [
      '主导搭建洪水预报智能体系统，集成预报 / 数据分析 / 文档撰写，实现自然语言驱动的全流程自动化',
      '采用 ONNX 量化技术优化模型，成功在边缘设备部署，推动测报一体化',
      '引入 Chronos 等国际时序大模型，发挥零样本泛化能力，弥补资料匮乏区域预报精度',
      '熟练运用 Claude Code / Cursor 等 AI 编程工具，显著加快原型与项目迭代',
      '构建 XAJRnncell 等耦合物理约束的水利 AI 模型，结合 MTP、FFT、超网络等前沿技术',
    ],
  },
  {
    company: '绵阳市安州区水利局',
    role: '水利工程师',
    period: '2025.08 - 2025.09',
    location: '绵阳',
    summary: '监管类岗位过渡',
    achievements: [
      '负责监管项目的安全生产与施工进度监管',
      '收集整理各乡镇、直管项目资料并提交',
    ],
  },
  {
    company: '北京市水科学技术研究院',
    role: '算法工程师（含实习）',
    period: '2022.09 - 2025.04',
    location: '北京',
    summary: '三年深度参与水利 AI 课题与项目研发',
    achievements: [
      '应用 MIKE 模型进行流域水循环模拟，基于一维圣维南方程构建河道径流计算 / 马斯京根物理模型',
      '结合 TensorFlow 开发流域水循环深度学习模型，提升预测能力',
      '构建水利知识图谱，实现水利知识智能推荐',
      '设计流域 / 灌区多目标优化调度模型（WISE-WRSOM），集成 MOEA/D、NSGA-III、SMPSO',
      '结合 DeepSeek-V3、Qwen2.5 等开源大模型进行水利 AI 开发',
      '采用 PINNs 方法进行河道流量预测',
    ],
  },
  {
    company: '中国建筑第二工程局有限公司华南分公司',
    role: '商务预算员',
    period: '2020.07 - 2021.03',
    location: '',
    summary: '工程预算与商务岗',
    achievements: [
      '负责围挡 / 绿化 / 路基路面等工程招标',
      '项目月度资金预算、四家施工单位签证与进度款结算',
      '工作台账梳理与合同外工作内容价格谈判',
    ],
  },
]

// GitHub 开源项目 - 7 个
export const openSource = [
  {
    name: 'FloodMind',
    repo: 'dancepandas/FloodMind',
    url: 'https://github.com/dancepandas/FloodMind',
    description:
      'SDK-first 水文智能体 Runtime v1.1.9。厚基础设施、薄模型依赖：AI Agent Runtime 状态机引擎；Harness 提供 DOOM LOOP 检测、事件溯源、三级权限闸门等兜底；MCP 协议集成中枢。',
    tech: ['Python 3.10+', 'Flask', 'SQLite', 'MCP', 'React 19', 'TailwindCSS 4'],
    stars: 0,
    highlight: 'v1.1.9',
  },
  {
    name: 'FloodMind Desktop',
    repo: 'dancepandas/FloodMind-desktop',
    url: 'https://github.com/dancepandas/FloodMind-desktop',
    description:
      '桌面端水文智能助手。Tauri 2 + React 19 + TS + Python Flask Sidecar。Nuitka 编译 Python 为原生 exe，对接 Tauri NSIS 安装包。支持 DeepSeek / 智谱 / 通义千问 / Moonshot / MiniMax / OpenAI 兼容 / Ollama 7 类服务商。',
    tech: ['Tauri 2 (Rust)', 'React 19', 'TypeScript', 'Python Flask', 'Nuitka'],
    stars: 0,
    highlight: '桌面端',
  },
  {
    name: 'Monitoring & Forecasting',
    repo: 'dancepandas/Monitoring-and-Forecasting-System',
    url: 'https://github.com/dancepandas/Monitoring-and-Forecasting-System',
    description:
      '水文监测指挥平台。实时采集水位 / 流量，接入 Chronos 时序预测与 FloodMind 智能体，3D 数字孪生（Three.js GLB）、桌面端 / 移动端 / 大屏渲染。',
    tech: ['Python 3.14', 'FastAPI', 'Vue 3', 'Three.js', 'Cesium', 'CosyVoice TTS'],
    stars: 0,
    highlight: '最新',
  },
  {
    name: 'sve-pinns',
    repo: 'dancepandas/PINNs-SVE-dist',
    url: 'https://github.com/dancepandas/PINNs-SVE-dist',
    description:
      'PINN 求解一维完整圣维南方程的商业 SDK。河道几何 + 观测数据 + 边界条件 → 反演 Manning 糙率与底坡 → 预测 h(x,t) 与 u(x,t)。已发布为标准 wheel。',
    tech: ['Python 3.10+', 'PyTorch', 'CUDA 可选'],
    stars: 0,
    highlight: 'wheel',
  },
  {
    name: 'StreamPredict',
    repo: 'dancepandas/StreamPredict',
    url: 'https://github.com/dancepandas/StreamPredict',
    description:
      '基于 LSTM + 多头注意力的河道流量滚动预报系统。融合流量 / 降雨 / 蒸发多特征，捕获站点间关系与全局依赖；自回归多步预测，工程化完整链路。',
    tech: ['Python 3.7+', 'PyTorch', 'LSTM', 'Multi-Head Attention'],
    stars: 2,
    highlight: '★ 2',
  },
  {
    name: 'WISE-WRSOM',
    repo: 'dancepandas/WISE_WRSOM',
    url: 'https://github.com/dancepandas/WISE_WRSOM',
    description:
      '基于多目标进化算法的水资源优化调度系统。集成 MOEA/D、NSGA-III、SMPSO 生成 Pareto 最优解集，TOPSIS 决策排序；5 个目标函数 + 马斯京根河道汇流演进；CLI 工具 + YAML 配置驱动。',
    tech: ['Python', 'MOEA/D', 'NSGA-III', 'SMPSO', 'TOPSIS'],
    stars: 0,
    highlight: '调度系统',
  },
  {
    name: 'Qls-SPI',
    repo: 'dancepandas/Qls_spi',
    url: 'https://github.com/dancepandas/Qls_spi',
    description:
      '青龙山灌区气象干旱分析。基于 SPI（McKee 1993）+ 克里金插值；接收站点与长期逐月降水，按时间尺度计算 SPI，输出 GeoTIFF 干旱分布栅格；CLI + FastAPI 双模式。',
    tech: ['Python', 'FastAPI', 'GDB', 'Kriging', 'GeoTIFF'],
    stars: 0,
    highlight: '干旱分析',
  },
] as const

// 公司项目（闭源）
export const projects = [
  {
    name: '丽水水文业务智能体桌面端',
    period: '2026.04 - 至今',
    role: 'AI Agent 开发工程师',
    description:
      '独立设计开发基于 Tauri 2 + React 19 + TS + Python Flask Sidecar 的桌面端水文智能助手。透传 FloodMind SDK 全部能力，三级授权策略 + NDJSON 流式增量渲染 + Office 文件原生预览 + 7 类 LLM 服务商路由。',
    link: 'https://github.com/dancepandas/FloodMind-desktop',
    tags: ['Tauri', 'Rust', 'React 19', 'TypeScript', 'Flask', 'Nuitka'],
  },
  {
    name: '太湖局水葫芦 AI 视觉识别监测',
    period: '2026.03 - 至今',
    role: '模型算法工程师',
    description:
      '太湖水文水资源局项目，无人机 + AI 视觉识别实时监测河道水葫芦。YOLOv8-seg + SAM 两阶段分割估算水葫芦面积，已入选太湖局重点项目清单。',
    tags: ['YOLOv8-seg', 'SAM', '视觉识别'],
  },
  {
    name: '开化金马溪四预建设项目',
    period: '2025.10 - 至今',
    role: '模型算法工程师',
    description:
      '构建 PINNs-SVE 一维流量预报模型，以一维圣维南方程为物理基础，多层全连接神经网络，torch 自动积分更新梯度。在 SWASHES benchmark 取得出色成绩，已封装为标准 wheel 发布。',
    link: 'https://github.com/dancepandas/PINNs-SVE-dist',
    tags: ['PINNs', 'Saint-Venant', 'PyTorch'],
  },
  {
    name: '中小河流洪水预报智能体',
    period: '2025.10 - 至今',
    role: 'AI Agent 工程师',
    description:
      'FloodMind 主体：AI Agent Runtime 状态机执行引擎，Harness 提供 DOOM LOOP 检测、事件溯源、跨线程上下文保护、auto-compact、三级权限闸门；MCP 协议集成中枢；Skill CRUD 自维护。',
    link: 'https://github.com/dancepandas/FloodMind',
    tags: ['Agent Runtime', 'MCP', 'RAG', 'Skill'],
  },
  {
    name: '湖北省 / 黑龙江省洪水风险图',
    period: '2025.03 - 至今',
    role: '模型算法工程师',
    description:
      '计算防洪保护区、水库下游等区域的洪水淹没范围与到达时间并绘制风险图。所有负责对象均一次性通过甲方质检。',
    tags: ['洪水风险图', '水利工程'],
  },
  {
    name: '北京市水资源多目标优化调度',
    period: '2022.09 - 2025.04',
    role: '实习生 → 算法工程师',
    description:
      'WISE-WRSOM 系统：5 个优化目标（全线通水时长、地下水回补、水面面积、出境水量、水量平衡），集成 MOEA/D、NSGA-III、SMPSO，TOPSIS 决策排序；马斯京根河道汇流演进；CLI + YAML 流水线。',
    link: 'https://github.com/dancepandas/WISE_WRSOM',
    tags: ['MOEA/D', 'NSGA-III', 'SMPSO', 'TOPSIS'],
  },
  {
    name: '北京市数字孪生山洪洪水模型',
    period: '2023.09 - 2025.04',
    role: '实习生',
    description:
      '北京市自然科学基金项目。耦合新安江模型的山洪预报深度学习模型：GRU、NN、含物理信息的 RNN 网络，pyspark 数据处理。',
    tags: ['GRU', 'RNN', 'TensorFlow', 'PySpark'],
  },
  {
    name: '昌平区白浮泉泉域监管',
    period: '2022.09 - 2023.10',
    role: '实习生',
    description:
      '北京市自然科学基金项目。基于 Transformer 改进的 patchTST 模型进行地下水水位预测，配合优化算法推荐开采与补水方案。',
    tags: ['patchTST', 'Transformer', '优化算法'],
  },
]

export const publications = {
  papers: [
    '中文核心期刊论文 · 第一作者 × 3',
    'Journal of Hydrology · 中小河流洪水预报研究（已发表）',
    '中文核心 · 1 篇审稿中',
  ],
  patents: [
    '授权发明专利 × 3',
    '受理中发明专利 × 2',
  ],
}

export const education = [
  {
    school: '首都师范大学',
    degree: '硕士',
    major: '水利工程',
    period: '2022 - 2025',
  },
  {
    school: '郑州大学',
    degree: '本科',
    major: '水文与水资源',
    period: '2016 - 2020',
  },
]