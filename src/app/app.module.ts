import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Comp1Component } from './comp1/comp1.component';
import { Example1Directive } from './example1.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Comp1Component,
    Example1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
