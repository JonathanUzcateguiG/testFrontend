import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { LoaderService } from 'src/app/services/loader';

import { LoaderModule } from 'src/app/commons/components/loader/loader.module';
import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';
import { TableRequestModule } from 'src/app/commons/components/table-request/table-request.module';

import { RequestStudentComponent } from './request-student.component';
import { RequestStudentRoutes } from './request-student.routing';

@NgModule({
  declarations: [
    RequestStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableRequestModule,
    LoaderModule,

    RouterModule.forChild(RequestStudentRoutes)
  ],
	providers: [
    LoaderService
  ],
})
export class RequestStudentModule { }
