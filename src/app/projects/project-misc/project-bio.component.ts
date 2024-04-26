import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card'

import { ProjectService } from './project.service';
import { ResizeHandlerService } from '../../global-services/resize-handler.service';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [
    NgIf,
    MatCardModule,
  ],
  templateUrl: './project-bio.component.html',
  styleUrl: './project-bio.component.css',
  providers: []
})
export class ProjectBioComponent implements OnInit {
  @Input({ required: true }) projectName!: string;
  private imgPath!: string;

  constructor(
    public resize: ResizeHandlerService
  ) {}
  ngOnInit() {
    this.imgPath = "./assets/projects/images/" + this.project?.getFileName() + ".jpg";
  }

  get project() { return ProjectService.fetchProject(this.projectName); }
  getImagePath() { return this.imgPath; }
}
