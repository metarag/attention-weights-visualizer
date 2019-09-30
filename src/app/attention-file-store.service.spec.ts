import {TestBed} from '@angular/core/testing';

import {AttentionFileStore} from './attention-file-store.service';

describe('AttentionFileStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttentionFileStore = TestBed.get(AttentionFileStore);
    expect(service).toBeTruthy();
  });
});
