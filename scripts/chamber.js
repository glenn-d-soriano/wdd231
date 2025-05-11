// Dynamic footer year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// Navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    console.log('Hamburger clicked!'); // Check if click event is fired
    nav.classList.toggle('show');
});


// Course data
const courses = [
    { subject: 'CSE', number: 110, title: 'Intro to Programming', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS'], completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['Python'], completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['C#'], completed: true },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Dev I', credits: 2, certificate: 'Web and Computer Programming', description: '...', technology: ['HTML', 'CSS', 'JavaScript'], completed: false }
];

// Render logic for courses with checkmark next to completed ones
function renderCourses(list) {
    const container = document.getElementById('courseContainer');
    container.innerHTML = ''; // Clear any existing content

    list.forEach(course => {
        const button = document.createElement('button');
        button.textContent = `${course.subject} ${course.number} - ${course.title}`;
        button.className = 'course-btn';

        // Add a checkmark if the course is completed
        if (course.completed) {
            button.innerHTML += ' &#x2714;'; // Unicode checkmark for completed courses
            button.classList.add('completed'); // Optionally style completed courses differently
        }

        container.appendChild(button);
    });

    updateTotalCredits(list); // Update total credits after rendering
}

// Filter buttons
const showAllBtn = document.getElementById('show-all');
const showWddBtn = document.getElementById('show-wdd');
const showCseBtn = document.getElementById('show-cse');

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
