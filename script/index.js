function filterCourses(category) {
    let courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        if (course.dataset.category === category || category === 'all') {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Pesquisa de cursos
document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        let title = course.querySelector('h3').textContent.toLowerCase();
        let description = course.querySelector('p').textContent.toLowerCase();
        if (title.includes(query) || description.includes(query)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});
