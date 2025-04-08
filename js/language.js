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
            'embodied': 'Embodied Intelligence',
            'hci': 'Human-Computer Interaction',
            'hci-theme': 'HCI Theme'
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
            'enrollment': 'Enrolled: September 1st, 2022',
            'graduation': 'Expected Graduation: July 1st, 2026',
            'major': 'Computer Science and Technology',
            'class': 'Class of 2022'
        },
        'personal-details-items': {
            'gender': 'Male',
            'ethnicity': 'Chinese (Han)',
            'birthday': 'July 14, 2004',
            'location': 'Chengdu, Sichuan, China'
        },
        'journey-content': [
            'I\'m a junior computer science student who found his calling in AI research. While my journey began with simple coding assignments, each project and competition gradually revealed to me the profound impact technology can have on people\'s lives. This realization has deeply shaped my aspirations.',
            
            'Currently, I\'m at a pivotal point in my academic journey. The field of AI, particularly multi-modal learning, has captured my imagination, though I often feel both excited and overwhelmed by its vast scope. Under my mentor\'s guidance, I\'m learning to navigate this complexity, balancing my enthusiasm with the humbling recognition of how much there is to learn.',
            
            'Looking ahead, I\'m both anxious and hopeful. The path in research isn\'t always clear, and the challenges can seem daunting. Yet, it\'s precisely these challenges that drive me forward. I\'m committed to this journey, not because I believe I\'m exceptional, but because I believe in the power of persistent effort and genuine curiosity to make meaningful contributions, however modest they may be.'
        ],
        'research-interests-items': [
            'Multi-modal Learning',
            'Artificial intelligence',
            'Computer vision',
            'Machine Learning',
            'Human-Computer Interaction',
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
        ],
        // New Skills Page Content
        'core-competencies': 'Core Competencies',
        'ai-cv-title': '🤖 AI & Computer Vision',
        'ai-cv-desc': 'Expertise in developing sophisticated AI systems with practical applications:',
        'multimodal-title': 'Multimodal AI Systems',
        'multimodal-desc': 'Developed VISTA, an advanced assistive technology platform integrating computer vision, NLP, and sensor fusion for visually impaired users.',
        'cv-title': 'Computer Vision',
        'cv-desc': 'Implemented a robust license plate detection system combining traditional CV methods (HSV color space, Sobel edge detection) with deep learning (YOLOv8).',
        'ai-integration-title': 'AI Integration',
        'ai-integration-desc': 'Created I2T Magic, featuring image-to-text conversion and intelligent image search using vector embeddings.',
        'fullstack-title': '💻 Full Stack Development',
        'fullstack-desc': 'Comprehensive experience in building end-to-end applications:',
        'backend-title': 'Backend Development',
        'backend-desc-1': 'Designed and implemented FastAPI-based backend for VISTA with real-time processing capabilities',
        'backend-desc-2': 'Built Spring Boot microservices for the Campus Second-hand Trading Platform',
        'frontend-title': 'Frontend Development',
        'frontend-desc-1': 'Created cross-platform mobile applications using Flutter (VISTA, I2T Magic)',
        'frontend-desc-2': 'Developed WeChat Mini Programs for the Digital Night Market Platform',
        'algo-title': '🎯 Algorithm Design & Optimization',
        'algo-desc': 'Strong foundation in algorithmic problem-solving and optimization:',
        'math-modeling-title': 'Mathematical Modeling',
        'math-modeling-desc-1': 'First Prize in 2024 CUMCM for spiral motion modeling',
        'math-modeling-desc-2': 'Third Prize in 2023 CUMCM for solar mirror optimization',
        'algo-opt-title': 'Algorithm Optimization',
        'algo-opt-desc-1': 'Enhanced Sobel edge detection algorithm for license plate detection',
        'algo-opt-desc-2': 'Implemented genetic algorithms for robot dispatch optimization in Huawei competition',
        'tech-skills': 'Technical Skills',
        'prog-langs': 'Programming Languages',
        'prog-python': 'Python: FastAPI, NumPy, OpenCV, Deep Learning',
        'prog-dart': 'Dart/Flutter: Cross-platform mobile development',
        'prog-cpp': 'C++: Algorithm implementation, optimization',
        'prog-js': 'JavaScript: Vue.js, WeChat Mini Program',
        'prog-java': 'Java: Spring Boot microservices',
        'frameworks': 'Frameworks & Tools',
        'frame-backend': 'Backend: FastAPI, Spring Boot, Node.js',
        'frame-frontend': 'Frontend: Flutter, Vue.js, WeChat Mini Program',
        'frame-ai': 'AI/ML: PyTorch, TensorFlow, OpenCV',
        'frame-db': 'Databases: MySQL, PostgreSQL',
        'frame-devops': 'DevOps: Docker, Git, CI/CD',
        'dev-skills': 'Development Skills',
        'dev-system': 'System Design: Microservices, API design',
        'dev-perf': 'Performance: Algorithm & system optimization',
        'dev-test': 'Testing: Unit testing, integration testing',
        'dev-doc': 'Documentation: Technical writing, API docs',
        'leadership-skills': 'Leadership & Soft Skills',
        'project-leadership': 'Project Leadership',
        'leadership-1': 'Team Leadership: Led a team of 6 developers in the Digital Night Market Platform project, coordinating between frontend, backend, and IoT teams',
        'leadership-2': 'Project Planning: Developed project timelines, allocated resources, and managed deliverables for multiple successful projects',
        'leadership-3': 'Stakeholder Management: Coordinated with clients, vendors, and team members to ensure project success',
        'collaboration': 'Collaboration & Communication',
        'collab-1': 'Cross-functional Collaboration: Worked effectively with designers, developers, and business stakeholders across multiple projects',
        'collab-2': 'Technical Documentation: Created comprehensive documentation for VISTA and Campus Trading Platform, including API specs and system architecture',
        'collab-3': 'Knowledge Sharing: Conducted technical workshops and code reviews to improve team capabilities',
        'problem-solving': 'Problem Solving & Innovation',
        'problem-1': 'Analytical Thinking: Applied mathematical modeling to solve complex problems in competitions and real-world projects',
        'problem-2': 'Creative Solutions: Developed innovative approaches for VISTA\'s multimodal system and I2T Magic\'s AI features',
        'problem-3': 'Research Methodology: Conducted systematic research and analysis for algorithm optimization and system improvements',
        'career-positioning': 'Career Positioning',
        'career-items': {
            'ai-engineer': {
                'title': 'AI Engineer',
                'description': 'Specialized in multimodal AI systems development (VISTA, I2T Magic) with computer vision and NLP integration.',
                'tags': ['VISTA', 'I2T Magic', 'License Plate Detection'],
                'skills': [
                    'Computer Vision & NLP Integration',
                    'PyTorch & TensorFlow Development',
                    'Model Optimization & Deployment'
                ]
            },
            'fullstack': {
                'title': 'Full Stack Developer',
                'description': 'Built end-to-end applications including VISTA (Flutter/FastAPI) and Campus Trading Platform (Spring Boot/Vue.js).',
                'tags': ['Campus Trading Platform', 'Digital Night Market', 'Smart Port System'],
                'skills': [
                    'Flutter & Vue.js Frontend',
                    'Spring Boot & FastAPI Backend',
                    'Microservices Architecture'
                ]
            },
            'data-scientist': {
                'title': 'Data Scientist',
                'description': 'Applied data analysis in mathematical modeling competitions (CUMCM) and AI-driven analytics projects.',
                'tags': ['CUMCM Awards', 'Spiral Motion Model', 'Solar Mirror Optimization'],
                'skills': [
                    'Mathematical Modeling',
                    'Data Analysis & Visualization',
                    'Algorithm Optimization'
                ]
            }
        },
        // Lab Introduction
        'lab-intro-title': 'Lab Introduction',
        'lab-intro-content': "Professor Peng Hu's laboratory focuses on multimodal AI technology research, committed to advancing AI technology applications in healthcare, education, transportation, and other fields. Through interdisciplinary research methods, the laboratory explores multimodal data fusion and understanding by combining deep learning, computer vision, and natural language processing technologies to solve complex real-world problems.",
        
        // Research Project
        'research-project-title': 'Research Project',
        'project-name': 'Project: Cross-modal Retrieval Research under Multi-label Noise',
        'project-background-title': 'Project Background',
        'project-background-content': 'In multimodal data, label noise is a common problem, especially in the annotation process of large-scale datasets. Noisy labels affect model training effectiveness and retrieval performance. Therefore, studying how to improve the robustness and accuracy of cross-modal retrieval under multi-label noise has important theoretical and practical significance.',
        
        'research-objectives-title': 'Research Objectives',
        'objective-1': 'Explore the generation mechanism and characteristics of multi-label noise, design reasonable noise models.',
        'objective-2': 'Study how to improve the robustness of cross-modal retrieval models in multi-label noise environments.',
        'objective-3': 'Propose effective noise processing methods to reduce the impact of noise on retrieval performance.',
        
        'research-methods-title': 'Research Methods',
        'method-1': 'Noise Model Design: Design various noise generation methods through analysis of existing literature and datasets.',
        'method-2': 'Model Optimization: Optimize cross-modal retrieval model architecture to better adapt to noisy environments.',
        'method-3': 'Experimental Evaluation: Conduct experiments on multiple standard datasets to evaluate model performance.',
        
        'project-progress-title': 'Project Progress',
        'progress-1': 'Completed noise model design and preliminary experiments.',
        'progress-2': 'Currently optimizing model architecture to improve performance under high noise rates.',
        'progress-3': 'Responsible for noise model design, experimental design, and data analysis.',
        
        // Research Skills
        'research-skills-title': 'Research Skills & Capabilities',
        'skill-1-title': 'Deep Learning & Model Optimization',
        'skill-1-content': 'Proficient in deep learning frameworks (PyTorch, TensorFlow), capable of designing and optimizing complex neural network architectures.',
        'skill-2-title': 'Data Processing & Analysis',
        'skill-2-content': 'Strong data processing capabilities, efficient handling of large-scale multimodal datasets using Python, NumPy, Pandas.',
        'skill-3-title': 'Noise Modeling & Processing',
        'skill-3-content': 'In-depth study of multi-label noise generation mechanisms, design and implementation of various noise models.',
        
        // Future Outlook
        'future-outlook-title': 'Future Outlook',
        'future-plan-1': 'Further research on noise processing methods to improve model performance in complex noise environments.',
        'future-plan-2': 'Expand research scope to other multimodal tasks such as classification and generation.',
        'future-plan-3': 'Actively participate in international academic conferences and collaboration projects.',
        
        'methodology-title': 'Methodology',
        'methodology-1': 'Noise Model Design: Developed a noise generation method that maintains dataset label distribution stability while introducing controlled noise rates.',
        'methodology-2': 'Noise Transition Matrix: Implemented and optimized a noise transition matrix estimation approach for multi-label scenarios.',
        'methodology-3': 'Model Architecture: Analyzed and modified existing cross-modal retrieval models to enhance noise robustness.',
        
        'implementation-title': 'Technical Implementation',
        'implementation-1': 'Developed noise generation algorithms considering label correlation and distribution balance.',
        'implementation-2': 'Implemented baseline models using PyTorch, including data preprocessing and model training pipelines.',
        'implementation-3': 'Created evaluation frameworks for measuring model performance under various noise rates (0.1-0.5).',
        
        'current-findings-title': 'Current Findings',
        'finding-1': 'Observed significant performance degradation in baseline models under high noise rates (>0.3).',
        'finding-2': 'Identified the effectiveness of soft-label contrastive loss in noise-resistant learning.',
        'finding-3': 'Demonstrated the importance of maintaining label distribution stability in noise generation.',
        
        'challenges-title': 'Technical Challenges',
        'challenge-1': 'Developing accurate noise transition matrix estimation methods for multi-label scenarios.',
        'challenge-2': 'Balancing model complexity with computational efficiency in noise-robust architectures.',
        'challenge-3': 'Maintaining retrieval performance while implementing noise-resistant mechanisms.',
        
        'technical-skill-1': 'Implementation & Development',
        'technical-skill-1-content': '• PyTorch implementation of cross-modal retrieval models\n• Custom dataset processing pipelines\n• Experiment tracking and visualization using TensorBoard',
        'technical-skill-2': 'Data Analysis & Experimentation',
        'technical-skill-2-content': '• Statistical analysis of noise effects\n• Performance metrics evaluation\n• Experimental design and validation',
        'technical-skill-3': 'Research Methodology',
        'technical-skill-3-content': '• Literature review and analysis\n• Problem formulation\n• Scientific documentation and reporting',
        
        'current-work-title': 'Current Work',
        'current-work-1': 'Conducting comprehensive experiments on NUS-WIDE and MS-COCO datasets with various noise rates.',
        'current-work-2': 'Implementing and evaluating different noise-robust training strategies.',
        'current-work-3': 'Developing improved methods for noise transition matrix estimation in multi-label scenarios.',
        
        'future-directions-title': 'Future Research Directions',
        'future-direction-1': 'Exploring self-supervised learning approaches for noise-robust cross-modal retrieval.',
        'future-direction-2': 'Investigating the integration of pre-trained vision-language models for improved robustness.',
        'future-direction-3': 'Developing theoretical frameworks for understanding multi-label noise in cross-modal scenarios.',
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
        'current-status-content': '我目前是四川大学的大三本科生，从2024年2月开始参加胡鹏教授的实验室会议。虽然我仍处于研究之旅的起步阶段，但这段经历对于塑造我对学术研究的理解和未来志向起到了重要作用。',
        'why-research': '为什么选择研究？',
        'why-research-content': '我的计算机科学之旅始于一个简单而深刻的愿望：创造一些有意义的东西，能够为世界带来改变。随着我深入学习，我发现自己越来越被研究所呈现的不确定性和挑战所吸引。为知识进步做出贡献的可能性，无论多小，都继续推动着我的学术追求。',
        'current-learning': '当前学习与探索',
        'research-areas': {
            'multimodal': '多模态学习',
            'generative': '生成式人工智能',
            'embodied': '具身智能',
            'hci': '人机交互',
            'hci-theme': 'HCI主题'
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
        'lab-subtitle': '四川大学胡鹏教授实验室',
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
            'enrollment': '入学时间：2022年9月1日',
            'graduation': '预计毕业：2026年7月1日',
            'major': '计算机科学与技术',
            'class': '2022级'
        },
        'personal-details-items': {
            'gender': '男',
            'ethnicity': '汉族',
            'birthday': '2004年7月14日',
            'location': '四川省成都市'
        },
        'journey-content': [
            '作为一名计算机科学专业的大三学生，我在AI研究中找到了自己的使命。从最初的简单编程作业开始，每一个项目和比赛都让我逐渐认识到技术对人们生活的深远影响。这种认知深刻地塑造了我的理想。',
            
            '此刻，我正站在学术生涯的一个关键节点上。AI领域，特别是多模态学习，让我着迷，尽管它的广度和深度常常让我既兴奋又感到压力。在导师的指导下，我正学着在这复杂的领域中找寻方向，平衡热情与谦逊，深知自己仍有很长的路要走。',
            
            '展望未来，我心怀期待，也难免焦虑。研究的道路并不总是清晰，挑战时常令人生畏。但正是这些挑战推动着我前进。我投身这条道路，不是因为自认非凡，而是相信持续的努力和真诚的求知欲，终能让我为这个领域贡献一份力量，哪怕是微小的进步。'
        ],
        'research-interests-items': [
            '多模态学习',
            '人工智能',
            '计算机视觉',
            '机器学习',
            '人机交互',
            '多模态AI系统',
            '具身智能',
            '物联网人工智能'
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
        ],
        // New Skills Page Content
        'core-competencies': '核心能力',
        'ai-cv-title': '🤖 人工智能与计算机视觉',
        'ai-cv-desc': '在开发实用AI系统方面的专业经验：',
        'multimodal-title': '多模态AI系统',
        'multimodal-desc': '开发了VISTA，一个面向视障人士的先进辅助技术平台，集成了计算机视觉、自然语言处理和传感器融合技术。',
        'cv-title': '计算机视觉',
        'cv-desc': '实现了一个结合传统计算机视觉方法（HSV色彩空间、Sobel边缘检测）和深度学习（YOLOv8）的车牌检测系统。',
        'ai-integration-title': 'AI集成',
        'ai-integration-desc': '创建了I2T Magic，具有图像到文本转换和基于向量嵌入的智能图像搜索功能。',
        'fullstack-title': '💻 全栈开发',
        'fullstack-desc': '构建端到端应用程序的全面经验：',
        'backend-title': '后端开发',
        'backend-desc-1': '设计并实现了基于FastAPI的VISTA后端，具有实时处理能力',
        'backend-desc-2': '为校园二手交易平台构建了Spring Boot微服务',
        'frontend-title': '前端开发',
        'frontend-desc-1': '使用Flutter创建跨平台移动应用（VISTA、I2T Magic）',
        'frontend-desc-2': '为数字夜市平台开发微信小程序',
        'algo-title': '🎯 算法设计与优化',
        'algo-desc': '在算法问题解决和优化方面有扎实的基础：',
        'math-modeling-title': '数学建模',
        'math-modeling-desc-1': '2024年全国大学生数学建模竞赛省级一等奖（螺线运动建模）',
        'math-modeling-desc-2': '2023年全国大学生数学建模竞赛省级三等奖（太阳镜面优化）',
        'algo-opt-title': '算法优化',
        'algo-opt-desc-1': '改进了用于车牌检测的Sobel边缘检测算法',
        'algo-opt-desc-2': '在华为竞赛中实现了机器人调度的遗传算法优化',
        'tech-skills': '技术技能',
        'prog-langs': '编程语言',
        'prog-python': 'Python：FastAPI、NumPy、OpenCV、深度学习',
        'prog-dart': 'Dart/Flutter：跨平台移动开发',
        'prog-cpp': 'C++：算法实现与优化',
        'prog-js': 'JavaScript：Vue.js、微信小程序',
        'prog-java': 'Java：Spring Boot微服务',
        'frameworks': '框架与工具',
        'frame-backend': '后端：FastAPI、Spring Boot、Node.js',
        'frame-frontend': '前端：Flutter、Vue.js、微信小程序',
        'frame-ai': 'AI/ML：PyTorch、TensorFlow、OpenCV',
        'frame-db': '数据库：MySQL、PostgreSQL',
        'frame-devops': 'DevOps：Docker、Git、CI/CD',
        'dev-skills': '开发技能',
        'dev-system': '系统设计：微服务、API设计',
        'dev-perf': '性能优化：算法与系统优化',
        'dev-test': '测试：单元测试、集成测试',
        'dev-doc': '文档：技术写作、API文档',
        'leadership-skills': '领导力与软技能',
        'project-leadership': '项目领导力',
        'leadership-1': '团队领导：领导6人开发团队完成数字夜市平台项目，协调前端、后端和物联网团队',
        'leadership-2': '项目规划：制定项目时间表，分配资源，管理多个成功项目的交付',
        'leadership-3': '利益相关者管理：与客户、供应商和团队成员协调以确保项目成功',
        'collaboration': '协作与沟通',
        'collab-1': '跨职能协作：在多个项目中与设计师、开发人员和业务相关者有效合作',
        'collab-2': '技术文档：为VISTA和校园交易平台创建全面的文档，包括API规范和系统架构',
        'collab-3': '知识共享：开展技术研讨会和代码审查以提升团队能力',
        'problem-solving': '问题解决与创新',
        'problem-1': '分析思维：在竞赛和实际项目中应用数学建模解决复杂问题',
        'problem-2': '创新解决方案：为VISTA的多模态系统和I2T Magic的AI功能开发创新方法',
        'problem-3': '研究方法论：为算法优化和系统改进进行系统性研究和分析',
        'career-positioning': '职业定位',
        'career-items': {
            'ai-engineer': {
                'title': 'AI工程师',
                'description': '专注于多模态AI系统开发（VISTA、I2T Magic），整合计算机视觉与自然语言处理技术。',
                'tags': ['VISTA辅助系统', 'I2T Magic', '车牌检测系统'],
                'skills': [
                    '计算机视觉与NLP集成',
                    'PyTorch与TensorFlow开发',
                    '模型优化与部署'
                ]
            },
            'fullstack': {
                'title': '全栈开发工程师',
                'description': '开发完整应用系统，包括VISTA（Flutter/FastAPI）和校园二手交易平台（Spring Boot/Vue.js）。',
                'tags': ['校园二手交易平台', '数字夜市系统', '智能港口系统'],
                'skills': [
                    'Flutter与Vue.js前端开发',
                    'Spring Boot与FastAPI后端',
                    '微服务架构设计'
                ]
            },
            'data-scientist': {
                'title': '数据科学家',
                'description': '在数学建模竞赛（CUMCM）和AI驱动的分析项目中应用数据分析。',
                'tags': ['数模竞赛奖项', '螺线运动建模', '太阳镜面优化'],
                'skills': [
                    '数学建模',
                    '数据分析与可视化',
                    '算法优化'
                ]
            }
        },
        // Lab Introduction
        'lab-intro-title': '实验室介绍',
        'lab-intro-content': '胡鹏教授实验室专注于多模态AI技术的研究，致力于推动人工智能技术在医疗、教育、交通等领域的应用。实验室通过跨学科的研究方法，结合深度学习、计算机视觉和自然语言处理等技术，探索多模态数据的融合与理解，以解决现实世界中的复杂问题。',
        
        // Research Project
        'research-project-title': '研究项目',
        'project-name': '项目：多标签噪声下的跨模态检索研究',
        'project-background-title': '项目背景',
        'project-background-content': '在多模态数据中，标签噪声是一个常见的问题，尤其是在大规模数据集的标注过程中。噪声标签会影响模型的训练效果和检索性能。因此，研究如何在多标签噪声环境下提高跨模态检索的鲁棒性和准确性具有重要的理论和实际意义。',
        
        'research-objectives-title': '研究目标',
        'objective-1': '探索多标签噪声的生成机制和特性，设计合理的噪声模型。',
        'objective-2': '研究在多标签噪声环境下，如何提高跨模态检索模型的鲁棒性。',
        'objective-3': '提出有效的噪声处理方法，以减少噪声对检索性能的影响。',
        
        'research-methods-title': '研究方法',
        'method-1': '噪声模型设计：设计各种噪声生成方法通过分析现有文献和数据集。',
        'method-2': '模型优化：结合深度学习技术，优化跨模态检索模型的架构，使其能够更好地适应噪声环境。',
        'method-3': '实验评估：在多个标准数据集上进行实验，评估模型在不同噪声率下的性能。',
        
        'project-progress-title': '项目进展',
        'progress-1': '已完成噪声模型的设计和初步实验。',
        'progress-2': '正在进一步优化模型架构，以提高其在高噪声率下的性能。',
        'progress-3': '主要负责噪声模型的设计、实验设计和数据分析。',
        
        // Research Skills
        'research-skills-title': '研究技能与能力',
        'skill-1-title': '深度学习与模型优化',
        'skill-1-content': '熟练掌握深度学习框架（如PyTorch、TensorFlow），能够设计和优化复杂的神经网络架构。',
        'skill-2-title': '数据处理与分析',
        'skill-2-content': '具备强大的数据处理能力，能够高效地处理大规模多模态数据集，并使用Python、NumPy、Pandas等工具进行分析。',
        'skill-3-title': '噪声建模与处理',
        'skill-3-content': '深入研究了多标签噪声的生成机制，设计并实现了多种噪声模型。',
        
        // Future Outlook
        'future-outlook-title': '未来展望',
        'future-plan-1': '深入研究噪声处理方法，提高模型在复杂噪声环境下的性能。',
        'future-plan-2': '将研究范围扩展到其他多模态任务，如多模态分类和多模态生成等。',
        'future-plan-3': '积极参与国际学术会议和合作项目，与全球顶尖的研究团队进行交流和合作。',
        
        'methodology-title': '研究方法',
        'methodology-1': '噪声模型设计：开发了一种在引入可控噪声率的同时保持数据集标签分布稳定的噪声生成方法。',
        'methodology-2': '噪声转移矩阵：实现并优化了适用于多标签场景的噪声转移矩阵估计方法。',
        'methodology-3': '模型架构：分析并修改现有跨模态检索模型以增强抗噪声能力。',
        
        'implementation-title': '技术实现',
        'implementation-1': '开发考虑标签相关性和分布平衡的噪声生成算法。',
        'implementation-2': '使用PyTorch实现基线模型，包括数据预处理和模型训练流程。',
        'implementation-3': '创建评估框架，用于测量模型在不同噪声率(0.1-0.5)下的性能。',
        
        'current-findings-title': '当前发现',
        'finding-1': '观察到基线模型在高噪声率(>0.3)下性能显著下降。',
        'finding-2': '确认了软标签对比损失在抗噪声学习中的有效性。',
        'finding-3': '证明了在噪声生成中保持标签分布稳定的重要性。',
        
        'challenges-title': '技术挑战',
        'challenge-1': '开发适用于多标签场景的准确噪声转移矩阵估计方法。',
        'challenge-2': '在噪声鲁棒架构中平衡模型复杂度和计算效率。',
        'challenge-3': '在实现抗噪声机制的同时保持检索性能。',
        
        'technical-skill-1': '实现与开发',
        'technical-skill-1-content': '• PyTorch实现跨模态检索模型\n• 自定义数据集处理流程\n• 使用TensorBoard进行实验跟踪和可视化',
        'technical-skill-2': '数据分析与实验',
        'technical-skill-2-content': '• 噪声效应统计分析\n• 性能指标评估\n• 实验设计与验证',
        'technical-skill-3': '研究方法论',
        'technical-skill-3-content': '• 文献综述与分析\n• 问题形式化\n• 科学文档编写与报告',
        
        'current-work-title': '当前工作',
        'current-work-1': '在NUS-WIDE和MS-COCO数据集上进行不同噪声率下的综合实验。',
        'current-work-2': '实现和评估不同的抗噪声训练策略。',
        'current-work-3': '开发改进的多标签场景噪声转移矩阵估计方法。',
        
        'future-directions-title': '未来研究方向',
        'future-direction-1': '探索用于抗噪声跨模态检索的自监督学习方法。',
        'future-direction-2': '研究预训练视觉-语言模型的集成以提高鲁棒性。',
        'future-direction-3': '开发理解跨模态场景中多标签噪声的理论框架。',
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

    // Update career items
    document.querySelectorAll('[data-i18n-career]').forEach(element => {
        const [role, field] = element.getAttribute('data-i18n-career').split('.');
        if (translations[currentLang]['career-items'][role] && 
            translations[currentLang]['career-items'][role][field]) {
            element.textContent = translations[currentLang]['career-items'][role][field];
        }
    });

    // Update career tags
    document.querySelectorAll('.career-tags').forEach(tagContainer => {
        const role = tagContainer.closest('.competency-block')
            .querySelector('[data-i18n-career]')
            .getAttribute('data-i18n-career')
            .split('.')[0];
        
        const tags = translations[currentLang]['career-items'][role]['tags'];
        tagContainer.innerHTML = tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
    });

    // Update career skills
    document.querySelectorAll('.competency-block ul').forEach(skillList => {
        const role = skillList.closest('.competency-block')
            .querySelector('[data-i18n-career]')
            .getAttribute('data-i18n-career')
            .split('.')[0];
        
        const skills = translations[currentLang]['career-items'][role]['skills'];
        skillList.innerHTML = skills.map(skill => 
            `<li>${skill}</li>`
        ).join('');
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
