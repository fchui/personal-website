import {Projects, collection} from "./data/projectdata.ts"

const PROJECTS_KEY = "projects";

export function saveProjects(projects: Projects): void {
    return localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function initializeProjects(): Projects {
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