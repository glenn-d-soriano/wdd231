// Dynamic footer year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Course data
const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: false },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS'], completed: false },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: false },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['C#'], completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false },
    { subject: 'WDD', number: 231, title: 'Frontend Web Dev I', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

// DOM elements
const container = document.getElementById('courseContainer');
const showAllBtn = document.getElementById('show-all');
const showWddBtn = document.getElementById('show-wdd');
const showCseBtn = document.getElementById('show-cse');

// Render logic
function renderCourses(list) {
    container.innerHTML = '';

    list.forEach(course => {
        const button = document.createElement('button');
        button.textContent = `${course.subject} ${course.number}`;
        button.className = 'course-btn';
        if (course.completed) {
            button.classList.add('completed');
        }
        container.appendChild(button);
    });

    updateTotalCredits(list);
}

// Filter buttons
showAllBtn.addEventListener('click', () => renderCourses(courses));
showWddBtn.addEventListener('click', () => renderCourses(courses.filter(c => c.subject === 'WDD')));
showCseBtn.addEventListener('click', () => renderCourses(courses.filter(c => c.subject === 'CSE')));

// Credits calculation
function updateTotalCredits(coursesToDisplay) {
    const totalCredits = coursesToDisplay.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Initial render
renderCourses(courses);
