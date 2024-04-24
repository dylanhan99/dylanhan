import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

import { Project } from './project-misc/project';
import { ProjectService } from './project-misc/project.service';
import { ProjectBioComponent } from './project-misc/project-bio.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgFor, CommonModule,
    ProjectBioComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [
    ProjectService,
  ]
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  get projects() { return ProjectService.getProjects(); }
  get projectFavorites() { return ProjectService.getProjectFavorites(); }
}
