import { TestBed } from '@angular/core/testing';

import { Datablogs } from './datablogs';

describe('Datablogs', () => {
  let service: Datablogs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datablogs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
