const projectElement = document.getElementById("projects");

const atTop = {
  'slides': true, 'quizzes': true
};

function render() {
  for (const folder of Object.keys(atTop))
    projectElement.appendChild(createProjectLi(folder));

  const filteredProjects = projects.filter(proj => !atTop.hasOwnProperty(proj));
  for (const project of filteredProjects)
    projectElement.appendChild(createProjectLi(project));
}

function createProjectLi(project) {
  let listItemElement = document.createElement("li");
  let anchorElement = document.createElement("a");
  anchorElement.href = project;
  anchorElement.textContent = project;
  listItemElement.appendChild(anchorElement);
  return listItemElement;
}

render();
