import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { StaffService } from 'src/app/services/staff/staff.service';
import { LoaderService } from 'src/app/services/loader';

import { SelectInputModule } from 'src/app/commons/components/select-input/select-input.module';
import { TableCharacterModule } from 'src/app/commons/components/table-character/table-character.module';
import { LoaderModule } from 'src/app/commons/components/loader/loader.module';


import { StaffComponent } from './staff.component';
import { StaffRoutes } from './staff.routing';



@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    SelectInputModule,
    TableCharacterModule,
    LoaderModule,

    RouterModule.forChild(StaffRoutes)
  ],
	providers: [
    StaffService,
    LoaderService
  ],
})
export class StaffModule { }
