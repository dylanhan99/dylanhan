import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBioComponent } from './project-bio.component';

describe('ProjectBioComponent', () => {
  let component: ProjectBioComponent;
  let fixture: ComponentFixture<ProjectBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
