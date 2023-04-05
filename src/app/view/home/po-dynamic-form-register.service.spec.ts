import { TestBed } from '@angular/core/testing';

import { PoDynamicFormRegisterService } from './po-dynamic-form-register.service';

describe('PoDynamicFormRegisterService', () => {
  let service: PoDynamicFormRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoDynamicFormRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
