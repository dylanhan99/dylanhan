import { Injectable } from '@angular/core';
import jprojects from '../../../assets/projects/projects.json'
import jprojectsfav from '../../../assets/projects/projects-favorites.json'
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private static projects: {fileName: string, projectName: string, summary: string}[];
  private static projectFavs: string[];
  
  constructor() {}
  
  public static getProjects() {
    if (!ProjectService.projects){
      ProjectService.projects = jprojects;
    }

    var ret: Map<string, Project> = new Map<string, Project>();
    ProjectService.projects.forEach(function(value) {
      ret.set(value.fileName, new Project(value.fileName, value.projectName, value.summary));
    });
    return ret;
  }

  public static getProjectFavorites() {
    if (!ProjectService.projectFavs){
      ProjectService.projectFavs = jprojectsfav;
    }
    
    return ProjectService.projectFavs;
  }
}
