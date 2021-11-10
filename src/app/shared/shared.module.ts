/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout'

/**
 * Module where the modules needed to be imported by other modules are exported.
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,

		MatSidenavModule,
		MatListModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatCardModule,
		MatDatepickerModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		ScrollingModule,
		MatIconModule,
		FlexLayoutModule,
	],
	declarations: [],
	providers: [
		/* my own custom services  */
	],
	exports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

		MatSidenavModule,
		MatListModule,
		MatSelectModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatFormFieldModule,
		MatCardModule,
		MatDatepickerModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		ScrollingModule,
		MatIconModule,
		FlexLayoutModule,
	]
})
export class SharedModule {}
