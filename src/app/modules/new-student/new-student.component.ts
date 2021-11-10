import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

import { StudentService } from 'src/app/services/student/student.service';

import { Student } from 'src/app/commons/models/student/student';
import { MY_FORMATS } from 'src/app/commons/constants/my-formats';
import { HOUSE_OPTIONS } from 'src/app/commons/constants/house-options';

import { SelectOption } from 'src/app/commons/components/select-input/select-option.interface';

@Component({
	selector: 'app-new-student',
	templateUrl: './new-student.component.html',
	styleUrls: ['./new-student.component.scss'],
	providers: [
		// `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
		// `MatMomentDateModule` in your applications root module. We provide it at the component level
		// here, due to limitations of our example generation script.
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	],
})
export class NewStudentComponent implements OnInit {
	student: Student = new Student;

	options: Array<SelectOption> = [];

	profileForm = new FormGroup({
		name: new FormControl(this.student.name, [
			Validators.required,
			Validators.maxLength(20)]),
		patronus: new FormControl(this.student.patronus, [
			Validators.required,
			Validators.maxLength(10)]),
		dateOfBirth: new FormControl(this.student.dateOfBirth, [
			Validators.required]),
		house: new FormControl(this.student.house, [
			Validators.required]),
	});

	/**
	 * @constructs NewStudentComponent
	 * @param {StudentService} studentService
	 * @param {Router} router
	 */
	constructor(
		public studentService: StudentService,
		private router: Router,
		private dateAdapter: DateAdapter<Date>
	) {
		// this.dateAdapter.setLocale('en-GB'); 
		for (let key in HOUSE_OPTIONS) {
			this.options.push({ text: key, value: HOUSE_OPTIONS[key] });
		}
	}

	ngOnInit(): void {
	}

	onSubmit(): void {
		this.profileForm.value;
		console.warn(this.profileForm.value);
	}

	saveStudent(): void {
		console.log(this.student, this.profileForm);
		this.student.name = this.profileForm.value.name;
		this.student.patronus = this.profileForm.value.patronus;
		this.student.dateOfBirth = moment.utc(this.profileForm.value.dateOfBirth).format('DD-MM-YYYY');
		this.student.house = this.profileForm.value.house;
		console.log(this.student);
		
		this.studentService.storeRequestStudent(this.student);
		this.router.navigate(['/detail-student']);
	}
}
