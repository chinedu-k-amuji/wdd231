// Course data
const courses = [
    { subject: "CSE", number: 110, title: "Introduction to Programming", credits: 2, completed: true },
    { subject: "WDD", number: 130, title: "Web Fundamentals", credits: 2, completed: true }, 
    { subject: "CSE", number: 111, title: "Programming with Functions", credits: 2, completed: true },
    { subject: "CSE", number: 210, title: "Programming with Classes", credits: 2, completed: true },
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { subject: "WDD", number: 231, title: "Frontend Web Development I", credits: 2, completed: false }
];

// Function to render courses dynamically
function renderCourses(filteredCourses) {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = ""; 

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <p class="${course.completed ? 'completed' : 'not-completed'}">
                ${course.completed ? "✔ Completed" : "✖ Not Completed"}
            </p>
        `;

        courseContainer.appendChild(courseCard);
    });

    // Update total credits dynamically
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("totalCredits").textContent = `Total Credits: ${totalCredits}`;
}

// Filtering function
function filterCourses(type) {
    let filteredCourses = type === "all" 
        ? courses 
        : courses.filter(course => course.subject === type);
    
    renderCourses(filteredCourses);
}

// Event listeners for filter buttons
document.getElementById("btnAll").addEventListener("click", () => filterCourses("all"));
document.getElementById("btnWDD").addEventListener("click", () => filterCourses("WDD"));
document.getElementById("btnCSE").addEventListener("click", () => filterCourses("CSE"));

// Initial rendering of all courses
renderCourses(courses);