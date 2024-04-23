import { Component, Input, OnInit } from '@angular/core';
import { ProjectCacheService } from './project-cache.service';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [],
  templateUrl: './project-bio.component.html',
  styleUrl: './project-bio.component.css',
  providers: [ProjectCacheService]
})
export class ProjectBioComponent implements OnInit {
  @Input({ required: true })  projectName!: string;

  constructor(private projectCache: ProjectCacheService){}

  ngOnInit() { this.projectCache.fetchProject(this.projectName); }

  get project() { return this.projectCache.project; }
}
