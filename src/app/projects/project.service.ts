import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project!: Project;

  constructor() { }

  getProjects() {
    return new Array("ReActive", "GAM200");
  }

  fetchProject(name: string) {
    if (!this.project) {
      this.project = new Project(name, "some markdown stuff lol");
    }
    return this.project;
  }
}
