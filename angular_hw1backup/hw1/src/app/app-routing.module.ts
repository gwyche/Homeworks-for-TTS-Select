import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Comp3Component } from './comp3/comp3.component';
import { DefaultComponentComponent } from './default-component/default-component.component';



const routes: Routes = [
  {path: 'Newcomponent', component: NewcomponentComponent},
  {path: 'Comp3', component: Comp3Component},
  {path: ' ', component: DefaultComponentComponent}
];

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
