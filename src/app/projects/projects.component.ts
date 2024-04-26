import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';

//import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'

import { ProjectService } from './project-misc/project.service';
import { ResizeHandlerService } from '../global-services/resize-handler.service';
import { ProjectBioComponent } from './project-misc/project-bio/project-bio.component';
import { ActivatedRoute } from '@angular/router';
import { ProjectBioDetailsComponent } from './project-misc/project-bio-details/project-bio-details.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgFor, NgIf, CommonModule,
    MatGridListModule,
    ProjectBioComponent, ProjectBioDetailsComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [
    ProjectService,
  ]
})
export class ProjectsComponent implements OnInit {  
  private m_GridData = new Map<string, [string, string, string][]>;
  private m_Fragment?: string;
  
  constructor(
    public resize: ResizeHandlerService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.m_GridData = this.resize.generateMappedData(
        ["2", "15em", "0.4em"],
        ["3", "20em", "0.6em"],
        ["4", "20em", "0.8em"],
        ["5", "20em", "1em"],
        ["6", "20em", "1em"]
    );

    this.route.fragment.subscribe(frag => {
      this.m_Fragment = frag ? frag : undefined;
    })
  }

  get projects() { return ProjectService.getProjects(); }
  get projectFavorites() { return ProjectService.getProjectFavorites(); }

  public get settings() { return this.m_GridData?.get(this.resize.CurrentSize); }
  public get isProjectPopup(): boolean { return this.m_Fragment != undefined; }
}
