// Default language is English
let currentLang = 'en';

// Language translations
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-education': 'Education',
        'nav-research': 'Research',
        'nav-achievements': 'Achievements',
        'nav-projects': 'Projects',
        'nav-skills': 'Skills',
    // Projects page
    'projects-title': 'Projects',
    'view-code': 'View Code',
    'view-details': 'View Details',
    'project-details': 'Project Details',
    'close': 'Close',
    'project-items': {
        'vista': {
            'title': 'VISTA - Visual Intelligence Support & Technical Assistant',
            'description': 'A comprehensive AI system designed to revolutionize how Blind and Low Vision (BLV) individuals interact with their environment through cutting-edge AI technologies.',
            'date': '2025'
        },
        'car-plate': {
            'title': 'Computer Vision Based License Plate Detection',
            'description': 'A comprehensive license plate detection system combining traditional computer vision with deep learning, achieving 98.5% accuracy through multi-method fusion.',
            'date': '2024'
        },
        'campus-trading': {
            'title': 'Campus Second-hand Trading Platform',
            'description': 'A comprehensive trading platform with WeChat Mini Programs for users and merchants, web admin panel, and Spring Boot backend services.',
            'date': '2023'
        },
        'math-model-2024': {
            'title': 'Mathematical Modeling of Spiral Motion',
            'description': 'First Prize winner in 2024 CUMCM. Developed mathematical models for analyzing motion on Archimedean spirals, including position calculation, velocity analysis, and trajectory optimization.',
            'date': '2024'
        },
        'math-model-2023': {
            'title': 'Solar Mirror Optimization Project',
            'description': 'Third Prize winner in 2023 CUMCM. Optimized the arrangement and efficiency of solar mirrors using mathematical modeling to maximize sunlight capture.',
            'date': '2023'
        },
        'digital-night-market': {
            'title': 'Digital Night Market Platform',
            'description': 'A comprehensive digital solution revolutionizing traditional night markets with WeChat Mini Program for consumers, web platform for merchants, and IoT devices for real-time order processing.',
            'date': '2022-2023'
        },
        'sundial': {
            'title': 'Sundial Field Optimization Model',
            'description': 'Developed mathematical models for optimizing sundial field performance, including optical efficiency analysis and layout optimization.',
            'date': '2023'
        },
        'smart-port': {
            'title': 'Smart Port Robot Dispatch System',
            'description': 'An intelligent robot dispatch algorithm for the 2024 Huawei Software Elite Challenge, featuring multi-robot coordination, genetic algorithm optimization, and real-time task allocation with collision avoidance.',
            'date': '2024'
        },
        'ai-assistant': {
            'title': 'I2T Magic - AI Text-Image Assistant',
            'description': 'An AI-powered platform with image-to-text conversion, text-to-image generation, intelligent image search, and comprehensive album management capabilities using FLUX, InternVL2, and CLIP models.',
            'date': '2024'
        }
    },
        // Language switch button
        'lang-switch': '中文',
        // About page
        'about-me': 'About Me',
        'basic-info': 'Basic Information',
        'personal-details': 'Personal Details',
        'my-journey': 'My Journey',
        'research-interests': 'Research Interests',
        // Research page
        'research-journey': 'Research Journey',
        'current-status': 'Current Status',
        'current-status-content': 'I am currently a junior undergraduate student at Sichuan University, participating in Professor Peng Hu\'s laboratory meetings since February 2024. While I\'m still at the beginning of my research journey, this experience has been instrumental in shaping my understanding of academic research and future aspirations.',
        'why-research': 'Why Research?',
        'why-research-content': 'My journey in computer science began with a simple yet profound desire: to create something meaningful that could make a difference in the world. As I delved deeper into my studies, I found myself increasingly drawn to the uncertainty and challenges that research presents. The possibility of contributing to the advancement of knowledge, no matter how small, continues to drive my academic pursuits.',
        'current-learning': 'Current Learning & Exploration',
        'research-areas': {
            'multimodal': 'Multimodal Learning',
            'generative': 'Generative AI',
            'embodied': 'Embodied Intelligence'
        },
        'current-progress': 'Current Progress',
        'learning-stage': 'Learning Stage',
        'learning-stage-content': 'Currently focused on reading papers and understanding fundamental concepts in my areas of interest.',
        'direction-finding': 'Direction Finding',
        'direction-finding-content': 'Actively participating in lab meetings and discussions about multimodal retrieval while exploring various research directions.',
        'future-plans': 'Future Plans',
        'future-plans-content': 'Seeking summer research and internship opportunities to enhance my research skills and experience, preparing for further studies in the field of AI and Computer Science.',
        'lab-experience': 'Lab Experience',
        'lab-title': 'Multi-modal Learning Research',
        'lab-subtitle': 'Peng Hu\'s Laboratory, Sichuan University',
        'lab-date': 'February 2024 – Present',
        'lab-activities': {
            'discussions': 'Participating in regular research discussions and paper readings',
            'implementation': 'Learning to implement and test various multi-modal learning models',
            'collaboration': 'Collaborating with team members and learning from senior researchers'
        },
        // Achievements page
        'achievements-title': 'Achievements & Awards',
        'academic-achievements': 'Academic Achievements',
        'certificates-title': 'Certificates',
        'achievement-items': [
            'First Prize, 2024 China Undergraduate Mathematical Contest in Modeling (Provincial Level)',
            'Second Prize, 14th Blue Bridge Cup Software Competition (University Group A)',
            'First Prize, 2023 National College Internet of Things Design Competition (Central & Southwest China Region)',
            'Second Prize, 2023 National College Internet of Things Design Competition (National Finals)',
            'Third Prize, 2023 China Undergraduate Mathematical Contest in Modeling (Provincial Level)',
            'Second Prize, 2023 Sichuan University Comprehensive Competition',
            'Outstanding Student, Sichuan University, 2023'
        ],
        'certificate-items': [
            'CET4: 587 (2022.12)',
            'CET6: 566 (2023.6)',
            'IELTS: 7.0 (2024.8.20)'
        ],
        // Education page
        'academic-background': 'Academic Background',
        'overall': 'Overall',
        'transcripts': 'Transcripts',
        'certificate': 'Certificate',
        'english-proficiency': 'English Proficiency',
        'freshman-year': 'Freshman Year Performance',
        'sophomore-year': 'Sophomore Year Performance',
        'junior-year': 'Junior Year Performance',
        'senior-year': 'Senior Year Performance',
        'fall-term': 'Fall term',
        'spring-term': 'Spring term',
        'earned-credits': 'Earned Credits',
        'compulsory': 'Compulsory',
        'overall-gpa': 'Overall GPA',
        'compulsory-gpa': 'GPA of Compulsory Courses',
        'weighted-avg': 'Weighted Average Mark',
        'compulsory-weighted': 'Weighted Average Mark of Compulsory Courses',
        'total-credits': 'Earned Credits',
        'compulsory-credits': 'Earned Compulsory Credits',
        'basic-info-items': {
            'junior': 'Junior at SiChuan University',
            'major': 'Computer Science and Technology',
            'class': 'Class of 2022',
            'admin-class': 'Administrative Class 1'
        },
        'personal-details-items': {
            'gender': 'Male',
            'ethnicity': 'Chinese (Han)',
            'birthday': 'July 14, 2004',
            'location': 'Yongzhou, Hunan, China'
        },
        'journey-content': [
            'For the past two and a half years, I have been immersed in the study of Computer Science, a field that continues to captivate and intrigue me. My participation in numerous competitions has been instrumental, providing invaluable experiences that have not only honed my research abilities but also deepened my comprehension of the discipline.',
            'A year ago, under the guidance of my mentor, I began to concentrate my efforts on multi-modal learning, a domain that has allowed me to make significant strides and absorb a wealth of knowledge. Currently, I am actively seeking additional opportunities that can offer fresh insights and diverse experiences.',
            'I approach this educational journey with unbridled passion and a steadfast conviction that my future endeavors will yield remarkable achievements.'
        ],
        'research-interests-items': [
            'Multi-modal Learning',
            'Artificial intelligence',
            'Computer vision',
            'Machine Learning',
            'Multimodal AI Systems',
            'Embodied Intelligence'
        ],
        // Skills page
        'skills-title': 'Skills & Interests',
        'programming-languages': 'Programming Languages',
        'frameworks-tools': 'Frameworks & Tools',
        'research-skills': 'Research Skills',
        'soft-skills': 'Soft Skills',
        'interests': 'Interests',
        'skill-levels': {
            'advanced': 'Advanced',
            'intermediate': 'Intermediate'
        },
        'programming-items': [
            'Python (Advanced)',
            'C/C++ (Advanced)',
            'Java (Intermediate)',
            'JavaScript (Intermediate)',
            'SQL (Intermediate)'
        ],
        'frameworks-items': [
            'PyTorch & TensorFlow',
            'Spring Boot',
            'React & Vue.js',
            'Docker & Kubernetes',
            'Git & GitHub'
        ],
        'research-items': [
            'Machine Learning & Deep Learning',
            'Multi-modal Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Data Analysis & Visualization'
        ],
        'soft-skills-items': [
            'Problem Solving',
            'Team Collaboration',
            'Technical Writing',
            'Project Management',
            'Research Methodology'
        ],
        'interests-items': [
            'Artificial Intelligence',
            'IoT Development',
            'Full-stack Development',
            'Algorithm Design',
            'System Architecture'
        ]
    },
    zh: {
        // Navigation
        'nav-about': '关于',
        'nav-education': '教育',
        'nav-research': '研究',
        'nav-achievements': '成就',
        'nav-projects': '项目',
        'nav-skills': '技能',
    // Projects page
    'projects-title': '项目展示',
    'view-code': '查看代码',
    'view-details': '查看详情',
    'project-details': '项目详情',
    'close': '关闭',
    'project-items': {
        'vista': {
            'title': 'VISTA - 视觉智能辅助系统',
            'description': '一个面向视障群体的综合AI系统，通过前沿AI技术革新视障群体与环境的交互方式。',
            'date': '2025'
        },
        'car-plate': {
            'title': '基于计算机视觉的车牌定位系统',
            'description': '结合传统计算机视觉和深度学习的综合车牌定位系统，通过多方法融合达到98.5%的准确率。',
            'date': '2024'
        },
        'campus-trading': {
            'title': '校园二手交易平台',
            'description': '完整的校园二手交易平台，包含用户和商家微信小程序、Web管理后台以及Spring Boot后端服务。',
            'date': '2023'
        },
        'math-model-2024': {
            'title': '螺线运动数学建模',
            'description': '2024年全国大学生数学建模竞赛省级一等奖。开发了阿基米德螺线运动分析的数学模型，包括位置计算、速度分析和轨迹优化。',
            'date': '2024'
        },
        'math-model-2023': {
            'title': '太阳镜面优化项目',
            'description': '2023年全国大学生数学建模竞赛省级三等奖。通过数学建模优化太阳镜面的排列和效率，以最大化阳光捕获。',
            'date': '2023'
        },
        'digital-night-market': {
            'title': '数字夜市平台',
            'description': '革新传统夜市的综合数字化解决方案，包含面向消费者的微信小程序、商户管理后台和基于树莓派的实时订单处理设备。',
            'date': '2022-2023'
        },
        'sundial': {
            'title': '日晷场优化模型',
            'description': '开发用于优化日晷场性能的数学模型，包括光学效率分析和布局优化。',
            'date': '2023'
        },
        'smart-port': {
            'title': '智能港口机器人调度系统',
            'description': '2024华为软件精英挑战赛参赛作品，实现了多机器人协同调度、遗传算法参数优化、动态任务分配和避障机制的智能调度算法。',
            'date': '2024'
        },
        'ai-assistant': {
            'title': 'I2T Magic 图文助手',
            'description': '基于AI的图文处理平台，提供图像到文本转换、文本生成图像、智能图像搜索和全面的相册管理功能，采用FLUX、InternVL2和CLIP等先进模型。',
            'date': '2024'
        }
    },
        // Language switch button
        'lang-switch': 'English',
        // About page
        'about-me': '关于我',
        'basic-info': '基本信息',
        'personal-details': '个人详情',
        'my-journey': '我的历程',
        'research-interests': '研究兴趣',
        // Research page
        'research-journey': '研究历程',
        'current-status': '当前状态',
        'current-status-content': '我目前是四川大学的大三本科生，从2024年2月开始参加彭虎教授的实验室会议。虽然我仍处于研究之旅的起步阶段，但这段经历对于塑造我对学术研究的理解和未来志向起到了重要作用。',
        'why-research': '为什么选择研究？',
        'why-research-content': '我的计算机科学之旅始于一个简单而深刻的愿望：创造一些有意义的东西，能够为世界带来改变。随着我深入学习，我发现自己越来越被研究所呈现的不确定性和挑战所吸引。为知识进步做出贡献的可能性，无论多小，都继续推动着我的学术追求。',
        'current-learning': '当前学习与探索',
        'research-areas': {
            'multimodal': '多模态学习',
            'generative': '生成式人工智能',
            'embodied': '具身智能'
        },
        'current-progress': '当前进展',
        'learning-stage': '学习阶段',
        'learning-stage-content': '目前专注于阅读论文并理解我感兴趣领域的基本概念。',
        'direction-finding': '方向探索',
        'direction-finding-content': '积极参与实验室会议和关于多模态检索的讨论，同时探索各种研究方向。',
        'future-plans': '未来计划',
        'future-plans-content': '寻求暑期研究和实习机会，以提升我的研究技能和经验，为AI和计算机科学领域的进一步深造做准备。',
        'lab-experience': '实验室经历',
        'lab-title': '多模态学习研究',
        'lab-subtitle': '四川大学彭虎教授实验室',
        'lab-date': '2024年2月 – 至今',
        'lab-activities': {
            'discussions': '参与定期研究讨论和论文阅读',
            'implementation': '学习实现和测试各种多模态学习模型',
            'collaboration': '与团队成员合作并向高年级研究者学习'
        },
        // Achievements page
        'achievements-title': '成就与奖项',
        'academic-achievements': '学术成就',
        'certificates-title': '证书',
        'achievement-items': [
            '2024年中国大学生数学建模竞赛省级一等奖',
            '第14届蓝桥杯软件大赛（大学A组）二等奖',
            '2023年全国大学生物联网设计竞赛（中西部赛区）一等奖',
            '2023年全国大学生物联网设计竞赛（全国总决赛）二等奖',
            '2023年中国大学生数学建模竞赛省级三等奖',
            '2023年四川大学综合竞赛二等奖',
            '2023年四川大学优秀学生'
        ],
        'certificate-items': [
            'CET4：587分（2022.12）',
            'CET6：566分（2023.6）',
            'IELTS：7.0分（2024.8.20）'
        ],
        // Education page
        'academic-background': '学术背景',
        'overall': '总体情况',
        'transcripts': '成绩单',
        'certificate': '证书',
        'english-proficiency': '英语水平',
        'freshman-year': '大一学年表现',
        'sophomore-year': '大二学年表现',
        'junior-year': '大三学年表现',
        'senior-year': '大四学年表现',
        'fall-term': '秋季学期',
        'spring-term': '春季学期',
        'earned-credits': '获得学分',
        'compulsory': '必修课',
        'overall-gpa': '总GPA',
        'compulsory-gpa': '必修课GPA',
        'weighted-avg': '加权平均分',
        'compulsory-weighted': '必修课加权平均分',
        'total-credits': '总学分',
        'compulsory-credits': '必修课学分',
        'basic-info-items': {
            'junior': '四川大学在读本科生',
            'major': '计算机科学与技术专业',
            'class': '2022级',
            'admin-class': '行政班级1班'
        },
        'personal-details-items': {
            'gender': '男',
            'ethnicity': '汉族',
            'birthday': '2004年7月14日',
            'location': '中国湖南永州'
        },
        'journey-content': [
            '在过去的两年半时间里，我一直沉浸在计算机科学的学习中，这个领域持续吸引着我，让我着迷。参与众多比赛的经历为我提供了宝贵的经验，不仅锻炼了我的研究能力，还加深了我对这门学科的理解。',
            '一年前，在导师的指导下，我开始专注于多模态学习领域的研究，这让我取得了重要进展并积累了丰富的知识。目前，我正在积极寻求更多机会，以获取新的见解和多样化的经验。',
            '我怀着无比的热情和坚定的信念继续这段学习旅程，相信未来的努力必将带来显著的成就。'
        ],
        'research-interests-items': [
            '多模态学习',
            '人工智能',
            '计算机视觉',
            '机器学习',
            '多模态AI系统',
            '具身智能'
        ],
        // Skills page
        'skills-title': '技能与兴趣',
        'programming-languages': '编程语言',
        'frameworks-tools': '框架与工具',
        'research-skills': '研究技能',
        'soft-skills': '软技能',
        'interests': '兴趣方向',
        'skill-levels': {
            'advanced': '精通',
            'intermediate': '熟练'
        },
        'programming-items': [
            'Python (精通)',
            'C/C++ (精通)',
            'Java (熟练)',
            'JavaScript (熟练)',
            'SQL (熟练)'
        ],
        'frameworks-items': [
            'PyTorch & TensorFlow',
            'Spring Boot',
            'React & Vue.js',
            'Docker & Kubernetes',
            'Git & GitHub'
        ],
        'research-items': [
            '机器学习与深度学习',
            '多模态学习',
            '计算机视觉',
            '自然语言处理',
            '数据分析与可视化'
        ],
        'soft-skills-items': [
            '问题解决能力',
            '团队协作',
            '技术写作',
            '项目管理',
            '研究方法论'
        ],
        'interests-items': [
            '人工智能',
            '物联网开发',
            '全栈开发',
            '算法设计',
            '系统架构'
        ]
    }
};

// Function to switch language
function switchLanguage() {
    currentLang = currentLang === 'en' ? 'zh' : 'en';
    updateContent();
    // Update button text
    const langBtn = document.querySelector('.language-switch');
    langBtn.textContent = translations[currentLang]['lang-switch'];
    // Store language preference
    localStorage.setItem('preferredLanguage', currentLang);
}

// Function to update content based on current language
function updateContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update project content
    document.querySelectorAll('[data-i18n-project]').forEach(element => {
        const [project, field] = element.getAttribute('data-i18n-project').split('.');
        if (translations[currentLang]['project-items'][project] && 
            translations[currentLang]['project-items'][project][field]) {
            element.textContent = translations[currentLang]['project-items'][project][field];
        }
    });

    // Update basic info items
    document.querySelectorAll('[data-i18n-info]').forEach(element => {
        const key = element.getAttribute('data-i18n-info');
        if (translations[currentLang]['basic-info-items'][key]) {
            element.textContent = translations[currentLang]['basic-info-items'][key];
        }
    });

    // Update personal details items
    document.querySelectorAll('[data-i18n-details]').forEach(element => {
        const key = element.getAttribute('data-i18n-details');
        if (translations[currentLang]['personal-details-items'][key]) {
            element.textContent = translations[currentLang]['personal-details-items'][key];
        }
    });

    // Update journey content
    document.querySelectorAll('[data-i18n-journey]').forEach((element, index) => {
        if (translations[currentLang]['journey-content'][index]) {
            element.textContent = translations[currentLang]['journey-content'][index];
        }
    });

    // Update research interests
    document.querySelectorAll('[data-i18n-interest]').forEach((element, index) => {
        if (translations[currentLang]['research-interests-items'][index]) {
            element.textContent = translations[currentLang]['research-interests-items'][index];
        }
    });

    // Update lab activities
    document.querySelectorAll('[data-i18n-lab]').forEach(element => {
        const key = element.getAttribute('data-i18n-lab');
        if (translations[currentLang]['lab-activities'][key]) {
            element.textContent = translations[currentLang]['lab-activities'][key];
        }
    });

    // Update research areas
    document.querySelectorAll('[data-i18n-area]').forEach(element => {
        const key = element.getAttribute('data-i18n-area');
        if (translations[currentLang]['research-areas'][key]) {
            element.textContent = translations[currentLang]['research-areas'][key];
        }
    });

    // Update achievement items
    document.querySelectorAll('[data-i18n-achievement]').forEach((element, index) => {
        if (translations[currentLang]['achievement-items'][index]) {
            element.textContent = translations[currentLang]['achievement-items'][index];
        }
    });

    // Update certificate items
    document.querySelectorAll('[data-i18n-certificate]').forEach((element, index) => {
        if (translations[currentLang]['certificate-items'][index]) {
            element.textContent = translations[currentLang]['certificate-items'][index];
        }
    });

    // Update programming language items
    document.querySelectorAll('[data-i18n-programming]').forEach((element, index) => {
        if (translations[currentLang]['programming-items'][index]) {
            element.textContent = translations[currentLang]['programming-items'][index];
        }
    });

    // Update framework items
    document.querySelectorAll('[data-i18n-framework]').forEach((element, index) => {
        if (translations[currentLang]['frameworks-items'][index]) {
            element.textContent = translations[currentLang]['frameworks-items'][index];
        }
    });

    // Update research skill items
    document.querySelectorAll('[data-i18n-research]').forEach((element, index) => {
        if (translations[currentLang]['research-items'][index]) {
            element.textContent = translations[currentLang]['research-items'][index];
        }
    });

    // Update soft skill items
    document.querySelectorAll('[data-i18n-soft]').forEach((element, index) => {
        if (translations[currentLang]['soft-skills-items'][index]) {
            element.textContent = translations[currentLang]['soft-skills-items'][index];
        }
    });

    // Update interests items
    document.querySelectorAll('[data-i18n-interests]').forEach((element, index) => {
        if (translations[currentLang]['interests-items'][index]) {
            element.textContent = translations[currentLang]['interests-items'][index];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for stored language preference
    const storedLang = localStorage.getItem('preferredLanguage');
    if (storedLang) {
        currentLang = storedLang;
        updateContent();
    }
});
