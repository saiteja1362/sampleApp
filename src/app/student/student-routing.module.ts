import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import {WriteTestComponent} from './write-test/write-test.component'

const routes: Routes = [{ path: '', component: StudentComponent,
  'children':[
    {path: 'test',component:WriteTestComponent}
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
