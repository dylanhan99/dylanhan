import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-bio-details',
  standalone: true,
  imports: [],
  templateUrl: './project-bio-details.component.html',
  styleUrl: './project-bio-details.component.css'
})
export class ProjectBioDetailsComponent {
  @Input({ required: true }) projectName!: string;
  imgPath!: string;

  constructor (
    private router: Router
  ) {}
  ngOnInit() {
    this.imgPath = "./assets/projects/images/" + this.projectName + ".jpg";
  }

  closeDetails() {
    this.router.navigate(['projects'])
  }
}
