export interface Projects {
    [key: string]: {data: string};
}

const PROJECTS_KEY = "projects";

export function saveProjects(projects: Projects): void {
    return localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function initializeProjects(): Projects {
    var collection: Projects = {};
    collection["1"] = {data : " \
    <h2>Attractive website using the React framework</h2> \
    <p>One of the simplest ways to present anything is to showcase it. Which is why I believe a setting up a personal website is the best way to showcase anything I make in my personal developer journey.</p> \
    <h3>Modern Frameworks</h3> \
    <p>Through learning modern frameworks, the potential to create higher quality products increases. That\'s why I am always open to learning new ideas to increase the quality of my code. \
    As well, utilizing more technical methods over drag-and-drop websites grants further freedom of control over the site. This website is also built in conjunction with the Mantine library, an open-source library free and easy to use to create attractive websites.</p> \
    <h3>React Routing</h3> \
    <p>Another feature of this site is the React Router library. Older websites would need to reload the website every time a link is pressed. This means that HTML, CSS and Javascript will all need to be evaluated before a website is finished loading. \
    Through using React Router, only certain parts of the website needs to be rendered when a link is switched within a site.</p> \
    "}
    saveProjects(collection)
    return collection
}

export function getProjects(): Projects {
    let projects: Projects | null = null;
    try {
        // @ts-expect-error OK to throw here since we're catching
        projects = JSON.parse(localStorage.getItem(TODOS_KEY));
      } catch (e) {}
      if (!projects) {
        projects = initializeProjects();
      }
    return projects;
}