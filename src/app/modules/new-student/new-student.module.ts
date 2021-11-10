import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';

import { NewStudentComponent } from './new-student.component';
import { NewStudentRoutes } from './new-student.routing';

import { StudentService } from 'src/app/services/student/student.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NewStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,

    RouterModule.forChild(NewStudentRoutes)
  ],
	providers: [
  ],
})
export class NewStudentModule { }
