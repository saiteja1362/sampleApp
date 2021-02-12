import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import {MaterialModuleModule} from '../shared/material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, RegisterComponent, UserListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
