function loadProjects(projectList) {
    const projsDiv = document.getElementById("projects");
    for (const projectObj of projectList) {

        let div = document.createElement("div");
        div.className = "project";

        let h = document.createElement("h3");
        h.className = "proj-title";
        h.innerHTML = projectObj.title;

        let links = document.createElement("div");
        let link = document.createElement("a");
        let repo = document.createElement("a");

        link.href = projectObj.link;
        link.innerHTML = "link";
        repo.href = projectObj.repo;
        repo.innerHTML = "repo";
        links.appendChild(link);
        links.appendChild(repo);

        let p = document.createElement("p");
        p.innerHTML = projectObj.description;
        p.className = "proj-description";

        let img = document.createElement("img");
        if (projectObj.img) {
            img.src = projectObj.img;
        } else {
            img.src = "img/" + projectObj.title + ".svg"
        }
        img.alt = projectObj.title

        div.appendChild(h);
        div.appendChild(links);
        div.appendChild(p);
        div.appendChild(img)

        projsDiv.appendChild(div);
    }
}

loadProjects(PROJECT_DATA) //TODO: This can't be a good way to create this