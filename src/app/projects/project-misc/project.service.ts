import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor() { }

  getProjects() {
    return new Array("ReActive", "GAM200");
  }
}
