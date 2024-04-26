import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card'

import { ProjectService } from '../project.service';
import { ResizeHandlerService } from '../../../global-services/resize-handler.service';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [
    RouterLink,
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
    public resize: ResizeHandlerService,
    private router: Router
  ) {}
  ngOnInit() {
    this.imgPath = "./assets/projects/images/" + this.project?.getFileName() + ".jpg";
  }

  public openProjDetails(name: string | undefined) {
    if (!name) {
      this.router.navigate(['projects']);
      return;
    }

    this.router.navigate(['projects'], {fragment: name});
  }

  get project() { return ProjectService.fetchProject(this.projectName); }
  getImagePath() { return this.imgPath; }
}
