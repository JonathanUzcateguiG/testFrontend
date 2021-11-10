import { Component, OnInit } from '@angular/core';

import { StudentService } from 'src/app/services/student/student.service';
import { LoaderService } from 'src/app/services/loader';

import { Student } from 'src/app/commons/models/student/student';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';


@Component({
	selector: 'app-request-student',
	templateUrl: './request-student.component.html',
	styleUrls: ['./request-student.component.scss']
})
export class RequestStudentComponent implements OnInit {
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
		this.getRequestStudents()
	}

	/**
	 * @method getStudents
	 * @returns {void}
	 */
	getRequestStudents(): void {
		this.loaderService.loading();
		this.students = this.studentService.getRequest();
		this.loaderService.loaded();
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
