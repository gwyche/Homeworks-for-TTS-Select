import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { AppRoutingModule } from './app-routing.module';
import { Comp3Component } from './comp3/comp3.component';
import { DefaultComponentComponent } from './default-component/default-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    Comp3Component,
    DefaultComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
