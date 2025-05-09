// Dynamic footer year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("last-modified").textContent = document.lastModified;

// JavaScript for responsive navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development...',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students write programs with functions to solve problems in many disciplines...',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects...',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn to create dynamic websites that use JavaScript...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience, accessibility, performance optimization, and API usage...',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

// Render courses
const container = document.getElementById('courseContainer');

courses.forEach(course => {
    const section = document.createElement('section');
    section.classList.add('course');

    if (course.completed) {
        section.classList.add('completed');
    }

    section.innerHTML = `
        <h3>${course.subject} ${course.number} - ${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        <p>${course.description}</p>
    `;

    container.appendChild(section);
});

const showAllBtn = document.getElementById('show-all');
const showWddBtn = document.getElementById('show-wdd');
const showCseBtn = document.getElementById('show-cse');

showAllBtn.addEventListener('click', () => filterCourses('All'));
showWddBtn.addEventListener('click', () => filterCourses('WDD'));
showCseBtn.addEventListener('click', () => filterCourses('CSE'));

function filterCourses(category) {
    container.innerHTML = ''; // Clear current courses

    const filteredCourses = category === 'All'
        ? courses
        : courses.filter(course => course.subject === category);

    filteredCourses.forEach(course => {
        const section = document.createElement('section');
        section.classList.add('course');

        if (course.completed) {
            section.classList.add('completed');
        }

        section.innerHTML = `
            <h3>${course.subject} ${course.number} - ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
            <p>${course.description}</p>
        `;

        container.appendChild(section);
    });

    updateTotalCredits(filteredCourses);
}

function updateTotalCredits(coursesToDisplay) {
    const totalCredits = coursesToDisplay.reduce((total, course) => total + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}
