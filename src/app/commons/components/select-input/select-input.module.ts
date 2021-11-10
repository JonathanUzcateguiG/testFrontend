import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';


import { SelectInputComponent } from './select-input.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SelectInputComponent
  ],
  imports: [
		CommonModule,
    SharedModule,
  ],
	exports: [
    SelectInputComponent
  ],
})
export class  SelectInputModule { }
