import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Newcomponent2Component } from './newcomponent2/newcomponent2.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  { path: 'c1', component: NewcomponentComponent },
  { path: 'c2', component: Newcomponent2Component },
  { path: 'default', component: DefaultComponent },
  { path: '', component: DefaultComponent },
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
