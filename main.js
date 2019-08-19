const projectElement = document.getElementById("projects");

function render() {
    for (let project of projects) {
        let listItemElement = document.createElement("li");
        let anchorElement = document.createElement("a");
        anchorElement.href = project;
        anchorElement.textContent = project;
        listItemElement.appendChild(anchorElement);
        projectElement.appendChild(listItemElement);
    }
}

render();
