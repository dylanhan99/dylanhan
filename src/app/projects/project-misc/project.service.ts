import { Injectable } from '@angular/core';
import { Project } from './project';
import jprojects from '../../../assets/projects/projects.json'
import jprojectsfav from '../../../assets/projects/projects-favorites.json'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //private static projects: {fileName: string, projectName: string, summary: string}[];
  private static projects: Map<string, Project>;
  private static projectFavs: string[];
  
  constructor() {}
  
  public static getProjects(): string[] {
    if (ProjectService.projects)
      return Array.from(ProjectService.projects.keys());

    ProjectService.projects = new Map<string, Project>;
    var tempProjs: {fileName: string, projectName: string, summary: string}[] = jprojects;
    tempProjs.forEach(function(value) {
      ProjectService.projects.set(
        value.fileName, 
        new Project(value.fileName, value.projectName, value.summary));
    });

    return ProjectService.getProjects();
  }

  public static getProjectFavorites() {
    if (!ProjectService.projectFavs){
      ProjectService.projectFavs = jprojectsfav;
    }
    
    return ProjectService.projectFavs;
  }

  public static fetchProject(name: string) {
    if (!ProjectService.projects || !this.projects.has(name))
      return null;
    return this.projects.get(name);
  }
}
