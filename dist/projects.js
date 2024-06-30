const projects = [
    {
        title: 'Calculator',
        languages: 'Python using third-party libraries',
        description: 'Web calculator that uses only basic arithmetic operations. \
            The project shows how well the specialist knows how to use algorithms.',
        image: 'calculator_project.jpg'
    },
    {
        title: 'Polynomial regression for graphs and calculations',
        languages: 'C++ using third-party libraries',
        description: 'A program that calculates the polynomial regression for any number \
        of points and shows them on a graph.',
        image: 'polynomial_project.png'
    },
    {
        title: '3-d model of the globe',
        languages: 'Python using third-party libraries',
        description: 'A project that presents a 3-d model of the globe with an ellipse for \
        the minimum radius of the satellite. The code takes into account the gravity and rotation of the earth.',
        image: 'orbit_project.jpg'
    }
];
let currentProject = 0;
document.getElementById('prev').addEventListener('click', () => {
    currentProject = (currentProject > 0) ? currentProject - 1 : projects.length - 1;
    displayProject();
});
document.getElementById('next').addEventListener('click', () => {
    currentProject = (currentProject < projects.length - 1) ? currentProject + 1 : 0;
    displayProject();
});
function showProject(index) {
    currentProject = index;
    displayProject();
}
function displayProject() {
    const project = projects[currentProject];
    document.getElementById('project-title').innerText = project.title;
    document.getElementById('project-languages').innerText = project.languages;
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('project-image').setAttribute('src', project.image);
}
window.onload = displayProject;
export {};
