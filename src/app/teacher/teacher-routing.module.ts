import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import {CreateTestComponent} from './create-test/create-test.component'

const routes: Routes = [{ path: '', component: TeacherComponent,
  'children':[
    {path:'create-test',component:CreateTestComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
