import { Component, Input, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [],
  templateUrl: './project-bio.component.html',
  styleUrl: './project-bio.component.css',
  providers: [ProjectService]
})
export class ProjectBioComponent implements OnInit {
  @Input({ required: true }) projectName!: string;

  constructor(private projectService: ProjectService){}

  ngOnInit() { this.projectService.fetchProject(this.projectName); }

  get project() { return this.projectService.project; }
}
