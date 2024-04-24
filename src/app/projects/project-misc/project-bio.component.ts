import { Component, Input, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [],
  templateUrl: './project-bio.component.html',
  styleUrl: './project-bio.component.css',
  providers: []
})
export class ProjectBioComponent implements OnInit {
  @Input({ required: true }) projectName!: string;

  constructor() {}
  ngOnInit() {}

  get project() { return ProjectService.fetchProject(this.projectName); }
}
