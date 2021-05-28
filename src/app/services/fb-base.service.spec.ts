import { TestBed } from '@angular/core/testing';
import { Usage } from '../models/Usage';
import { FbBaseService } from './fb-base.service';

describe('FbBaseService', () => {
  let service: FbBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
