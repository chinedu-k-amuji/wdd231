const courses = [
    { code: "WDD231", name: "Web Development", completed: true },
    { code: "CSE230", name: "Computer Science Basics", completed: false },
];

function filterCourses(type) {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = ""; 

    let filteredCourses = courses.filter(course => type === "all" || course.code.startsWith(type));
    
    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.textContent = `${course.code} - ${course.name}`;
        courseItem.style.color = course.completed ? "green" : "red";
        courseContainer.appendChild(courseItem);
    });
}