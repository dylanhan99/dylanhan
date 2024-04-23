import { Injectable } from '@angular/core';
import jprojects from '../../../assets/projects/projects.json'
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private static projects: {fileName: string, projectName: string, summary: string}[];
  
  constructor() {}
  
  public static getProjects() {
    if (!ProjectService.projects){
      ProjectService.projects = jprojects;
    }
    
    var ret: Project[] = [];
    ProjectService.projects.forEach(function(value) {
      ret.push(new Project(value.fileName, value.projectName, value.summary));
    });
    return ret;
  }
}
