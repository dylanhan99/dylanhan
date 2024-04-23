import { TestBed } from '@angular/core/testing';

import { ProjectCacheService } from './project-cache.service';

describe('ProjectCacheService', () => {
  let service: ProjectCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
