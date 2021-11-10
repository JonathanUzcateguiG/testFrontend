import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from '../../pipes/pipe.module';

import { TableRequestComponent } from './table-request.component';

@NgModule({
	declarations: [
		TableRequestComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		PipeModule,
	],
	exports: [
		TableRequestComponent
	]
})
export class TableRequestModule { }
