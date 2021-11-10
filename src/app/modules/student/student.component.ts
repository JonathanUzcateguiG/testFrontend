import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student/student.service';
import { LoaderService } from 'src/app/services/loader';

import { Student } from 'src/app/commons/models/student/student';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';


@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
	styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
	options: Array<SelectOption> = [];
	students: Array<Student> = [];

	/**
	 * @constructs StudentComponent
	 * @param {StudentService} studentService
	 * @param {LoaderService} loaderService
	 */
	constructor(
		public studentService: StudentService,
		public loaderService: LoaderService
	) {
	}

	ngOnInit(): void {
		this.getStudents()
	}

	/**
	 * @method getStudents
	 * @returns {void}
	 */
	getStudents(): void {
		this.loaderService.loading();
		this.studentService.get().subscribe(
			(response: any) => {
				this.loaderService.loaded();
				console.log(response);
				this.students = response;
			},
			(error: any) => {
				this.loaderService.loaded();
				console.log(error);
			}
		);
	}

	/**
	 * @method isLoading
	 * @returns {boolean}
	 */
	isLoading(): boolean {
		console.log(this.loaderService.isLoading());

		return this.loaderService.isLoading();
	}
}
