function loadProjects(projectList) {
    const projsDiv = document.getElementById("projects");
    for (const projectObj of projectList) {

        let div = document.createElement("div");
        div.className = "l-project";

        let h = document.createElement("h2");
        h.className = "proj__title";
        h.innerHTML = projectObj.title;

        let links = document.createElement("div");
        let link = document.createElement("a");
        let repo = document.createElement("a");

        link.href = projectObj.link;
        link.innerHTML = `<img src="img/blog.png" 
            alt="link to Project Write Up" 
            height="32">`;
        link.className = "icon";
        repo.href = projectObj.repo;
        repo.className = "icon";
        repo.innerHTML = `<img src="img/GitHub-Mark-Light-32px.png" 
            alt="link to project Github" 
            height="32">`;
        links.appendChild(link);
        links.appendChild(repo);
        links.className = "proj__links l-icons";

        let p = document.createElement("p");
        p.innerHTML = projectObj.description;
        p.className = "proj__description";

        let img = document.createElement("img");
        if (projectObj.img) {
            img.src = projectObj.img;
        } else {
            img.src = "img/" + projectObj.title + ".svg"
        }
        img.alt = projectObj.title;
        img.className = "proj__image";
        img.height = "200";
        img.width = "200";

        let tags = document.createElement("div");
        tags.className = "proj__tags";
        for (const item of projectObj.tags) {
            let tag = document.createElement("a");
            tag.className = "proj__tag";
            tag.innerHTML = item;
            tags.append(tag);
        }

        let card = document.createElement("div");
        card.className = "proj__card";
        card.appendChild(img);
        card.appendChild(h);


        div.appendChild(links);
        div.appendChild(p);
        div.appendChild(tags);
        div.appendChild(card);

        projsDiv.appendChild(div);
    }
}

loadProjects(PROJECT_DATA) //TODO: This can't be a good way to create this