import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component'

const routes: Routes = [
  { path: '', component: AdminComponent ,
  'children':[
    {path: 'register',component: RegisterComponent},
    {path: 'users', component: UserListComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
