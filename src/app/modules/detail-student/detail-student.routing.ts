import { Routes } from '@angular/router';
import { DetailStudentComponent } from './detail-student.component';

export const DetailStudentRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: DetailStudentComponent
			}
		]
	}
];
