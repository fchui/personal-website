import {Projects, collection as backup} from "./data/projectdata.ts"

const PROJECTS_KEY = "projects";

export function saveProjects(projects: Projects): void {
    return localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

async function initializeProjects(): Promise<Projects> {
    let collection: Projects = {};
    let response: Response;
    let projects: any;

    console.log("fetch")
    try {
      response = await fetch("http://localhost:3001")
    } catch (e) {
      console.log('Unable to fetch from middleman, using backup')
      return backup
    }

    projects = await response.json()

    for (var project of projects)
    {
      collection[project.id] = {previewImage: project.previewimage, title: project.title, images: project.images.split(','), data: project.data, dataInfo: project.datainfo}
    }

    saveProjects(collection)
    return collection
}

export async function getProjects(): Promise<Projects> {
    let projects: Projects | null = null;
    
    try {
        // @ts-expect-error OK to throw here since we're catching
        projects = JSON.parse(localStorage.getItem(TODOS_KEY));
      } catch (e) {
      }
      
      if (!projects) {  
        projects = await initializeProjects();
      }
    return projects;
}