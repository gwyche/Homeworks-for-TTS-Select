import { TestBed } from '@angular/core/testing';

import { Testingservice1Service } from './testingservice1.service';

describe('Testingservice1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Testingservice1Service = TestBed.get(Testingservice1Service);
    expect(service).toBeTruthy();
  });

  
  //This test confirms that method testOutput() returns the number 4
  it('tests the testOutput method', () => {
    const service: Testingservice1Service = TestBed.get(Testingservice1Service);
    expect(service.testOutput()).toBe(4);
  }
  );

  //This test confirms that the value of an attribute in Testingservice1Service has a value of 42;
  it('tests that variable testVar was assigned the correct numerical value', () => {
    const service: Testingservice1Service = TestBed.get(Testingservice1Service);
    expect(service.testVar).toEqual(42);
  })


});
