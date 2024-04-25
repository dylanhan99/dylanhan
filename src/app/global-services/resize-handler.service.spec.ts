import { TestBed } from '@angular/core/testing';

import { ResizeHandlerService } from './resize-handler.service';

describe('ResizeHandlerService', () => {
  let service: ResizeHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResizeHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
