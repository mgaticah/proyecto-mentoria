import { TestBed } from '@angular/core/testing';

import { ConsultaDatosService } from './consulta-datos.service';

describe('ConsultaDatosService', () => {
  let service: ConsultaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
