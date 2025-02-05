// 竞赛介绍数据
const competitionData = {
    bluebridge: {
        title: "Blue Bridge Cup Programming Competition",
        content: "The Blue Bridge Cup, also known as the National Software and Information Technology Professionals Competition, is a nationwide competition for college students in mainland China. Hosted by the Ministry of Education of the People's Republic of China, the Ministry of Industry and Information Technology, and the National Center for Talent Exchange and the National Higher Education Students Information Consulting and Employment Guidance Center, the competition covers a wide range of computer-related subjects, including computer fundamentals, programming skills, algorithm design, digital circuits, and analog circuits. In 2021, it ranked 36th in the National College Student Competition Rankings released by the China Higher Education Association."
    },
    neccs: {
        title: "National English Competition for College Students",
        content: "The National English Competition for College Students (NECCS) is jointly organized by the International English Language Teachers Association China and the College Foreign Language Teaching Research Association. It is the largest comprehensive English competition for college students in China, providing a platform for students to showcase their English skills and play a significant role in improving students' English proficiency and competitiveness."
    },
    // 添加其他竞赛的数据...
};

// 获取模态框元素
const modal = document.getElementById('competition-modal');
const modalBody = modal.querySelector('.modal-body');
const closeBtn = modal.querySelector('.close-btn');

// 为所有竞赛介绍按钮添加点击事件
document.querySelectorAll('.details-btn[data-competition]').forEach(button => {
    button.addEventListener('click', () => {
        const competitionId = button.getAttribute('data-competition');
        const competition = competitionData[competitionId];
        
        if (competition) {
            modalBody.innerHTML = `
                <h3>${competition.title}</h3>
                <p>${competition.content}</p>
            `;
            modal.style.display = 'block';
        }
    });
});

// 关闭模态框
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 点击模态框外部关闭
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}); 