import {Projects, collection as backup} from "./data/projectdata.ts"

const PROJECTS_KEY = "projects";

export function saveProjects(projects: Projects): void {
    return localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function initializeProjects(): Projects {
    let projectJSON: string[] = [];
    let collection: Projects | null = null;
    
    fetch('http://localhost:3001')
    .then(response => {
      return response.text();
    })
    .then(data => {
      projectJSON = JSON.parse(data)
      for (var project of projectJSON)
      {

        collection[project.id] = {previewImage: project.previewimage, title: project.title, images: project.images.split(','), data: project.data, dataInfo: project.datainfo}
      }
    });
    
    collection = collection ? collection : backup
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