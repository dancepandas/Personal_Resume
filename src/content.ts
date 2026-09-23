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
    '水文与水资源科班，深度学习方向。做水利行业的 AI 工程：一是深度学习建模（洪水预报、干旱分析、视觉识别），二是 AI Agent 系统工程（Runtime、桌面端、内网交付），兼顾模型量化与边缘部署。',
}

// 首屏总览一句话。
// 与下面的 about 分工：首屏只回答「做什么」，出身留给 about。两块在页面上紧挨着，
// 说两遍同一件事等于两块都白说。
// 定位按项目实际情况写：重心是 AI Agent 工程与深度学习建模两条线。
// 不要把「机理 × AI」写成整个人的定位 —— 那只有 PINNs-SVE 与数字孪生山洪两个项目撑得住，
// 面试官翻一遍仓库就会问，答不上来比不写更糟。
export const heroIntro =
  '从事水利行业的 AI 算法研发，方向是洪水预报建模与水文智能体开发。'

// 关于 —— 平铺直叙的工作方向与内容。
// 两条纪律：总述开篇说工作方向，不写学历（学历在教育板块）；
// 不用「从…到…一路做到…」这类叙事弧，简历总述是陈述不是讲故事。
export const about: readonly string[] = [
  '主要从事基于 Transformer、LSTM、PINN 等模型的流量预报建模和垂直领域的 Agent 系统构建工作；现在武汉大水云科技有限公司工作。',
]

// 四条能力，各说各的，不互相重复，也不跟别处已印过的数字重复。
// 名词一律取 content.ts 里已经出现过、能对得上出处的写法 —— 简历上出现的术语，
// 面试官会顺着问，写了自己都答不上来的缩写（早先的 DAG / XAJRNN）比不写更糟。
// 前三条按项目数量排：Agent 工程与水时序建模占了大半，视觉识别是独立的一条线。
// PINN 降为第一条里的一个技术名词 —— 它是个技术点，不是一条能力线。
export const highlights = [
  {
    icon: 'Brain',
    title: '时序预报建模',
    desc: 'PINN · Transformer · LSTM · Chronos，洪水预报与干旱分析',
  },
  {
    icon: 'Bot',
    title: 'AI Agent 工程',
    desc: '自研执行引擎：工具循环 · 并行委派 · 事件溯源重放',
  },
  {
    icon: 'Scan',
    title: '视觉识别',
    desc: '语义分割 · 目标检测，SegFormer / YOLOv8-seg + SAM',
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
    'SegFormer · YOLOv8-seg · SAM 语义分割',
    '形态感知 Cross-Attention',
    'DEM 汇流区掩膜 · 多尺度降雨特征',
  ],
  'AI Agent': [
    'AI Agent Runtime（状态机 · 流式 · 并行委派）',
    'MCP 协议（stdio / SSE）',
    'Guardrail 安全闸 · Handoff 移交',
    'Skill 体系 · RAG（ChromaDB + BGE）',
    'JSONL Journal 事件溯源 · 检查点恢复',
    'DeepSeek Harness · Cordis 插件',
  ],
  '水文专业': [
    '新安江 · 马斯京根 · 圣维南方程',
    'MIKE 模型',
    '多目标进化算法（MOEA/D · NSGA-III · SMPSO，自研）',
    'TOPSIS 决策 · Pareto 解集',
    'SPI 干旱指数 · 克里金插值',
    'STIV 测流 · 洪水风险图',
  ],
  '工程 / 部署': [
    'Python · FastAPI · Flask',
    'Docker · Linux · Git',
    'ONNX · 模型量化',
    'Rust (Tauri) · TypeScript · React',
    'TensorFlow · PyTorch',
    'PostgreSQL · GDAL/Rasterio · Nuitka',
  ],
} as const

export const experience = [
  {
    company: '武汉大水云科技有限公司',
    role: '模型算法工程师',
    period: '2025.10 - 至今',
    location: '武汉',
    summary: '水文智能系统的模型研发与项目交付',
    achievements: [
      '主导 FloodMind 水文智能体系统研发，迭代至 v2.2.0，实现预报 / 数据分析 / 文档撰写自然语言驱动的全流程自动化',
      '交付丽水水文局水情简报智能体，实现水情简报自动生成与水文统计技能沉淀，完成业主内网整机离线部署',
      '开发 FloodMind Desktop 桌面端，打通 7 类大模型服务商，支持工具调用、MCP 热插拔与 Office 文档预览',
      '构建 PINNs-SVE 一维圣维南方程预报模型，反演河道糙率与底坡，经 SWASHES 基准验证并封装发布',
      '落地太湖局水葫芦视觉识别监测，以轻量化分割模型估算水葫芦覆盖面积',
      '研发断面流速重建模型，从测流分段数据还原断面流速分布，支撑测报一体化',
      '引入 Chronos 时序大模型弥补资料匮乏区域预报精度；采用 ONNX 量化推动边缘设备部署',
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
      '设计流域 / 灌区多目标优化调度模型（WISE-WRSOM），自研实现 MOEA/D、NSGA-III、SMPSO 三种进化算法',
      '结合 GPT-3.5、GPT-4 等大模型进行水利 AI 开发',
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

// 关键指标 —— 从描述文字里提出来的「读数」。
// 只放能在代码 / 文档里核到出处的数字，宁缺毋滥：没有硬指标的项目就不给 metrics，不凑数。
export type Metric = { readonly k: string; readonly v: string }

// GitHub 开源项目 - 10 个
export const openSource = [
  {
    name: 'CAMS 汇流感知多断面预报',
    repo: 'dancepandas/CAMS',
    url: 'https://github.com/dancepandas/CAMS',
    description:
      '多断面流量预报模型。基于 30m DEM 逐断面追溯上游汇水区生成掩膜，做面积加权面雨量；融合历史流量、预见期降雨与多尺度累积降雨三路特征，输出预见期逐时流量。',
    metrics: [
      { k: '断面', v: '15 个' },
      { k: '预见期', v: '24 h' },
      { k: '中位 NSE', v: '0.772' },
    ],
    tech: ['Python 3.10+', 'PyTorch', 'LSTM / CNN', 'pyflwdir + rasterio', 'MRMS / USGS / SRTM'],
    stars: 0,
    // 指标已由下面的读数行承载，徽章不再重复同一个数字
    highlight: '',
  },
  {
    name: 'Aether 断面流速重建',
    repo: 'dancepandas/rebuild_vel',
    url: 'https://github.com/dancepandas/rebuild_vel',
    description:
      '从测流原始分段流速重建断面各测速线表面流速。形态偏置 Transformer 以起点距 / 水深 / 岸别等几何特征作为注意力偏置，损失叠加流速-水深正相关等物理正则；数据侧对接平台导出接口实现自动采集与质控留痕。',
    tech: ['Python 3.10+', 'PyTorch', 'Transformer Encoder', '物理约束损失', 'STIV 测流'],
    stars: 0,
    highlight: '最新',
  },
  {
    name: '丽水水情简报智能体',
    repo: 'dancepandas/agent-lishui',
    // 私有仓库，暂无可公开访问的链接
    url: '',
    description:
      '基于开源 DeepSeek Harness 二次开发的智能体宿主（TypeScript / Node 22）。独立实现流式对话工作台、确定性 DOCX 简报渲染管线、水文统计技能体系、离线表格 OCR 与语音数字人；整机离线部署于业主内网。',
    tech: ['TypeScript', 'DeepSeek Harness', 'React 18', 'Python 水文计算', 'PostgreSQL'],
    stars: 0,
    highlight: '业主内网',
  },
  {
    name: 'FloodMind',
    repo: 'dancepandas/FloodMind',
    url: 'https://github.com/dancepandas/FloodMind',
    description:
      'SDK-first 水文智能体 Runtime v2.2.0。自研原生 Agent 执行引擎（工具循环 / 流式输出 / 并行委派），事件溯源日志 + 确定性重放支持断线恢复，内置输入输出安全闸、任务移交与 MCP 集成中枢。',
    tech: ['Python 3.10+', 'Agent Runtime', 'JSONL Journal', 'MCP', 'ChromaDB RAG', 'Docker'],
    stars: 0,
    highlight: 'v2.2.0',
  },
  {
    name: 'FloodMind Desktop',
    repo: 'dancepandas/FloodMind-desktop',
    url: 'https://github.com/dancepandas/FloodMind-desktop',
    description:
      '桌面端水文智能体（Tauri 2 + React 19）。以宿主形式集成 FloodMind SDK，支持多轮对话与工具调用、MCP 热插拔、Skills 技能系统、Office 文档内置预览与工具授权管控。',
    metrics: [
      { k: '服务商', v: '7 类' },
      { k: '工具授权', v: '3 级' },
    ],
    tech: ['Tauri 2 (Rust)', 'React 19', 'TypeScript', 'Python Flask', 'Nuitka'],
    stars: 0,
    highlight: '桌面端',
  },
  {
    name: 'Monitoring & Forecasting',
    repo: 'dancepandas/Monitoring-and-Forecasting-System',
    url: 'https://github.com/dancepandas/Monitoring-and-Forecasting-System',
    description:
      '水文监测指挥平台。实时采集水位 / 流量，接入 Chronos 时序预测与 FloodMind 智能体，3D 数字孪生（Three.js GLB）多端渲染。',
    metrics: [{ k: '渲染端', v: '3 类' }],
    tech: ['Python 3.14', 'FastAPI', 'Vue 3', 'Three.js', 'Cesium', 'CosyVoice TTS'],
    stars: 0,
    highlight: '数字孪生',
  },
  {
    name: 'sve-pinns',
    repo: 'dancepandas/PINNs-SVE-dist',
    url: 'https://github.com/dancepandas/PINNs-SVE-dist',
    description:
      '基于 PyTorch 的 PINN 一维圣维南方程求解 SDK。反演 Manning 糙率与底坡，输出水位 / 流速场，支持多类断面与边界条件；经 SWASHES 解析解基准验证，已编译发布二进制 wheel。',
    metrics: [
      { k: '基准算例', v: '24' },
      { k: '分发平台', v: '3' },
    ],
    tech: ['Python 3.10+', 'PyTorch', 'PINN / autograd', 'Cython 二进制分发'],
    stars: 0,
    highlight: 'wheel',
  },
  {
    name: 'StreamPredict',
    repo: 'dancepandas/StreamPredict',
    url: 'https://github.com/dancepandas/StreamPredict',
    description:
      '基于 LSTM + 多头注意力的河道流量滚动预报系统。四路 LSTM 编码器分别处理流量 / 降雨 / 蒸发 / 辅助特征，双注意力捕获雨量站点间关系与全局依赖，自回归多步滚动预报。',
    metrics: [
      { k: '编码器', v: '4 路' },
      { k: '预报粒度', v: '5 min' },
    ],
    tech: ['Python 3.7+', 'PyTorch', 'LSTM', 'Multi-Head Attention'],
    stars: 2,
    // 星数由星标图标呈现，这里不再重复挂一个 ★ 2 徽章
    highlight: '',
  },
  {
    name: 'WISE-WRSOM',
    repo: 'dancepandas/WISE_WRSOM',
    url: 'https://github.com/dancepandas/WISE_WRSOM',
    description:
      '自研多目标进化算法的水资源优化调度系统。手写 MOEA/D、NSGA-III、SMPSO 生成 Pareto 最优解集，TOPSIS 决策排序；含马斯京根河道汇流演进，CLI + YAML 配置驱动。',
    metrics: [
      { k: '优化目标', v: '5' },
      { k: '进化算法', v: '3' },
    ],
    tech: ['Python', 'NumPy', 'MOEA/D', 'NSGA-III', 'SMPSO', 'TOPSIS'],
    stars: 0,
    highlight: '自研算法',
  },
  {
    name: 'Qls-SPI',
    repo: 'dancepandas/Qls_spi',
    url: 'https://github.com/dancepandas/Qls_spi',
    description:
      '青龙山灌区气象干旱分析服务。按 SPI 标准算法支持多时间尺度，站点指数经普通克里金插值为栅格并按边界裁剪输出 GeoTIFF，CLI 与 FastAPI 双入口，Docker 部署。',
    metrics: [
      { k: '时间尺度', v: '1/3/6/12 月' },
      { k: '服务入口', v: '2' },
    ],
    tech: ['Python', 'FastAPI', 'GDAL/OGR', 'PyKrige', 'GeoTIFF', 'Docker'],
    stars: 0,
    highlight: '干旱分析',
  },
] as const

// 公司项目（闭源）
export const projects = [
  {
    name: '丽水水文智能体',
    period: '2026.08 - 至今',
    role: 'AI Agent 开发工程师',
    description:
      '面向丽水水文局内网部署的水情简报智能体。对话式生成水情简报 DOCX，内置 P-Ⅲ 适线、高水延长、基流退水、调洪演算等水文统计技能，配套 GIS 制图、表格识别与语音播报；整机离线交付业主内网。',
    metrics: [
      { k: '技能层级', v: '6' },
      { k: '参考样例', v: '13' },
    ],
    tags: ['AI Agent', '水情简报生成', '水文统计技能', '离线内网部署'],
  },
  {
    name: '太湖局水葫芦 AI 视觉识别监测',
    period: '2026.03 - 至今',
    role: '模型算法工程师',
    link: 'https://github.com/dancepandas/shuihulu',
    description:
      '太湖水文水资源局项目。以 SegFormer-B2 为骨干实现水葫芦像素级语义分割与覆盖面积估算，并对比 YOLOv8-seg + SAM 两阶段方案；配套 Flask 多模式推理服务。',
    metrics: [{ k: '模型方案', v: '3 种' }],
    tags: ['SegFormer-B2', '语义分割', 'YOLOv8-seg + SAM', 'Flask 推理服务'],
  },
  {
    name: '开化金马溪四预建设项目',
    period: '2025.10 - 至今',
    role: '模型算法工程师',
    link: 'https://github.com/dancepandas/PINNs-SVE-dist',
    description:
      '构建 PINNs-SVE 一维圣维南方程流量预报模型，反演 Manning 糙率与底坡，输出水位 / 流速场；经 SWASHES 解析解基准验证，已封装为标准 wheel 发布。',
    metrics: [
      { k: '基准算例', v: '24' },
      { k: '反演参数', v: '糙率 · 底坡' },
    ],
    tags: ['PINNs', 'Saint-Venant', 'PyTorch'],
  },
  {
    name: '中小河流洪水预报智能体',
    period: '2025.10 - 至今',
    role: 'AI Agent 工程师',
    link: 'https://github.com/dancepandas/FloodMind',
    description:
      'FloodMind 主体。自研 AI Agent Runtime 执行引擎，支持工具循环、流式输出、并行委派与权限管控，集成 MCP 协议与 RAG 知识库，技能 CRUD 自维护。',
    metrics: [{ k: '权限分级', v: '3 级' }],
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
    link: 'https://github.com/dancepandas/WISE_WRSOM',
    description:
      'WISE-WRSOM 系统。面向全线通水时长、地下水回补、水面面积等目标，自研实现 MOEA/D、NSGA-III、SMPSO 生成 Pareto 解集，TOPSIS 决策排序；含马斯京根河道汇流演进。',
    metrics: [
      { k: '优化目标', v: '5' },
      { k: '进化算法', v: '3' },
    ],
    tags: ['MOEA/D', 'NSGA-III', 'SMPSO', 'TOPSIS'],
  },
  {
    name: '北京市数字孪生山洪洪水模型',
    period: '2023.09 - 2025.04',
    role: '实习生',
    description:
      '北京市自然科学基金项目。耦合新安江模型的山洪预报深度学习模型：GRU、NN、含物理信息的 RNN 网络，pyspark 数据处理。',
    metrics: [{ k: '模型', v: '3 类' }],
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
    logo: './首都师范大学.svg',
  },
  {
    school: '郑州大学',
    degree: '本科',
    major: '水文与水资源',
    period: '2016 - 2020',
    logo: './郑州大学.svg',
  },
]
