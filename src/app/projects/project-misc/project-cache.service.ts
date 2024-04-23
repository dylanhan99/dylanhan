import { Injectable } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectCacheService {
  project!: Project;

  constructor(private projectService: ProjectService) { }
  
  fetchProject(name: string) {
    if (!this.project) {
      // get the actual thing from projectService
      // Filler for now
      this.project = new Project(name, "some markdown stuff lol");
    }
    return this.project;
  }
}
