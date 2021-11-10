import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'age', pure: false })
export class Age implements PipeTransform {

	constructor() { }

	transform(dateOfBirth: string, format: string = "dd-mm-yyyy"): any {
		if (!moment(dateOfBirth).isValid()) {
			return null;
		}
		let birthyear = moment(dateOfBirth, format);
		let visitdate = moment();
		
		let age = visitdate.diff(birthyear, 'y');
		return age;
	}
}
