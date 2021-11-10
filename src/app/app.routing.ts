import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'student',
		loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule)
	},
	{
		path: 'new-student',
		loadChildren: () => import('./modules/new-student/new-student.module').then(m => m.NewStudentModule)
	},
	{
		path: 'detail-student',
		loadChildren: () => import('./modules/detail-student/detail-student.module').then(m => m.DetailStudentModule)
	},
	{
		path: 'request-student',
		loadChildren: () => import('./modules/request-student/request-student.module').then(m => m.RequestStudentModule)
	},
	{
		path: 'staff',
		loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'dashboard'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
