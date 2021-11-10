import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';

import { DetailStudentComponent } from './detail-student.component';
import { DetailStudentRoutes } from './detail-student.routing';

import { StudentService } from 'src/app/services/student/student.service';
import { PipeModule } from 'src/app/commons/pipes/pipe.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';

@NgModule({
  declarations: [
    DetailStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipeModule,

    SelectInputModule,
    TableCharacterModule,

    RouterModule.forChild(DetailStudentRoutes)
  ],
	providers: [
    StudentService
  ],
})
export class DetailStudentModule { }
