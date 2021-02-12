import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { HeadderComponent } from './shared/headder/headder.component';
import { FotterComponent } from './shared/fotter/fotter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModuleModule} from './shared/material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectiveDirective } from './directive/directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeadderComponent,
    FotterComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
