import { Routes } from '@angular/router';
import { RequestStudentComponent } from './request-student.component';

export const RequestStudentRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: RequestStudentComponent
			}
		]
	}
];
