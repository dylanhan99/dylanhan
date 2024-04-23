import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { ProjectService } from './project-misc/project.service';
import { ProjectBioComponent } from './project-misc/project-bio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgFor,
    ProjectBioComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [
    ProjectService,
  ]
})
export class ProjectsComponent implements OnInit {
  projects!: string[];
  
  constructor(private projectService: ProjectService = new ProjectService) {}
  
  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
}
