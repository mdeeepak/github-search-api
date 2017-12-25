import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { gitHubComponent }  from './components/github.component';

import {gitHubSearch} from './services/github.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, gitHubComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
