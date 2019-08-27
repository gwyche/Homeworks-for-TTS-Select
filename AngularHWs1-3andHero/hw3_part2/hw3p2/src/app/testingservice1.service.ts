import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Testingservice1Service {

  testVar: number = 42;

  testOutput(): number{
      return 4;
  }

  constructor() { }
}
