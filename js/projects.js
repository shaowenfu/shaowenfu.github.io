// Project details modal functionality
const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');
const modalBody = document.querySelector('.modal-body');

// Close modal when clicking the close button or outside the modal
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Function to load README content
async function loadReadme(project) {
    // 1. 根据当前语言选择README文件
    const lang = currentLang === 'en' ? 'README.md' : 'README_zh.md';
    // 添加基础路径配置
    const basePath = './'; // 或者使用绝对路径 '/your-site-root/'
    let readmePath;
    
    // 2. 根据项目确定README路径
    switch(project) {
        case 'vista':
            readmePath = `my_projects_collect/VISTA-/${lang}`;
            break;
        case 'car-plate':
            readmePath = `my_projects_collect/car_plate_detection-/${lang}`;
            break;
        case 'campus-trading':
            readmePath = `my_projects_collect/Campus_used_product_trading_platform-/${lang}`;
            break;
        case 'math-model-2024':
            readmePath = `my_projects_collect/2024CUMC-First-Prize-Provincial-Level-SolutionA-/${lang}`;
            break;
        case 'math-model-2023':
            readmePath = `my_projects_collect/2023CUMC-Third-Prize-Provincial-Level-SolutionB-/${lang}`;
            break;
        case 'digital-night-market':
            readmePath = `my_projects_collect/Digital-Night-Market-Platform-/${lang}`;
            break;
        case 'smart-port':
            readmePath = `my_projects_collect/Huawei-Developer-Competition-2024-APAC-/${lang}`;
            break;
        case 'ai-assistant':
            readmePath = `my_projects_collect/I2T-magic-coworker-/${lang}`;
            break;
        default:
            return 'Project details not found.';
    }

    // 3. 获取README内容
    try {
        const fullPath = basePath + readmePath;
        console.log('Loading README from:', fullPath);
        const response = await fetch(fullPath);
        if (!response.ok) throw new Error('Failed to load README');
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error loading README:', error);
        return 'Failed to load project details.';
    }
}

// Handle project detail button clicks
document.addEventListener('DOMContentLoaded', () => {
    // ... 其他初始化代码 ...

    // Handle project detail button clicks
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', async () => {
            console.log('Button clicked!');
            const project = button.getAttribute('data-project');
            console.log('Project:', project);
            
            modalBody.innerHTML = '<div class="loading">Loading...</div>';
            modal.style.display = "block";
            
            try {
                const content = await loadReadme(project);
                // 使用 marked 将 Markdown 转换为 HTML
                const htmlContent = marked.parse(content);
                // 添加样式容器
                modalBody.innerHTML = `
                    <div class="markdown-content">
                        ${htmlContent}
                    </div>
                `;
            } catch (error) {
                console.error('Error:', error);
                modalBody.innerHTML = 'Failed to load project details.';
            }
        });
    });
});

// Update project content based on current language
function updateProjectContent() {
    document.querySelectorAll('[data-i18n-project]').forEach(element => {
        const [project, field] = element.getAttribute('data-i18n-project').split('.');
        if (translations[currentLang]['project-items'][project] && 
            translations[currentLang]['project-items'][project][field]) {
            element.textContent = translations[currentLang]['project-items'][project][field];
        }
    });
}

// Add project content update to the language switch function
document.addEventListener('DOMContentLoaded', () => {
    updateProjectContent();
    // Update content when language changes
    const originalUpdateContent = window.updateContent;
    window.updateContent = function() {
        originalUpdateContent();
        updateProjectContent();
    };
});
