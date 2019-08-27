import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Testingservice2Service {

  testVar2: string = "hello";

  testMethod2(){
    return 'hello';
  }

  constructor() { }
}
