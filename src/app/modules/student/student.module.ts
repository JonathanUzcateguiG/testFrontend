import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { StudentService } from 'src/app/services/student/student.service';
import { LoaderService } from 'src/app/services/loader';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';

import { StudentComponent } from './student.component';
import { StudentRoutes } from './student.routing';

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableCharacterModule,
    LoaderModule,

    RouterModule.forChild(StudentRoutes)
  ],
	providers: [
    LoaderService
  ],
})
export class StudentModule { }
