import { Routes } from '@angular/router';
import { NewStudentComponent } from './new-student.component';

export const NewStudentRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: NewStudentComponent
			}
		]
	}
];
