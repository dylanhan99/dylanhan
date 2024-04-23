import { Component, Input, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-bio',
  standalone: true,
  imports: [],
  templateUrl: './project-bio.component.html',
  styleUrl: './project-bio.component.css',
  providers: []
})
export class ProjectBioComponent implements OnInit {
  @Input({ required: true }) src!: Project;

  constructor() {}
  ngOnInit() {}

  get project() { return this.src; }
}
