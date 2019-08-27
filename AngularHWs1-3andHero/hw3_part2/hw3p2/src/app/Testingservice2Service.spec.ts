import { TestBed } from '@angular/core/testing';
import { Testingservice2Service } from './testingservice2.service';

describe('Testingservice1Service', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    //Test confirms that variable testVar2 is defined
    it('confirm testVar2 is definesd', () => {
        const service: Testingservice2Service = TestBed.get(Testingservice2Service);
        expect(service.testVar2).toBeDefined();
    });

    //Test confirms that method testMethod2() returns the string "hello"
    it('test method testMethod2() returns properly', () => {
        const service: Testingservice2Service = TestBed.get(Testingservice2Service);
        expect(service.testMethod2()).toEqual('hello');
    });



});