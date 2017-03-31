import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CompModule } from './component/component.module';

import { AppComponent }  from './app.component';

import { routes } from './app.routes';

@NgModule({
  imports:      [ BrowserModule, CompModule, RouterModule.forRoot(routes)  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
