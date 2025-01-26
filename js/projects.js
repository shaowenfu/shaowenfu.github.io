// Project details data
const projectDetails = {
    'night-market': {
        title: 'Digital Night Market Economy Platform',
        date: '2022-2023',
        overview: 'A comprehensive IoT-based platform integrating night market management and digital solutions.',
        background: 'Night markets are integral to Chinese culture, contributing to regional economics and tourism. This project addresses challenges in food safety, convenience, and management of street vending activities.',
        features: [
            'Real-time monitoring of vendor operations',
            'AI-powered hygiene condition tracking',
            'Integrated payment and ordering system',
            'Tourist navigation and recommendation system'
        ],
        technologies: [
            'Raspberry Pi & ESP32 for IoT devices',
            'Huawei Cloud for data storage and processing',
            'WeChat Mini Program for user interface',
            'Python for backend development'
        ],
        impact: 'Enhanced operational efficiency and food safety standards in night markets while improving customer experience and vendor management.'
    },
    'sundial': {
        title: 'Sundial Field Optimization Model',
        date: '2023',
        overview: 'Mathematical modeling project focusing on optimizing sundial field performance and layout.',
        background: 'The project addresses the challenge of maximizing energy collection efficiency in solar power generation through precise sundial positioning and arrangement.',
        features: [
            'Universal physical model for single mirror optical geometry',
            'Shadow and truncation efficiency calculations',
            'Performance parameter analysis for entire fields',
            'Layout optimization algorithms'
        ],
        technologies: [
            'Mathematical modeling',
            'Monte Carlo simulation',
            'Ray tracing algorithms',
            'Optimization techniques'
        ],
        impact: 'Contributed to the advancement of solar energy collection efficiency through innovative mathematical modeling and optimization approaches.'
    },
    'ionian': {
        title: 'Ionian Sea Search & Rescue Model',
        date: '2024',
        overview: 'Development of search and rescue models for submersible operations in the Ionian Sea.',
        background: 'Created in response to the growing need for efficient underwater search and rescue operations, incorporating complex environmental factors.',
        features: [
            'Environmental factor analysis',
            'Search pattern optimization',
            'Resource allocation modeling',
            'Risk assessment framework'
        ],
        technologies: [
            'Mathematical modeling',
            'Optimization algorithms',
            'Environmental data analysis',
            'Simulation software'
        ],
        impact: 'Enhanced the efficiency and effectiveness of underwater search and rescue operations through systematic modeling and optimization.'
    },
    'port': {
        title: 'Smart Port Scheduling System',
        date: '2024',
        overview: 'Intelligent scheduling system for optimizing port operations and resource management.',
        background: 'Developed to address the increasing complexity of port operations and the need for efficient resource allocation.',
        features: [
            'Real-time vessel tracking',
            'Resource allocation optimization',
            'Predictive maintenance scheduling',
            'Performance analytics dashboard'
        ],
        technologies: [
            'Java Spring Boot for backend',
            'Vue.js for frontend interface',
            'PostgreSQL for data storage',
            'Docker for containerization'
        ],
        impact: 'Significantly improved port operational efficiency and resource utilization through intelligent scheduling and management.'
    },
    'ai-assistant': {
        title: 'AI Text-Image Assistant',
        date: '2024',
        overview: 'AI-powered application for text-image conversion and processing.',
        background: 'Created to enhance content creation efficiency by leveraging advanced AI technologies for text and image processing.',
        features: [
            'Text-to-image generation',
            'Image analysis and description',
            'Content enhancement suggestions',
            'Multi-modal content processing'
        ],
        technologies: [
            'PyTorch for deep learning models',
            'Transformers for NLP tasks',
            'FastAPI for backend services',
            'React for frontend interface'
        ],
        impact: 'Streamlined content creation processes and enhanced creative capabilities through AI-powered tools and features.'
    }
};

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close-btn');

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Handle "View Details" button clicks
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.project;
            const project = projectDetails[projectId];
            
            if (project) {
                const content = `
                    <h3>${project.title}</h3>
                    <p><strong>Period:</strong> ${project.date}</p>
                    
                    <h4>Overview</h4>
                    <p>${project.overview}</p>
                    
                    <h4>Background</h4>
                    <p>${project.background}</p>
                    
                    <h4>Key Features</h4>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        
                    <h4>Technologies Used</h4>
                    ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    
                    <h4>Impact</h4>
                    <p>${project.impact}</p>
                `;
                
                modalBody.innerHTML = content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
});
