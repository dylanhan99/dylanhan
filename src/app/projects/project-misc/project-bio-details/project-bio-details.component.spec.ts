import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBioDetailsComponent } from './project-bio-details.component';

describe('ProjectBioDetailsComponent', () => {
  let component: ProjectBioDetailsComponent;
  let fixture: ComponentFixture<ProjectBioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBioDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
